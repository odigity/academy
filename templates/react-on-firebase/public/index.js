// Put your JavaScript in this file.

'use strict';   // Enable "strict mode".  Note: This *must* be the first statement in the script.
                // See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode


/* Firebase Initialization */

let APP = firebase.initializeApp({
    apiKey              : "AIzaSyAEG-OUYzC8ACBuZ_diG3tJ4tSAp2kwPB4",
    authDomain          : "project-template-react.firebaseapp.com",
    databaseURL         : "https://project-template-react.firebaseio.com",
    storageBucket       : "project-template-react.appspot.com",
    messagingSenderId   : "1051875278169"
});
let AUTH = firebase.auth(APP);
let DB   = firebase.database(APP);

/* ReactRouter Imports */

var BrowserRouter = ReactRouter.BrowserRouter,
    Link          = ReactRouter.Link,
    Match         = ReactRouter.Match;


/* React App */

class App extends React.Component {
    render () {
        return (
            <BrowserRouter>
                <div>
                    <Header />
                    <Match exactly pattern="*/" component={Home} />
                    <Match pattern="*/about" component={About} />
                    <Match pattern="*/login" component={LoginPage} />
                    <Match pattern="*/signup" component={SignUpPage} />
                </div>
            </BrowserRouter>
        );
    }
}

class Header extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            displayName: ''
        };

        AUTH.onAuthStateChanged( (user) => {
            if (user) {
                console.log( 'onAuthStateChanged -> signed in' );
                this.setState({ user: user });
                this.subscribeToDisplayName(user.uid);
            } else {
                console.log( 'onAuthStateChanged -> NOT signed in' );
                this.setState({ user: null, displayName: '' });
                this.unsubscribeToDisplayName();
            }
        } );
    }

    subscribeToDisplayName (uid) {
        console.log( `Header.subscribeToDisplayName(${uid})` );
        if (this.query) { this.unsubscribeToDisplayName(); }

        this.query = DB.ref(`/users/${uid}`);
        this.query.on( 'value', ( snapshot ) => {
             console.log( 'user profile updated' );
             this.setState({ displayName: snapshot.val().displayName });
        } );
    }

    unsubscribeToDisplayName () {
        console.log( 'Header.unsubscribeToDisplayName' );
        this.query && this.query.off();
        this.query = undefined;
    }

    handleLogoutClick (event) {
        console.log( 'Header.handleLogoutClick' );
        AUTH.signOut();
        event.preventDefault();
    }

    render () {
        return (
            <ul>
                <li><Link to="./">Home</Link></li>
                <li><Link to="./about">About</Link></li>
                <li>
                { this.state.user ?
                    <span>Welcome {this.state.displayName} (<a href="#" onClick={this.handleLogoutClick.bind(this)}>Logout</a>)</span>
                :
                    <Link to="./login">Login</Link>
                }
                </li>
            </ul>
        );
    }
}

class LoginPage extends React.Component {
    handleSubmit (event) {
        console.log( 'LoginPage.handleSubmit' );

        let email    = event.target.email.value;
        let password = event.target.password.value;

        AUTH.signInWithEmailAndPassword( email, password ).catch( (error) => {
            console.log( '*** error: ', error );
        });

        event.preventDefault();
    }

    render () {
        return (
            <div>
                <h2>Login</h2>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <label>Email</label> <input type="email" name="email" required />
                    <label>Password</label> <input type="password" name="password" required />
                    <button type="submit">Submit</button>
                    <p><Link to="./signup">Sign up for a new account.</Link></p>
                </form>
            </div>
        );
    }
}

class SignUpPage extends React.Component {
    handleSubmit (event) {
        console.log( 'SignUpPage.handleSubmit' );

        let displayName = event.target.displayName.value;
        let email       = event.target.email.value;
        let password    = event.target.password.value;

        AUTH.createUserWithEmailAndPassword( email, password ).then( (user) => {
            DB.ref(`/users/${user.uid}`).set({ displayName: displayName });
        }, function (error) {
            console.log( '*** error: ', error );
        });

        event.preventDefault();
    }

    render () {
        return (
            <div>
                <h2>Sign Up</h2>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <label>Name</label> <input type="text" name="displayName" required />
                    <label>Email</label> <input type="email" name="email" required />
                    <label>Password</label> <input type="password" name="password" required />
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

const Home  = () => ( <div><h2>Home</h2></div> )
const About = () => ( <div>
    <h2>About</h2>
    <p>
        Thanks to the Rewrite rules, you can refresh this page and it will reload just fine!
        Note this will only work when the app is either hosted by Firebase, or served locally using 'firebase serve'.
    </p>
</div> )


ReactDOM.render( <App />, document.getElementById('root') );

