# Resources

## React


Start here:
Kevin: Try adding some text.
This is text added in response to your request.
Nice.

* http://facebook.github.io/react/docs/hello-world.html (read at least the Quick Start guides)

Interactive Hello World:

* http://codepen.io/gaearon/pen/rrpgNB?editors=0010

React Dev Tools:
* https://github.com/facebook/react-devtools (Firefox, Chrome)

## React-Router

Note: Version v4 is still in beta, but is completely redesigned from v3, so we're going to start using it now rather than learn two versions in a row.

Use these resources, which are for v4:

* [https://react-router.now.sh/](v4 Home) (Quick Start, Examples, API)
* [Version 4 Announcement & FAQ](https://github.com/ReactTraining/react-router/blob/v4/README.md)

Avoid these resources, which are for v3:

* [https://github.com/ReactTraining/react-router](v3 Home) (README, docs, examples)
* [https://github.com/reactjs/react-router-tutorial](v3 Tutorial)

## Firebase

Start here:

* [Firebase Get Started for Web](https://firebase.google.com/docs/web/setup)

Read the guides for the tools and services we'll be using:

* [Auth Guide](https://firebase.google.com/docs/auth/)
* [Database Guide](https://firebase.google.com/docs/database/)
* [Hosting Guide](https://firebase.google.com/docs/hosting/)
* [Storage Guide](https://firebase.google.com/docs/storage/)
* [API Reference](https://firebase.google.com/docs/reference/js/)
* [CLI Reference](https://firebase.google.com/docs/cli/)

[Shortcut to Firebase Console](https://console.firebase.google.com/)

Skip the [FriendlyChat tutorial](https://codelabs.developers.google.com/codelabs/firebase-web/), as it doesn't actually teach you anything.

# Setup & Development

### The Minimum to Serve the App Locally

1. Install Node.js ([Main Downloads Page](https://nodejs.org/en/download/)) ([Installing via Package Manager](https://nodejs.org/en/download/package-manager/))
1. Install firebase-tools npm package:
  * `sudo npm install -g firebase-tools` (for Linux and OSX, don't know Windows)
1. Open a shell, `cd` to the project directory, and run:
  * `firebase serve`

### If You Want to Deploy

Go through the steps of the [Firebase Get Started for Web](https://firebase.google.com/docs/web/setup):

1. Create a Firebase Project using the [Console](https://console.firebase.google.com/).
1. Edit _.firebaserc_ to replace my Project ID (storyforge-e4bd9) with yours.
1. Edit _public/app.js_ to replace my Firebase initialization snippet with yours.
1. Open a shell, `cd` to the project directory, and run:
  * `firebase deploy`
