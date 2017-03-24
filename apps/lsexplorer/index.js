'use strict';
console.log( 'Hello world!' );


/** Setup **/


function setup () { console.log('setup()');
    let approot = document.getElementById('approot');
    approot.addEventListener( 'click',    handleClick    );
    approot.addEventListener( 'focusout', handleFocusout );

    let form = document.getElementById('new-item');
    form.addEventListener( 'submit', handleNewItemSubmit );

    // Re-render content whenever localStorage is modified by another window.
    // https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API#Responding_to_storage_changes_with_the_StorageEvent
    window.addEventListener( 'storage', render );
}


/** Render **/


function render () { console.log('render()');
    /* Call to render the dynamic content area (the item list and item count).
       Destroys previous contents and rebuilds from scratch each time. */

    let approot = document.getElementById('approot');

    // Start with empty string, and build up one piece at a time.
    let content = '';

    // Open item list.
    content += '<div class="item-list">';

    // Build item list.
    let items = localStorage.length;
    for ( let i = 0; i < items; ++i ) {
        let key   = localStorage.key(i);
        let value = localStorage.getItem(key);

        content += `
            <div class="item">
                <div class="item-key">
                    <a class="delete-widget" data-key="${key}" href="#">delete</a>
                    ${key}:
                </div>
                <div class="item-value" data-key="${key}">${value}</div>
            </div>`;
    }

    // Close item list.
    content += '</div>';

    // Add item count.
    content += `<p>${items} items</p>`;

    approot.innerHTML = content;
}


/** Event Handlers **/


function handleClick (event) { console.log('handleClick()');
    switch (true) {
        case event.target.classList.contains('delete-widget'):
            handleDeleteItem(event);
            break;
        case event.target.classList.contains('item-value'):
            handleEditItem(event);
            break;
    }
}

function handleDeleteItem (event) { console.log('handleDeleteItem()');
    /* When user clicks on the Delete Widget, delete item and re-render. */
    event.preventDefault();
    let key = event.target.dataset.key;
    localStorage.removeItem(key);
    render();
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

function handleEditItemSubmit (event) { console.log('handleEditItemSubmit()');
    let key   = event.target.dataset.key;
    let value = event.target.value;
    localStorage.setItem( key, value );
    render();
}

function handleFocusout (event) { console.log('handleFocusout()');
    // We want to auto-save the value when a textarea loses focus, such as by pressing tab or clicking elsewhere.
    if (event.target.tagName == 'TEXTAREA') {
        handleEditItemSubmit(event);
    }
}

function handleNewItemSubmit (event) { console.log('handleNewItemSubmit()');
    event.preventDefault();

    let form  = document.getElementById('new-item');
    let key   = form.elements.key.value;
    let value = form.elements.value.value;

    // Clear form inputs.
    form.elements.key.value   = '';
    form.elements.value.value = '';

    localStorage.setItem( key, value );
    render();
}


/** Main **/


setup();    // Setup event listeners.
render();   // Initial render.


