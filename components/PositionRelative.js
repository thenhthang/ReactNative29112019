import React,{Component} from 'react';
import {
  View,Text,StatusBar,Platform,SafeAreaView, Button, TouchableOpacity,StyleSheet
} from 'react-native';
export class Relative extends Component {
    render() {
      return (
        <View style={styles.container}>
          <View style={styles.box1}>
            <Text style={styles.text}>1</Text>
            <View style={styles.ball}/>
          </View>
          {/* <View style={styles.box2}>
            <Text style={styles.text}>2</Text>
          </View> */}
        </View>
      );
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    box1: {
      position: 'relative',
      top: 40,
      left: 40,
      width: 250,
      height: 250,
      backgroundColor: 'red'
    },
    ball: {
       position: 'absolute',
       //relative: Vị trí của nó sẽ phụ thuộc vào thành phần xung quanh nó
       //absolute: vị trí của nó sẽ phụ thuộc vào thành phần chứa nó
       top: 40,
       left: 40,
       width: 40,
       height: 40,
       borderRadius: 20,
       backgroundColor: 'yellow'
    },
    text: {
      color: '#ffffff',
      fontSize: 80,
      backgroundColor:'blue'
    }
  });