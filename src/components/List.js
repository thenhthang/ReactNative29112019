import React, {Component} from 'react';
import {
  View,
} from 'react-native';
import {width, height} from '../dimension';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import { connect } from 'react-redux';
import FilterController from '../controller/FilterController';
import FormController from '../controller/FormController';
import WordController from '../controller/WordController';

class List extends Component {
  componentDidMount(){
    fetch('https://server2301.herokuapp.com/word',{
      method:'GET',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json'
      }
    }).then(respone => console.log(respone.json()))
  }
  render() {
    return (
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        style={{flex: 1}}>
        <View style={{flex: 1, paddingTop: width / 50}}>
          <FormController/>
          <FilterController/>
          <WordController/>
        </View>
      </KeyboardAwareScrollView>
    );
  }
}
export default connect()(List)