import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'

export default class FoodItem extends Component {
    
       
    render() {
       monan = this.props.data
     
        return (
            <View style={{ width:150,backgroundColor:'mediumseagreen'}}>
                <Image source={monan.image}
                    style={{width:150,height:150}}/>
        <Text numberOfLines={1} style={{fontSize:20,padding:5,
        color:'white'}} >{monan.name}</Text>
                <Text numberOfLines={1} style={{
                    fontSize:14,padding:5,color:'tomato'
                     }}>{monan.address}</Text>
                <View style={{flexDirection:'row'}}>
                <Icon name='door-open' size={25} color="white" />
                    <Text numberOfLines={1}
                    style={{padding:5,fontSize:14}} >{monan.openinghour}</Text>
                </View>
            </View>
        )
    }
}
