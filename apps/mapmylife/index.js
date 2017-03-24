'use strict';
console.log( 'Hello world!' );


/** Constants **/


let APPKEY = 'mapmylife';


/** Data Store **/


let APPDATA;

function generateComparator (field) {
    return function (a, b) {
        let result = 0;
        if (a[field] > b[field]) { result =  1; }
        if (a[field] < b[field]) { result = -1; }
        //if (options.order.desc) result *= -1;
        return result;
    }
}

function loadData () {
    let prevData = localStorage.getItem(APPKEY);
    if (prevData) {
        APPDATA = JSON.parse(prevData);
    } else {
        // Create initial empty data store structure.
        APPDATA = {
            tasks: {},
        };
    }
}

function saveData () {
    localStorage.setItem( APPKEY, JSON.stringify(APPDATA) );
}


/** Setup **/


function setup () { console.log('setup()');
    let approot = document.getElementById('approot');
    approot.addEventListener( 'click',    handleClick    );
    //approot.addEventListener( 'focusout', handleFocusout );

    let form = document.getElementById('new-task');
    form.addEventListener( 'submit', handleNewTaskSubmit );

    let dueAt = document.querySelector('input[type="text"][name="dueAt"]');
    if (dueAt) {
        dueAt.addEventListener( 'input', handleDueAtValidation );
    }
}
function handleDueAtValidation (event) { console.log('handleDueAtValidation()');
    let value = event.target.value;
    let cl    = event.target.classList;
    if (value === '' ) {
        cl.remove('valid');
        cl.remove('invalid');
    } else {
        let m = moment(value);
        if (m.isValid()) {
            cl.remove('invalid');
            cl.add('valid');
        } else {
            cl.remove('valid');
            cl.add('invalid');
        }
    }
}


/** Render **/


function render () { console.log('render()');
    /* Call to render the dynamic content area.
       Destroys previous contents and rebuilds from scratch each time. */

    let approot = document.getElementById('approot');

    // Start with empty string, and build up one piece at a time.
    let content = '';

    // Open task list.
    content += `
        <div class="task-list">
            <div class="task-list-row task-list-header">
                <div class="task-actions"></div>
                <div class="task-description">Task</div>
                <div class="task-created-at">Created At</div>
                <div class="task-due-at">Due At</div>
            </div>
    `;

    // Build task list.
    let comparator = generateComparator('createdAt');
    let tasks = Object.values(APPDATA.tasks);
    tasks.sort(comparator).forEach(function (task) {
        let dueAt        = '-';
        let dueAtToolTip = 'No Due Date';
        if (task.dueAt) {
            let m = moment(task.dueAt);
            dueAt        = m.fromNow();
            dueAtToolTip = 'Due at: ' + m.format('YYYY-MM-DD HH:mm');
        }

        content += `
            <div class="task-list-row task" data-task-id="${task.id}">
                <div class="task-actions">
                    <i class="delete-widget fa fa-trash" title="Delete Task"></i>
                    <input class="complete-widget" type="checkbox" title="Complete Task" ${task.complete ? 'checked' : ''}>
                </div>
                <div class="task-description">${task.description}</div>
                <div class="task-created-at" title="Created At">${task.createdAt}</div>
                <div class="task-due-at" title="${dueAtToolTip}">${dueAt}</div>
            </div>`;
    });

    // Close task list.
    content += '</div>';

    // Add task count.
    content += `<p>${tasks.length} tasks</p>`;

    approot.innerHTML = content;
}

function save_and_render() {
    saveData();
    render();
}


/** Event Handlers **/


function handleClick (event) { console.log('handleClick()');
    switch (true) {
        case event.target.classList.contains('complete-widget'):
            handleCompleteTask(event);
            break;
        case event.target.classList.contains('delete-widget'):
            handleDeleteTask(event);
            break;
        case event.target.classList.contains('task-description'):
            handleEditTaskDescription(event);
            break;
        case event.target.classList.contains('task-due-at'):
            handleEditTaskDueAt(event);
            break;
    }
}

function handleCompleteTask (event) { console.log('handleCompleteTask()');
    /* When user clicks on the Complete Widget, toggle task.complete and re-render. */
    let taskId = findTaskId(event.target);
    APPDATA.tasks[taskId].complete = !APPDATA.tasks[taskId].complete;
    save_and_render();
}

function handleDeleteTask (event) { console.log('handleDeleteTask()');
    /* When user clicks on the Delete Widget, delete task and re-render. */
    let taskId = findTaskId(event.target);
    delete APPDATA.tasks[taskId];
    save_and_render();
}

function handleEditItem (event) { console.log('handleEditItem()');
    /* When user clicks on an Item Value, replace target with textarea for editing. */

    let key   = event.target.dataset.key;
    let value = localStorage.getItem(key);

    // Create the new textarea.
    let input = document.createElement('textarea');
    input.className   = event.target.className;     // Assign same classes as target so styling is consistent.
    input.dataset.key = key;                        // Store key in 'data-key' attribute for IDing later.

    // Setup event listener for the Esc key, which will "undo" edit mode (and any unsaved changes) by simply re-rendering.
    input.addEventListener( 'keydown', function (event) {
        if (event.keyCode == 27) {
            render();
        }
    } );

    event.target.replaceWith(input);
    input.focus();                                  // Set focus for convenience, so user can start typing immediately.

    // By re-setting the value after setting focus, the cursor will end up at the *end* of the value instead of the beginning.
    input.value = value;
}

function handleNewTaskSubmit (event) { console.log('handleNewTaskSubmit()');
    event.preventDefault();

    let form = document.getElementById('new-task');
    let description = form.elements.description.value;
    let dueAt       = form.elements.dueAt.value;
    if (dueAt !== '' && !moment(dueAt).isValid()) {
        return;
    }

    // Clear form inputs.
    form.elements.description.value = '';
    form.elements.dueAt.value       = '';

    // Generate random ID for new task.
    let id = Math.random().toString(36).substr(2, 16);

    // Add new task to app.
    APPDATA.tasks[id] = {
        complete:       false,
        createdAt:      Date.now(),
        dueAt:          dueAt,
        description:    description,
        id:             id,
    };

    save_and_render();
}



/** Utility **/


function findTaskId (startNode) {
    let taskElement = startNode.closest('.task');
    let taskId      = taskElement.dataset.taskId;
    return taskId;
}


/** Main **/


loadData();
setup();    // Setup event listeners.
render();   // Initial render.


