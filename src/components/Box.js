/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Child from './Child';

export default class Box extends Component {
  constructor(props){
    super(props)
    this.state = {
      count: 0
    }
    this.increase = this.increase.bind(this)
    this.decrease = this.decrease.bind(this)
    this.reset = this.reset.bind(this)
  }
  increase(){
    this.setState({
      count: this.state.count+1
    })
  }
  decrease(){
    this.setState({
      count: this.state.count-1
    })
  }
  reset(){
    this.setState({
      count:0
    })
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
        <Text style={{fontSize: 30, color: 'red'}}>
          Value = {this.state.count}
        </Text>
        <TouchableOpacity onPress={()=>{
            this.refs.child.next()
          //  console.log(this.refs)
                }} >
            <Text style={{backgroundColor:'mediumseagreen',
            padding:10,color:'white'}}>Call Child</Text>
        </TouchableOpacity >
        <Child ref={'child'} increase = {this.increase} decrease = {this.decrease} reset = {this.reset} />
      </View>
    );
  }
}