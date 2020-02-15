export default function optionSelectedReducer(state = 'SHOW_ALL',action){
    if(action.type === 'FILTER_MODE'){
      return action.text
    };
    return state
  }