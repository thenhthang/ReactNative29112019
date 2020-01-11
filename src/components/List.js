import React, {Component} from 'react';
import {
  Text,
  View,
  FlatList,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import {width, height} from '../dimension';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import WordModel from '../model/WordModal';
import Word from './Word';
import Filter from './Filters';
import Form from './Form';

export default class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      words: [
        {id: 1, en: 'One', vn: 'Mot', isMemorized: true},
        {id: 2, en: 'Two', vn: 'Hai', isMemorized: false},
        {id: 3, en: 'Three', vn: 'Ba', isMemorized: false},
        {id: 4, en: 'Four', vn: 'Bon', isMemorized: true},
        {id: 5, en: 'Five', vn: 'Nam', isMemorized: true},
      ],
      shouldShowForm:false,
      optionSelected: 'SHOW_ALL',
    };
    this.onToggleForm = this.onToggleForm.bind(this)
    this.onAddWord = this.onAddWord.bind(this)
    this.onFilterMode = this.onFilterMode.bind(this)
    this.onToggleMemorized = this.onToggleMemorized.bind(this)
    this.onRemoveWord = this.onRemoveWord.bind(this)
  }
  onToggleForm = () => {
    this.setState({shouldShowForm: !this.state.shouldShowForm});
  };
  onAddWord = newWord => {
    const newListWord = this.state.words.concat(newWord);
    newListWord.sort((a, b) => a.name > b.name);
    console.log(newListWord)
    this.setState({
      words: newListWord,
      shouldShowForm: !this.state.shouldShowForm,
    });
  };
  onFilterMode = filterMode =>{
    this.setState({
      optionSelected:filterMode
    })
  }
  onToggleMemorized = id => {
    const words = this.state.words.map(word => {
      if (word.id === id) {
        return {...word, isMemorized: !word.isMemorized};
      }
      return word;
    });
    this.setState({words:words});
  };
  onRemoveWord = id => {
            const words = this.state.words.filter(word => {
              if (word.id === id) {
                return false;
              }
              return true;
            });
            this.setState({words});
  };
  
  render() {
    return (
      <KeyboardAwareScrollView
        showsVerticalScrollIndicator={false}
        style={{flex: 1}}>
        <View style={{flex: 1, paddingTop: width / 50}}>
          <Form onToggleForm = {this.onToggleForm}
               shouldShowForm = {this.state.shouldShowForm}
               currentId = {this.state.words.length}
               onAddWord = {this.onAddWord} />
          <Filter optionSelected={this.state.optionSelected}
                  onFilterMode = {this.onFilterMode}
           />
          <Word
            words={this.state.words}
            optionSelected={this.state.optionSelected}
            onToggleMemorized = {this.onToggleMemorized}
            onRemoveWord = {this.onRemoveWord}
          />
        </View>
      </KeyboardAwareScrollView>
    );
  }
}