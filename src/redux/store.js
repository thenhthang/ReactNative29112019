import { createStore, combineReducers,applyMiddleware } from 'redux';
import wordsReducer from './reducers/wordsReducer';
import thunk from 'redux-thunk'
import shouldShowFormReducer from './reducers/shouldShowFormReducer';
import optionSelectedReducer from './reducers/optionSelectedReducer';


  const rootReducer = combineReducers({
    words: wordsReducer,
    shouldShowForm: shouldShowFormReducer,
    optionSelected: optionSelectedReducer,
  })
  const store = createStore(rootReducer,applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    )
export default store