import React,{Component} from 'react';
import {
  View,Text,StatusBar,Platform,SafeAreaView, Button, TouchableOpacity,StyleSheet, FlatList
} from 'react-native';
import Box from './src/components/Box';
import List from './src/components/List';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
const defWords = [
  {id: 1, en: 'One', vn: 'Mot', isMemorized: true},
  {id: 2, en: 'Two', vn: 'Hai', isMemorized: false},
  {id: 3, en: 'Three', vn: 'Ba', isMemorized: false},
  {id: 4, en: 'Four', vn: 'Bon', isMemorized: true},
  {id: 5, en: 'Five', vn: 'Nam', isMemorized: true},
  {id: 6, en: 'Six', vn: 'Sau', isMemorized: true},
  {id: 7, en: 'Seven', vn: 'Bay', isMemorized: true},
]
const defStore = {
  words:defWords,
  shouldShowForm:false,
  optionSelected: 'SHOW_ALL',
}
const store = createStore((state = defStore,action)=>{
  if(action.type ==='TOGGLE_FORM'){
    return {...state,shouldShowForm: !state.shouldShowForm}
  }
  if(action.type ==='ADD_WORD'){
    const words = state.words.concat(action.newWord)
    return {...state,words,shouldShowForm:!state.shouldShowForm}
  }
  if(action.type === 'TOGGLE_MEMORIZED'){
      const words = state.words.map(word => {
        if (word.id === action.id) {
          return {...word, isMemorized: !word.isMemorized};
        }
        return word;
      });
      return {...state,words:words}
  };
  if(action.type === 'REMOVE_WORD'){
    const words = state.words.filter(word => {
      if (word.id === action.id) {
        return false;
      }
      return true;
    });
    return {...state,words:words}
  };
  if(action.type === 'FILTER_MODE'){
    return {...state,optionSelected: action.text}
  };
  return state;
})
class App extends Component{
  //
  render(){
    return(
      <SafeAreaView style={{flex:1, justifyContent:'center',alignItems:'center',
      }}>
        <Provider store = {store}>
           <List/>
        </Provider>
      </SafeAreaView>
    )
  }
}
export default App;