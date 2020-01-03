import React, { Component } from 'react'
import { Text, View, Image, Alert } from 'react-native'
import Swipeout from 'react-native-swipeout';
export default class MonAn extends Component {
    constructor(props){
        super(props)
        this.state = {
            
        }
    }
    render() {
        const monan = this.props.monan
        const swipeSettings = {
            autoClose: true,
            right:[
                {
                    onPress:()=>{
                        Alert.alert('Delete row','Are you sure?',[
                            {text:'Yes', onPress:()=>{
                                this.props.parentFlatlist.removeItem(monan.id)
                            } },
                            {text:'No',onPress:()=>{
                                
                            },style:'cancel' }
                        ],{cancelable: true})
                        
                        //console.log(this.props.monan)
                    },
                    text:'delete',
                    type:'delete',
                    component: (
                        <View
                        style={{
                            backgroundColor:'mediumseagreen',
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                        <Text style={{color:'white',fontWeight:'bold'}} >delete</Text>
                        </View>
                    )
                },
                {
                    onPress:()=>{
                        console.log(this.props.monan)
                    },
                    text:'save',
                    type:'save',
                    component: (
                        <View style = {{
                            backgroundColor:'lightseagreen',
                            flex: 1,
                            alignItems: 'center',
                            justifyContent: 'center'
                        }} >
                            <Text style = {{color:'white',fontWeight:'bold'}} >save</Text>
                        </View>
                    )
                }
            ]
        }
        return (
            <Swipeout {...swipeSettings} >
            <View style={{ flexDirection: 'row', height: 100}}>
                <View style={{ flex: 0.3, }}>
                    <Image style={{ width: 100 ,height:100}}
                        source={monan.image} />
                </View>
                <View style={{
                    flex: 0.7, justifyContent: 'space-evenly',
                     flexDirection: 'column'
                }}>
                    <Text style={{ color: 'green', fontWeight: 'bold',fontSize:20 }}>
                        {monan.name}
                    </Text>
                    <Text style={{ color: 'black', fontWeight: 'normal' }}>
                        {monan.description}
                    </Text>
                    <Text style={{ color: 'blue', fontWeight: 'bold' }}>
                        {monan.price} vnđ
                    </Text>
                </View>
            </View>
            </Swipeout>
        )
    }
}
