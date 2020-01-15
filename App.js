import React,{Component} from 'react';
import {
  View,Text,StatusBar,Platform,SafeAreaView, Button, TouchableOpacity,StyleSheet, FlatList
} from 'react-native';
import Box from './src/components/Box';
import List from './src/components/List';
import { Provider } from 'react-redux';
import store from './src/redux/store';

/*
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
*/
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