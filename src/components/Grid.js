
import React,{Component} from 'react';
import {
  View,Text,StatusBar,Platform,SafeAreaView, Button, TouchableOpacity,StyleSheet
} from 'react-native';
import Word from '../components/Word';
const words2 = [{id:1,en:'One',vi:'Một',isMemorized:true},
              {id:2,en:'Two',vi:'Hai',isMemorized:false},
              {id:3,en:'Three',vi:'Ba',isMemorized:false},
              {id:4,en:'Four',vi:'Bốn',isMemorized:true},
              {id:5,en:'Five',vi:'Năm',isMemorized:true}]
export class WordList extends Component{
  renderTitle(){
    if(Platform.OS === 'ios'){
      return "IOS";
    }else{
      return "ANDROID";
    }
  }
  render(){
    //Task 1: Ve ra 2 Button
    //Task 2: isMemorized = true: render ra button Forgot và mà xanh lá
    //Task 3: isMemorized = true: render hien thi vn = ... và nguoc lai
    return(
      <SafeAreaView style={{flex:1,marginHorizontal:20}}>
        {/* <Word en="Hello" vi = "Xin chào"/>
        <Word en="Good morning" vi = "Chào buổi sáng"/>
        <Word en="Teacher" vi = "Giáo viên"/> */}
        {
          words2.map((item)=>{
            return (
                <Word en = {item.en} vi = {item.vi} isMemorized={item.isMemorized} key={item.id}  >/></Word>
              )
          })
        }
      </SafeAreaView>
    )
  }
}

