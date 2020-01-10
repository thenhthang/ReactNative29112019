import React, { Component } from 'react'
import { Text, View, KeyboardAvoidingView, TextInput, 
    TouchableOpacity, Button } from 'react-native'

import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import Modal from 'react-native-modal'


export default class AddWord extends Component {
    constructor(props){
        super(props)
        this.state = {
            visibleModal : false
        }
    }
    showModal = ()=>{
        this.setState({
            visibleModal:!this.state.visibleModal
        })
    }
    render() {
        return (
       
                <View>
               
                <TouchableOpacity onPress={()=>this.showModal()}>
                    <Text style={{backgroundColor:'green',padding:10,
                color:'white'}}>Click me!</Text>
                </TouchableOpacity>
                <Modal isVisible={this.state.visibleModal} 
                animationIn='slideInDown' animationOut='slideOutDown'
                animationOutTiming={1000} >
                    <View style={{borderRadius:20,
                    borderWidth:1,borderColor:'gray',padding:10,
                    height:200,backgroundColor:'#cecece'}}>
                        <TextInput placeholder='Your name' style={{fontSize:20,
                        backgroundColor:'mediumseagreen',
                        padding:10,
                        color:'white',borderRadius:5
                        }} />
                        <View style={{height:1,backgroundColor:'white'}}></View>
                        <TextInput placeholder='Password' style={{fontSize:20,
                        backgroundColor:'mediumseagreen',
                        padding:10,
                        color:'white',borderRadius:5
                        }} />
                        <Button 
                            testID={'close-button'}
                            onPress={() => this.showModal()}
                            title="Close"
                            
                            />
                       
                    </View>
                </Modal>
                </View>
        )
    }
}
