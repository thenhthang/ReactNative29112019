import { createStore, combineReducers } from 'redux';
const defWords = [
    {id: 1, en: 'One', vn: 'Mot', isMemorized: true},
    {id: 2, en: 'Two', vn: 'Hai', isMemorized: false},
    {id: 3, en: 'Three', vn: 'Ba', isMemorized: false},
    {id: 4, en: 'Four', vn: 'Bon', isMemorized: true},
    {id: 5, en: 'Five', vn: 'Nam', isMemorized: true},
    {id: 6, en: 'Six', vn: 'Sau', isMemorized: true},
    {id: 7, en: 'Seven', vn: 'Bay', isMemorized: true},
  ]
  function wordsReducer(state = defWords,action){
   
    if(action.type ==='ADD_WORD'){
      const words = state.concat(action.newWord)
      return words
    }
    if(action.type === 'TOGGLE_MEMORIZED'){
      const words = state.map(word => {
        if (word.id === action.id) {
          return {...word, isMemorized: !word.isMemorized};
        }
        return word;
      });
      return words
    };
    if(action.type === 'REMOVE_WORD'){
      const words = state.filter(word => {
        if (word.id === action.id) {
          return false;
        }
        return true;
      });
      return words
    };
    return state
  }
  function shouldShowFormReducer(state = false,action){
    if(action.type ==='ADD_WORD'){
      return !state
    }
    if(action.type ==='TOGGLE_FORM'){
      return !state
    }
    
    return state
  }
  function optionSelectedReducer(state = 'SHOW_ALL',action){
    if(action.type === 'FILTER_MODE'){
      return action.text
    };
    return state
  }
  const rootReducer = combineReducers({
    words: wordsReducer,
    shouldShowForm: shouldShowFormReducer,
    optionSelected: optionSelectedReducer,
  })
  const store = createStore(rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    )
export default store