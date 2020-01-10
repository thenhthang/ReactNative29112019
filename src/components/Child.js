import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

export default class Child extends Component {
  constructor(props){
    super(props)
    this.state = {
      countt: 0
    }
  }
  next = ()=>{
    this.setState({
      countt: this.state.countt + 1
    })
  }
  render() {
    //that = this.props.that
    const{increase,decrease,reset} = this.props
    return (
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={increase}>
          <View style={{backgroundColor: 'green', padding: 5, borderRadius: 5}}>
            <Text style={{color: 'white', fontSize: 20}}>INCREASE</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>decrease()}>
          <View style={{backgroundColor: 'red', padding: 5, borderRadius: 5}}>
            <Text style={{color: 'white', fontSize: 20}}>DECREASE</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>reset()}>
          <View
            style={{backgroundColor: 'orange', padding: 5, borderRadius: 5}}>
            <Text style={{color: 'white', fontSize: 20}}>RESET</Text>
          </View>
        </TouchableOpacity>
        <View style={{backgroundColor: 'blue', padding: 5, borderRadius: 5}}>
    <Text style={{color: 'white', fontSize: 20}}>{this.state.countt}</Text>
        </View>
      </View>
    );
  }
}