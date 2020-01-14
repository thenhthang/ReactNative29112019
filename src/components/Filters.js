/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import {width, height} from '../dimension';
import {Dropdown} from 'react-native-material-dropdown';
import { connect } from 'react-redux';
class Filter extends Component {
  //
  constructor(props) {
    super(props);
    this.state = {
      optionWord: [
        {value: 'SHOW_ALL'},
        {value: 'SHOW_FORGOT'},
        {value: 'SHOW_MEMORIZED'},
      ],
    };
  }
  render() {
    return (
      <Dropdown
        data={this.state.optionWord}
        containerStyle={{
          borderWidth: 1,
          borderColor:'mediumseagreen',
          alignSelf:'auto',
          height:50,
          marginTop:5
        }}
        inputContainerStyle={{borderBottomColor: 'transparent'}}
        dropdownOffset={{top: width * 0.01, left: 0}}
        value={this.props.optionSelected}
        onChangeText = {(Text)=>{this.props.dispatch({type:'FILTER_MODE',text:Text})}}
      />
    );
  }
}
const mapStateToProps = state =>{
  return {optionSelected:state.optionSelected}
}
export default connect(mapStateToProps)(Filter)