# Academy

Tools, apps, and docs for web dev students.

## Table of Contents

* [apps](apps/) &mdash; example web apps (client-side JavaScript only)
    * [StoryForge](apps/storyforge) &mdash; a multi-user choose-your-own-adventure authoring & browsing app (React, Redux, Firebase)
* [docs](docs/) &mdash; general web dev educational resources
* [sites](sites/) &mdash; example web sites (static HTML, CSS, and images)
    * [All About Monkeys](sites/monkeys/) &mdash; a one-page informational site about monkeys
* [templates](templates/) &mdash; example project templates of every variety

## Viewing Apps, Sites, and Templates

You can't see what a web page looks like by viewing the source code on GitHub.
You need to load the file directly with your browser &mdash; preferably from a web server rather than your filesystem so you get HTTP urls and behavior instead of an ugly `file:///` url with broken JavaScript.

To do that, first clone this repository to your local filesystem, then run a webserver from the repository root.
I've included an `index.html` in the root with shortcut links to all sections for your convenience.

### Quick Web Server Option

Install the `serve` Node package (`npm install serve`), then simply run `serve`.

Will bind to: [http://localhost:3000/](http://localhost:3000/)

