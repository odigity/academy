
    /* Firebase Initialization */

    let APP = firebase.initializeApp({
        apiKey              : "AIzaSyCwTxqweoW_WlVhod9HNJ1S3QvWccTffJo",
        authDomain          : "storyforge-e4bd9.firebaseapp.com",
        databaseURL         : "https://storyforge-e4bd9.firebaseio.com",
        storageBucket       : "storyforge-e4bd9.appspot.com",
        messagingSenderId   : "732804594438",
    });
    let AUTH = firebase.auth(APP);
    let DB   = firebase.database(APP);

    /* Redux Store -- Auth */

    const auth_reducer = ( state = null, action ) => {
        switch (action.type) {
            case 'USER_SIGNED_IN':  return action.user.uid;
            case 'USER_SIGNED_OUT': return null;
            default:                return state;
        }
    }

    // bind Firebase auth state
    AUTH.onAuthStateChanged( (user) => {
        if (user) {
            console.log( 'onAuthStateChanged -> signed in' );
            STORE.dispatch({ type: 'USER_SIGNED_IN', user: user });
        } else {
            console.log( 'onAuthStateChanged -> NOT signed in' );
            STORE.dispatch({ type: 'USER_SIGNED_OUT' });
        }
    });

    // helpers
    const current_user = () => STORE.getState().auth;

    /* Redux Store -- Profiles */

    const profiles_reducer = ( state = {}, action ) => {
        switch (action.type) {
            case 'PROFILES_IMPORT':     return action.profiles;
            case 'PROFILE_ADDED':       return { ...state, [action.id]: action.profile };
            case 'PROFILE_CHANGED':     return { ...state, [action.id]: action.profile };
            case 'PROFILE_REMOVED':
                let newState = { ...state };
                delete newState[action.id];
                return newState;
            default:                    return state;
        }
    }

    // bind db.profiles
    DB.ref('users').once( 'value', ( snapshot ) => {
        console.log( 'DB.users.on(value) -> ', snapshot.val() );
        STORE.dispatch({ type: 'PROFILES_IMPORT', profiles: snapshot.val() });
    } );
    DB.ref('users').on( 'child_added', ( snapshot ) => {
        console.log( 'DB.users.on(child_added) -> ', snapshot.key, snapshot.val() );
        STORE.dispatch({ type: 'PROFILE_ADDED', id: snapshot.key, profile: snapshot.val() });
    } );
    DB.ref('users').on( 'child_changed', ( snapshot ) => {
        console.log( 'DB.users.on(child_changed) -> ', snapshot.key, snapshot.val() );
        STORE.dispatch({ type: 'PROFILE_CHANGED', id: snapshot.key, profile: snapshot.val() });
    } );
    DB.ref('users').on( 'child_removed', ( snapshot ) => {
        console.log( 'DB.users.on(child_removed) -> ', snapshot.key, snapshot.val() );
        STORE.dispatch({ type: 'PROFILE_REMOVED', id: snapshot.key });
    } );

    // helpers
    const get_display_name = (uid) => {
        let profile = STORE.getState().profiles[uid];
        return profile ? profile.display_name : '';
    }
    const set_display_name = (uid, display_name) => {
        DB.ref(`/users/${uid}`).set({ display_name: display_name });
    }

    /* Redux Store -- Stories */

    const stories_reducer = ( state = {}, action ) => {
        switch (action.type) {
            case 'STORIES_IMPORT':      return action.stories;
            case 'STORY_ADDED':         return { ...state, [action.id]: action.story };
            case 'STORY_CHANGED':       return { ...state, [action.id]: action.story };
            case 'STORY_REMOVED':
                let newState = { ...state };
                delete newState[action.id];
                return newState;
            default:                    return state;
        }
    }

    // bind db.stories
    DB.ref('stories').once( 'value', ( snapshot ) => {
        console.log( 'DB.stories.on(value) -> ', snapshot.val() );
        STORE.dispatch({ type: 'STORIES_IMPORT', stories: snapshot.val() });
    } );
    DB.ref('stories').on( 'child_added', ( snapshot ) => {
        console.log( 'DB.stories.on(child_added) -> ', snapshot.key, snapshot.val() );
        STORE.dispatch({ type: 'STORY_ADDED', id: snapshot.key, story: snapshot.val() });
    } );
    DB.ref('stories').on( 'child_changed', ( snapshot ) => {
        console.log( 'DB.stories.on(child_changed) -> ', snapshot.key, snapshot.val() );
        STORE.dispatch({ type: 'STORY_CHANGED', id: snapshot.key, story: snapshot.val() });
    } );
    DB.ref('stories').on( 'child_removed', ( snapshot ) => {
        console.log( 'DB.stories.on(child_removed) -> ', snapshot.key, snapshot.val() );
        STORE.dispatch({ type: 'STORY_REMOVED', id: snapshot.key });
    } );

    // helpers
    const get_stories = () => {
        // STORE.getState().profiles[uid].display_name;
    }

    /* Redux Store -- Initialization */

    const app_reducer = Redux.combineReducers({
        auth:       auth_reducer,
        profiles:   profiles_reducer,
        stories:    stories_reducer
    });

    const STORE = Redux.createStore(app_reducer);

    /* React-Router Imports */

    let BrowserRouter   = ReactRouter.BrowserRouter,
        Link            = ReactRouter.Link,
        Match           = ReactRouter.Match,
        Miss            = ReactRouter.Miss;

    /* Utility Functions */

    function bindToAuth (that) {
        that.unbindAuth = AUTH.onAuthStateChanged( function (user) {
            if (user) {
                console.log( 'onAuthStateChanged -> signed in' );
                that.setState({ user: user });
            } else {
                console.log( 'onAuthStateChanged -> NOT signed in' );
                that.setState({ user: null });
            }
        });
    }

    function valWithID (snapshot) {
        let val = snapshot.val();
        val._id = snapshot.key;
        return val;
    }

    /* Utility Components */

    class LoaderPanel extends React.Component {
        render () { return (
            <div className="panel">Loading ...</div>
        )}
    }

    /* Layout */

    class App extends React.Component {
        render () { console.log( 'App.render' ); return (
            <div id="app">
                <Header />
                <Match pattern="/"                      component={ HomePage          } exactly />
                <Match pattern="/about"                 component={ AboutPage         } />
                <Match pattern="/browse"                component={ BrowseStoriesPage } />
                <Match pattern="/login"                 component={ LoginPage         } />
                <Match pattern="/new"                   component={ NewStoryPage      } />
                <Match pattern="/signup"                component={ SignUpPage        } />
                <Match pattern="/authors/:author"       component={ AuthorPage        } />
                <Match pattern="/stories/:slug/:nodes?" component={ StoryPage } />
                <Footer />
            </div>
        )}
    }

    class Header extends React.Component {
        handleLogoutClick (event) {
            console.log( 'Header.handleLogoutClick' );
            event.preventDefault();
            AUTH.signOut();
        }

        render () { return (
            <nav id="header">
                <ul>
                    <li><Link to="/browse">Browse Stories</Link></li>
                    { current_user() && <li><Link to={ `/authors/${current_user()}` }>My Stories</Link></li> }
                    { current_user() && <li><Link to="/new">New Story</Link></li> }
                    <li><Link to="/about">About</Link></li>
                    <li>{ current_user() ?
                        <a href="#" onClick={ this.handleLogoutClick.bind(this) }>Logout</a>
                    :
                        <Link to="/login">Login</Link>
                    }</li>
                </ul>
                <h1><Link to="/">StoryForge</Link></h1>
            </nav>
        )}
    }

    class Footer extends React.Component {
        render () { return (
            <div id="footer" className="panel">&copy; 2016 Jon Pawelko</div>
        )}
    }

    /* Page -- Login */

    class LoginPage extends React.Component {
        handleSubmit (event) {
            console.log( 'LoginPage.handleSubmit' );
            event.preventDefault();
            let email    = event.target.email.value;
            let password = event.target.password.value;
            AUTH.signInWithEmailAndPassword( email, password ).catch( function (error) {
                console.log( '*** error: ', error );
            });
        }

        render () { return (
            <div className="panel">
                <h2>Login</h2>
            { current_user() ?
                <p>You are logged in.</p>
            :
                <form onSubmit={ this.handleSubmit.bind(this) }>
                    <label>Email</label> <input type="email" name="email" required />
                    <label>Password</label> <input type="password" name="password" required />
                    <button type="submit">Submit</button>
                    <p><Link to="/signup">Sign up for a new account.</Link></p>
                </form>
            }
            </div>
        )}
    }

    /* Page -- Sign Up */

    class SignUpPage extends React.Component {
        handleSubmit (event) {
            console.log( 'SignUpPage.handleSubmit' );
            event.preventDefault();

            let display_name = event.target.display_name.value;
            let email        = event.target.email.value;
            let password     = event.target.password.value;

            AUTH.createUserWithEmailAndPassword( email, password ).then(
                (user)  => { DB.ref(`/users/${user.uid}`).set({ display_name: display_name }) },
                (error) => { console.log( '*** error: ', error ) }
            );
        }

        render () { return (
            <div className="panel">
                <h2>Sign Up</h2>
            { current_user() ?
                <p>You are logged in.</p>
            :
                <form onSubmit={ this.handleSubmit.bind(this) }>
                    <label>Name</label> <input type="text" name="display_name" required />
                    <label>Email</label> <input type="email" name="email" required />
                    <label>Password</label> <input type="password" name="password" required />
                    <button type="submit">Submit</button>
                </form>
            }
            </div>
        )}
    }

    /* Page -- Home */

    class HomePage extends React.Component {
        render () { return (
            <div>
                <WelcomePanel />
                <NewStoriesPanel />
            </div>
        )}
    }

    class WelcomePanel extends React.Component {
        render () { return (
            <div className="panel">Welcome to StoryForge! Insert explanation here...</div>
        )}
    }

    class NewStoriesPanel extends React.Component {
        render () { return (
            <div className="panel">
                <h2>New Stories</h2>
                <StoryList recent={3} />
            </div>
        )}
    }

    /* Page -- BrowseStories */

    class BrowseStoriesPage extends React.Component {
        render () { return (
            <div className="panel">
                <h2>Browse Stories</h2>
                <StoryList />
            </div>
        )}
    }

    /* Page -- About */

    class AboutPage extends React.Component {
        render () { return (
            <div className="panel">
                <h2>About</h2>
                <p>This is a demo app.</p>
            </div>
        )}
    }

    /* Page -- Author */

    class AuthorPage extends React.Component {
        render () { return (
            <div>
                <AuthorProfilePanel author={ this.props.params.author } />
                <AuthorStoriesPanel author={ this.props.params.author } />
            </div>
        )}
    }

    class AuthorProfilePanel extends React.Component {
        render () { return (
            <div className="panel">
                <h2>Profile for { get_display_name(this.props.author) }</h2>
            </div>
        )}
    }

    class AuthorStoriesPanel extends React.Component {
        render () { return (
            <div className="panel">
                <h2>Stories</h2>
                <StoryList author={ this.props.author } />
            </div>
        )}
    }

    /* Page -- Story */

    class StoryPage extends React.Component {
        constructor (props) {
            super(props);
            this.state = { loaded: false };

            // load story
            this.query = DB.ref('stories').orderByChild('slug').equalTo(this.props.params.slug);
            this.query.on( 'value', function ( snapshot ) {
                console.log( 'StoryPage snapshot: ', snapshot.val() );
                this.setState( Object.values(snapshot.val())[0] );
                this.setState({ loaded: true });
            }.bind(this));
        }

        componentWillUnmount () {
            this.query.off();
        }

        appendNode (basepath, node) {
            return (basepath.charAt(basepath.length - 1) === '/') ? `${basepath}${node}` : `${basepath}-${node}` ;
        }

        render () { console.log( `StoryPage.render` );
            if (!this.state.loaded) return <LoaderPanel />;

            let basepath = `/stories/${this.props.params.slug}/`;
            let nodelist = this.props.params.nodes ? this.props.params.nodes.split('-') : [];

            return (
                <div>
                    <StoryHeaderPanel {...this.state} />
                    <StoryNodePanel key={this.state.first_node_id} id={this.state.first_node_id} basepath={basepath} appender={this.appendNode} />
                    { nodelist.map( (node) =>
                        <StoryNodePanel key={node} id={node} basepath={basepath = this.appendNode(basepath, node)} appender={this.appendNode} />
                    ) }
                </div>
            )
        }
    }

    class StoryHeaderPanel extends React.Component {
        render () { console.log( `StoryHeaderPanel.render` ); return (
            <div className="panel story-page clearfix">
                <img src="/story.png" />
                <h2>{ this.props.title }</h2>
                <h3>
                    by <Link to={ `/authors/${this.props.author}` }>{ get_display_name(this.props.author) }</Link>,
                    started on { this.props.created_at } ({ this.props.node_count } nodes)
                </h3>
                <p>{ this.props.description }</p>
            </div>
        )}
    }

    class StoryNodePanel extends React.Component {
        constructor (props) {
            super(props);
            console.log( `StoryNodePanel(${this.props.id})` );
            this.state = {
                content: 'loading ...',
                options: {}
            };

            this.loadStoryNode(this.props.id);
        }

        componentWillReceiveProps (nextProps) {
            console.log( `StoryNodePanel(${this.props.id}).componentWillReceiveProps: `, nextProps );
            if (nextProps.id != this.props.id) this.loadStoryNode(nextProps.id);
        }

        loadStoryNode (id) {
            if (this.query) this.query.off();  // first cancel previous subscription

            this.query = DB.ref( `story_nodes/${id}` );
            this.query.on( 'value', function( snapshot ) {
                console.log( `StoryNodePanel(${id}) -> data received: `, snapshot.val() );
                let newState = snapshot.val();
                if (!newState.options) newState.options = {};
                this.setState( newState );
            }.bind(this));
        }

        componentWillUnmount () {
            this.query.off();
        }

        render () { console.log( `StoryNodePanel(${this.props.id}).render` ); return (
            <div>
                <div className="panel">
                    <div className="node-content">{ this.state.content }</div>
                    <ul>
                    { Object.entries(this.state.options).map( (entry) =>
                        <li key={ entry[0] }><Link to={ this.props.appender(this.props.basepath, entry[0]) }>{ entry[1] }</Link></li>
                    ) }
                    </ul>
                </div>
            </div>
        )}
    }

    /* Page -- New Story */

    class NewStoryPage extends React.Component {
        constructor (props) {
            super(props);
            this.state = {};

            this.handleSubmit = this.handleSubmit.bind(this);
        }

        handleSubmit (event) {
            console.log( 'NewStoryPage.handleSubmit' );
            event.preventDefault();

// TODO
        }

        render () { return (
            <div className="panel new-story">
                <h2>New Story</h2>
                <form onSubmit={ this.handleSubmit }>
                    <label>Title</label> <input type="text" name="title" required />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )}
    }

    /* Components */

    class StoryList extends React.Component {
        constructor (props) {
            super(props);
            this.state = { stories: [] };
        }

        componentWillMount () {
            this.query = DB.ref('stories');
            if (this.props.author) {
                this.query = this.query.orderByChild('author').equalTo(this.props.author);
            } else if (this.props.recent) {
                this.query = this.query.orderByChild('created_at').limitToLast(this.props.recent);
            }

            this.query.on( 'child_added', function( snapshot ) {
                this.setState( (prevState) => ({
                    stories: prevState.stories.concat([ valWithID(snapshot) ])
                }) );
            }.bind(this));
        }

        componentWillUnmount () {
            this.query.off();
        }

        render () { return (
            <ul className="reset">
            { this.state.stories.slice().sort( (a,b) => a.created_at < b.created_at ).map( (story) =>
                <li key={ story._id }><StoryItem { ...story } /></li>
            )}
            </ul>
        )}
    }

    class StoryItem extends React.Component {
        render () { return (
            <div className="story-item">
                <img src="/story.png" />
                <h3>
                    <Link to={ `/stories/${this.props.slug}` }>{ this.props.title }</Link>
                    &nbsp;by <Link to={ `/authors/${this.props.author}` }>{ get_display_name(this.props.author) }</Link>
                </h3>
                <h4>Started on { this.props.created_at } &mdash; { this.props.node_count } nodes</h4>
                <p>{ this.props.description }</p>
            </div>
        )}
    }

    /* Start App */

//    ReactDOM.render( <BrowserRouter><App /></BrowserRouter>, document.getElementById('root') );

    const render = () => ReactDOM.render( <BrowserRouter><App /></BrowserRouter>, document.getElementById('root') );
    STORE.subscribe(render);
    render();



