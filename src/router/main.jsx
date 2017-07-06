import {Router, Route, IndexRoute, hashHistory} from 'react-router';

export default function AppRouter() {
    return (
        <Router history={history}>
            <Route path='/' component={AppComponent}>
                <IndexRoute component={IndexComponent} />
            </Route>
        </Router>
    )
}

