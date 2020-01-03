import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import Food from './Food'

const mainData = [
    {id:1,grname:'Group 1'},
    {id:2,grname:'Group 2'},
    {id:3,grname:'Group 3'},
    {id:4,grname:'Group 4'},
    {id:5,grname:'Group 5'},
    {id:6,grname:'Group 6'}
]
const foodData = [
    [
        grname = 'Món mặn',
        gritem = [
            {id:1, name:'Gà nướng muối ớt',address:'84 Thái Hà, Đống Đa, Hà Nội',openinghour:'Cả ngày',image:require('../assets/hinh1.jpeg')},
            {id:2, name:'Xường cọng',address:'35 Lê Thánh Tôn, Quận 1, TPHCM',openinghour:'Cả ngày',image:require('../assets/hinh2.jpeg')},
            {id:3, name:'Gà nướng lu',address:'01 Nam Kỳ Khởi Nghĩa, TPHCM',openinghour:'Sáng',image:require('../assets/hinh3.jpeg')},
            {id:4, name:'Vịt quay bắc kinh',address:'66 Nguyễn Thị Minh Khai, Quận 5,TPHCM',openinghour:'Cả ngày',image:require('../assets/hinh4.jpeg')},
            {id:5, name:'Vịt tiềm thuốc bắc',address:'22 Nguyễn Văn Cừ, Quận 12, TPHCM',openinghour:'Cả ngày',image:require('../assets/hinh5.jpeg')},
            {id:6, name:'Chim xa cá lặn',address:'215 Hồng Bàng, Quận 5, TPHCM',openinghour:'8h-12h',image:require('../assets/hinh5.jpeg')},
        ]
    ],
    [
        grname = 'Món chay',
        gritem = [
            {id:1, name:'món 2',address:'84 Thái Hà, Đống Đa, Hà Nội',openinghour:'Cả ngày',image:require('../assets/hinh1.jpeg')},
            {id:2, name:'món 3',address:'84 Thái Hà, Đống Đa, Hà Nội',openinghour:'Cả ngày',image:require('../assets/hinh1.jpeg')},
            {id:3, name:'món 4',address:'84 Thái Hà, Đống Đa, Hà Nội',openinghour:'Cả ngày',image:require('../assets/hinh1.jpeg')},
            {id:4, name:'món 5',address:'84 Thái Hà, Đống Đa, Hà Nội',openinghour:'Cả ngày',image:require('../assets/hinh1.jpeg')},
            {id:5, name:'món 6',address:'84 Thái Hà, Đống Đa, Hà Nội',openinghour:'Cả ngày',image:require('../assets/hinh1.jpeg')},
            {id:6, name:'món 7',address:'84 Thái Hà, Đống Đa, Hà Nội',openinghour:'Cả ngày',image:require('../assets/hinh1.jpeg')},
        ]
    ],
    [
        grname = 'Món nước',
        gritem = [
            {id:1, name:'món 2',address:'84 Thái Hà, Đống Đa, Hà Nội',openinghour:'Cả ngày',image:require('../assets/hinh1.jpeg')},
            {id:2, name:'món 3',address:'84 Thái Hà, Đống Đa, Hà Nội',openinghour:'Cả ngày',image:require('../assets/hinh1.jpeg')},
            {id:3, name:'món 4',address:'84 Thái Hà, Đống Đa, Hà Nội',openinghour:'Cả ngày',image:require('../assets/hinh1.jpeg')},
            {id:4, name:'món 5',address:'84 Thái Hà, Đống Đa, Hà Nội',openinghour:'Cả ngày',image:require('../assets/hinh1.jpeg')},
            {id:5, name:'món 6',address:'84 Thái Hà, Đống Đa, Hà Nội',openinghour:'Cả ngày',image:require('../assets/hinh1.jpeg')},
            {id:6, name:'món 7',address:'84 Thái Hà, Đống Đa, Hà Nội',openinghour:'Cả ngày',image:require('../assets/hinh1.jpeg')},
        ]
    ]
]
export default class Main extends Component {
    render() {
        return (
            <View style={{flex:1}} >
                <FlatList 
                    data = {foodData}
                    horizontal = {false}
                    renderItem = {
                        ({ item }) => <Food data= {item}  />
                    }
                   keyExtractor={item=>item[grname]}
                   
                />
                
            </View>
        )
    }
}
