import { createStore, applyMiddleware, compose} from 'redux'
import rootReducer from '../reducers'

export default function configureStore(initialState) {
    const store = createStore(rootReducer, initialState, compose(
      applyMiddleware(
        ReduxThunk,ReduxLogger
      ),
    //   window.devToolsExtension ? window.devToolsExtension() : f => f
    ));

  return store
}