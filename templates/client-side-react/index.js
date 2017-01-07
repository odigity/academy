// Put your JavaScript in this file.

'use strict';   // Enable "strict mode".  Note: This *must* be the first statement in the script.
                // See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode

var BrowserRouter = ReactRouter.BrowserRouter,
    Link          = ReactRouter.Link,
    Match         = ReactRouter.Match;


class App extends React.Component {
    render () {
        return (
            <BrowserRouter>
                <div>
                    <ul>
                        <li><Link to="./">Home</Link></li>
                        <li><Link to="./about">About</Link></li>
                    </ul>

                    <Match exactly pattern="*/" component={Home} />
                    <Match pattern="*/about" component={About} />
                </div>
            </BrowserRouter>
        );
    }
}

const Home  = () => ( <div><h2>Home</h2></div> )
const About = () => ( <div>
    <h2>About</h2>
    <p>
        Warning: If you refresh while on this page, you will get a "404 Not Found" because the server doesn't know about the '/about' route.
        To see a simple solution to this problem, check out the <a href="http://localhost:3000/templates/react-on-firebase/public/">React on Firebase</a> template.
    </p>
</div> )


ReactDOM.render( <App />, document.getElementById('root') );

