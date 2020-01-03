import React,{Component} from 'react';
import {
  View,Text,StatusBar,Platform,SafeAreaView, Button, TouchableOpacity,StyleSheet, FlatList
} from 'react-native';
import MyFlatlist from './src/components/MyFlatlist';
import Login from './src/screens/login';
import Main from './src/screens/Main';
import List from './src/components/List';


export default class App extends Component{
  render(){
    return(
      <SafeAreaView style={{flex:1}}>
        <List/>
      </SafeAreaView>
    )
  }
}
const styles = StyleSheet.create({
  
})

