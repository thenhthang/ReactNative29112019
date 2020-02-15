const defWords = [
  {_id: 1, en: 'One', vn: 'Mot', isMemorized: true},
  {_id: 2, en: 'Two', vn: 'Hai', isMemorized: false},
  {_id: 3, en: 'Three', vn: 'Ba', isMemorized: false},
  {_id: 4, en: 'Four', vn: 'Bon', isMemorized: true},
  {_id: 5, en: 'Five', vn: 'Nam', isMemorized: true},
  {_id: 6, en: 'Six', vn: 'Sau', isMemorized: true},
  {_id: 7, en: 'Seven', vn: 'Bay', isMemorized: true},
]
export default function wordsReducer(state = defWords,action){
   
    if(action.type ==='ADD_WORD'){
      const words = state.concat(action.newWord)
      return words
    }
    if(action.type === 'TOGGLE_MEMORIZED'){
      const words = state.map(word => {
        if (word._id === action._id) {
          return {...word, isMemorized: !word.isMemorized};
        }
        return word;
      });
      return words
    };
    if(action.type === 'REMOVE_WORD'){
      const words = state.filter(word => {
        if (word._id === action._id) {
          return false;
        }
        return true;
      });
      return words
    };
    
    return state
}