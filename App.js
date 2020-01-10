import React,{Component} from 'react';
import {
  View,Text,StatusBar,Platform,SafeAreaView, Button, TouchableOpacity,StyleSheet, FlatList
} from 'react-native';
import Box from './src/components/Box';
import List from './src/components/List';
import { createStore } from 'redux';
//Function , return ve 1 function
const store = createStore((state = 0,action)=>{
  if(action.type === "INCREASE"){
    return state + 1;
  }
  return state;
})

console.log("get store: ",store.getState())
store.dispatch({type:"INCREASE"})
console.log("get store: ",store.getState())

export default class App extends Component{
  render(){
    return(
      <SafeAreaView style={{flex:1, justifyContent:'center',alignItems:'center',
      }}>
        <Box/>
      </SafeAreaView>
    )
  }
}

