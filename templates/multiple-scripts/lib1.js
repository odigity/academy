// Put some of your JavaScript in this file.

'use strict';   // Enable "strict mode".  Note: This *must* be the first statement in the script.
                // See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode

// Declare a function at the top level, which will add its identifier to the global object.
function greeter () {
    // Refers to the global 'greeting' var declared in 'lib2.js'.
    // This will work as long as 'lib2.js' is loaded before 'index.js'.
    console.log(greeting);
}

