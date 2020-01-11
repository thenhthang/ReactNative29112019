import React, {Component} from 'react';
import {Text, View, TouchableOpacity, FlatList, Alert} from 'react-native';
import {width, height} from '../dimension';

export default class Word extends Component {
  //
  removeWord = (id)=>{
    Alert.alert(
      'Do you want to remove this word ?',
      'Choose yes or no',
      [
        {
          text: 'Yes',
          onPress: () => {
            this.props.onRemoveWord(id)
          },
        },
        {text: 'No', style: 'cancel'},
      ],
      {cancelable: false},
    );
  }
  renderItemView = item => {
    const {en, id, vn, isMemorized} = item;
    const {optionSelected} = this.props;
    if (optionSelected === 'SHOW_FORGOT' && !item.isMemorized) {
      return null;
    }
    if (optionSelected === 'SHOW_MEMORIZED' && item.isMemorized) {
      return null;
    }
    return (
      <View
        style={{
          marginBottom: width / 20,
          borderRadius: 5,
          backgroundColor: 'lightgrey',
        }}>
        <View
          style={{
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <Text style={{fontSize: width / 13, color: '#27A745'}}>{en}</Text>
          <Text style={{fontSize: width / 13, color: '#DC3545'}}>
            {isMemorized ? '----' : vn}
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
            marginTop: width / 80,
            marginBottom: width / 30,
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: isMemorized ? '#208837' : '#C82233',
              paddingHorizontal: width / 15,
              paddingVertical: width / 40,
            }}
            onPress = {()=>{this.props.onToggleMemorized(id)}}
            >
            <Text style={{color: 'white', fontSize: width / 20}}>
              {isMemorized ? 'Forgot' : 'isMemorized'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              backgroundColor: '#e0a800',
              paddingHorizontal: width / 15,
              paddingVertical: width / 40,
            }}
            onPress = {()=>{this.removeWord(id)}}
            >
            <Text style={{color: 'black', fontSize: width / 20}}>Remove</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  render() {
    return (
      <FlatList
        ref={ref => {
          this.flatList = ref;
        }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{marginTop: width / 50}}
        data={this.props.words}
        extraData={this.props.words}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item, index}) => this.renderItemView(item)}
      />
    );
  }
}