import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

export default class MyState extends Component {
    //DUNG STATE bat buoc phai co phuong thuc khoi tao
    constructor(props){
        super(props)
        this.state = {
            count:0,
        }
    }
    increase(){ 
        this.setState({count:this.state.count+1}) 
    }
    decrease(){ 
        this.setState({count:this.state.count-1}) 
    }
    reset(){ 
        this.setState({count:0}) 
    }
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{color: 'red', fontSize: 40}}>
          Count : {this.state.count}
        </Text>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-evenly',
          }}>
          <TouchableOpacity style={{backgroundColor: 'green', padding: 10}}
            onPress={()=>this.increase()} >
            <Text
              style={{color: 'white', fontStyle: 'italic', fontWeight: 'bold'}}>
              Increase
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor: 'red', padding: 10}}
          onPress={()=>this.decrease()}>
            <Text
              style={{color: 'white', fontStyle: 'italic', fontWeight: 'bold'}}>
              Decrease
            </Text>
          </TouchableOpacity>
          <TouchableOpacity style={{backgroundColor: 'slategray', padding: 10}}>
            <Text
              style={{color: 'white', fontStyle: 'italic', fontWeight: 'bold'}}
              onPress={()=>this.reset()}>
              Reset
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}