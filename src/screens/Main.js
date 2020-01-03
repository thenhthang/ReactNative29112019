import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import MyFlatlist from './MyFlatlist2'

export default class Main extends Component {
    render() {
        return (
            <View style={{flex:1}}>
                <MyFlatlist/>
            </View>
        )
    }
}
