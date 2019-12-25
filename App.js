/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
//sip macos color picker
//StatusBar: Thanh tren cung hien thi pin
//Platform: Check he dieu hanh dang chay
//SafeAreaView: Tu canh thanh StatusBar cua ios va android, khong bi mat chu
//flex: Trong su dung flex, thi ben ngoai phai co the flex. Uu tien chia
//chi le chuan truoc, chia theo ti le flax sau. Lay theo chi le chuan, phan
//con lai chia cho ty le flex
//justifyContent: Canh huong noi dung cua thang con
//alignItems: Canh huong noi dung cua thang con
//CSS 3
//react-native css cheat sheet
import React,{Component} from 'react';
import {
  View,Text,StatusBar,Platform,SafeAreaView, Button, TouchableOpacity,StyleSheet
} from 'react-native';
import Word from './components/Word';
const words = [{id:1,en:'One',vi:'Một',isMemorized:true},
              {id:2,en:'Two',vi:'Hai',isMemorized:false},
              {id:3,en:'Three',vi:'Ba',isMemorized:false},
              {id:4,en:'Four',vi:'Bốn',isMemorized:true},
              {id:5,en:'Five',vi:'Năm',isMemorized:true}]
export default class App extends Component{
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
          words.map((item)=>{
            return (
                <Word en = {item.en} vi = {item.vi} isMemorized={item.isMemorized} key={item.id}  >/></Word>
              )
          })
        }
      </SafeAreaView>
    )
  }
}
const styles = StyleSheet.create({
  
})

