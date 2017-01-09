# Academy

Templates, demos, and docs for web dev students.

## Table of Contents

* [apps/](apps/) &mdash; example web apps (client-side JavaScript only)
    * [StoryForge](apps/storyforge) &mdash; a multi-user choose-your-own-adventure authoring & browsing app (React, Redux, Firebase)
* [docs/](docs/) &mdash; general web dev educational resources
* [sites/](sites/) &mdash; example web sites (static HTML, CSS, and images)
    * [All About Monkeys](sites/monkeys/) &mdash; a one-page informational site about monkeys
* [templates/](templates/) &mdash; example project templates of every variety (check out the source files for comments)
    * [All-in-One](templates/all-in-one/) &mdash; demonstrates combining your HTML, CSS, and JavaScript all in one file
    * [One-File-Per-Type](templates/one-file-per-type/) &mdash; demonstrates separating your HTML, CSS, and JavaScript in three separate files, one file per resource type
    * [Multiple Scripts](templates/multiple-scripts/) &mdash; demonstrates separating your JavaScript into multiple files which will be loaded as scripts
    * [Client-Side React](templates/client-side-react/) &mdash; demonstrates including React and React-Router libraries (but without any server-side tooling), and is based on the One-File-Per-Type template
    * [Firebase](templates/firebase/) &mdash; demonstrates using Firebase Hosting, and is based on the One-File-Per-Type template
    * [React on Firebase](templates/react-on-firebase/) &mdash; demonstrates using React with Firebase Hosting, Auth, and Database, and is based on a combination of the Client-Side React and Firebase templates
    * [Create React App](templates/create-react-app/) &mdash; an example of the results of using the [Create React App](https://github.com/facebookincubator/create-react-app) tool from Facebook; see the [Create React App](docs/Create React App.md) doc for details
    
## Viewing Apps, Sites, and Templates

You can't see what a web page looks like by viewing the source code on GitHub.
You need to load the file directly with your browser &mdash; preferably from a web server rather than your filesystem so you get HTTP URLs and behavior instead of an ugly `file:///` URL with broken JavaScript.

To do that, first clone this repository to your local filesystem, then run a webserver from the repository root.
I've included an `index.html` in the root with shortcut links to all sections for your convenience.

### Quick Web Server Option

Install the `serve` Node package (`npm install serve`), then simply run `serve`.

Will bind to: [http://localhost:3000/](http://localhost:3000/)

## Professional Versions

If you want the most professional, sophisticated, concensus-driven web template, check out:

* [HTML5 Boilerplate](https://html5boilerplate.com/)
* [Initializr](http://www.initializr.com/)
