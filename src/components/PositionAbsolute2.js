import React,{Component} from 'react';
import {
  View,Text,StatusBar,Platform,SafeAreaView, Button, TouchableOpacity,StyleSheet
} from 'react-native';
export class UICoBan3 extends Component{
    render(){
      return(
        <SafeAreaView style={styles.container}>
          <View style={[styles.topleft,styles.box]}>
            <Text style={styles.textstyle}>6</Text>
          </View>
          <View style={[styles.toprigth,styles.box]}>
            <Text style={styles.textstyle}>7</Text>
          </View>
          <View style={[styles.bottomleft,styles.box]}>
            <Text style={styles.textstyle}>8</Text>
          </View>
          <View style = {[styles.bottomright,styles.box]}>
            <Text style={styles.textstyle}>9</Text>
          </View>
          <View style={styles.childrenbox}>
            <View style={[styles.topleft,styles.box]}>
              <Text style={styles.textstyle}>1</Text>
            </View>
            <View style={[styles.toprigth,styles.box]}>
              <Text style={styles.textstyle}>2</Text>
            </View>
            <View style={[styles.bottomleft,styles.box]}>
              <Text style={styles.textstyle}>3</Text>
            </View>
            <View style={[styles.bottomright,styles.box]}>
              <Text style={styles.textstyle}>4</Text>
            </View>
            <View style={[styles.box,{backgroundColor:'purple'}]}>
              <Text style={styles.textstyle}>5</Text>
            </View>
          </View>
        </SafeAreaView>
      )
    }
  }
  const styles = StyleSheet.create({
    container:{
      marginTop:30,
      marginBottom:20,
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      borderColor:'red',
      borderWidth:1,
    },
    box:{
      width: 100,
      height:100,
      borderColor:'gray',
      borderWidth:1,
      borderStyle:'dotted',
      alignItems:'center',
      justifyContent:'center'
    },
    childrenbox:{
      width: 300,
      height:300,
      borderColor:'green',
      borderWidth:1,
      borderStyle:'dotted',
      justifyContent:'center',
      alignItems:'center',
      ///Làm sao để không sử dụng 2 thuộc tính justifyContent và alignItems
      //mà vẫn canh giữa được view box số 5
      //top:0,
      //bottom:0,
      //position:'absolute',
      //top:0,
      //right:0,
      //left:0,
      //bottom:0
    },
    topleft:{
      position:'absolute',
      left:0,
      top:0,
      backgroundColor:'green'
    },
    toprigth:{
      position:'absolute',
      top:0,
      right:0,
      backgroundColor:'blue'
    },
    bottomleft:{
      position:'absolute',
      left:0,
      bottom:0,
      backgroundColor:'gray'
    },
    bottomright:{
      position:'absolute',
      right:0,
      bottom:0,
      backgroundColor:'red'
    },
    textstyle:{
      color:'white',
      fontWeight:'bold',
      fontSize:18
    }
  }
  )
  