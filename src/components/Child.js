import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import { connect } from 'react-redux';
 class Child extends Component {
  render() {
    //that = this.props.that
    //const{increase,decrease,reset} = this.props
    const {dispatch} = this.props;
    return (
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity onPress={()=>dispatch({type:'INCREASE'})}>
          <View style={{backgroundColor: 'green', padding: 5, borderRadius: 5}}>
            <Text style={{color: 'white', fontSize: 20}}>INCREASE</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>dispatch({type:'DECREASE'})}>
          <View style={{backgroundColor: 'red', padding: 5, borderRadius: 5}}>
            <Text style={{color: 'white', fontSize: 20}}>DECREASE</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>dispatch({type:'RESET'})}>
          <View
            style={{backgroundColor: 'orange', padding: 5, borderRadius: 5}}>
            <Text style={{color: 'white', fontSize: 20}}>RESET</Text>
          </View>
        </TouchableOpacity>
        <View style={{backgroundColor: 'blue', padding: 5, borderRadius: 5}}>
    <Text style={{color: 'white', fontSize: 20}}>0</Text>
        </View>
      </View>
    );
  }
}

export default connect()(Child)