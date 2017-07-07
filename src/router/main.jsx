import {Router, Route, IndexRoute, hashHistory} from 'react-router';
import AppComponent from '../component/AppContainer'    
import IndexComponent from '../component/IndexContainer'

export default function AppRouter() {
    return (
        <Router history={history}>
            <Route path='/' component={AppComponent}>
                <IndexRoute component={IndexComponent} />
            </Route>
        </Router>
    )
}

