import React,{Component} from 'react';
import {
  View,Text,StatusBar,Platform,SafeAreaView, Button, TouchableOpacity,StyleSheet, FlatList
} from 'react-native';
import Box from './src/components/Box';
import List from './src/components/List';

export default class App extends Component{
  render(){
    return(
      <SafeAreaView style={{flex:1, justifyContent:'center',alignItems:'center',
      }}>
          <List/>
      </SafeAreaView>
    )
  }
}

