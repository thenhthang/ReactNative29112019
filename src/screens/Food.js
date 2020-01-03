import React, { Component } from 'react'
import { Text, View, FlatList,SafeAreaView } from 'react-native'
import FoodItem from './FoodItem'
//Khâm Trần
export default class Food extends Component {
    constructor(props){
        super(props)
        this.state = {
            data: this.props.data
        }
    }
    render() {
        [grname,rowitem] = this.props.data
        return (
            <View style={{paddingHorizontal:5}}>
                <View>
                    <Text style={{fontWeight:'bold',fontSize:18,marginBottom:5,
                    marginTop:5}}>
                        {grname}</Text>
                </View>
                <FlatList
                data={rowitem}
                horizontal={true}
                renderItem={({ item }) =>
                         <FoodItem data={item} parentFlatlist = {this} />
                    }
                    keyExtractor={item => String(item.id)}
                    ItemSeparatorComponent={()=>
                        <View style={{width:4,backgroundColor:'white'}}></View>
                    }
                />
            </View>
        )
    }
}
