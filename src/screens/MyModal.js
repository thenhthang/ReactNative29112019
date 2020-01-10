import React, { Component } from 'react'
import { Text, View } from 'react-native'
import Modal from 'react-native-modal'


export default class MyModal extends Component {
    constructor(props){
        super(props)
        this.state = {
            visibleModal:true,
        }
    }
    render() {
        return (
            <View>
                <Modal isVisible = {this.state.visibleModal}
                style={{backgroundColor:'red'}} >
                    <Text>MY MODEL</Text>
                </Modal>
                
            </View>
        )
    }
}
