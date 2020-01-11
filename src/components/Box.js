/* eslint-disable react-native/no-inline-styles */
import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Child from './Child';
import { connect } from 'react-redux';

 class Box extends Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 30, color: 'red'}}>
          Value = {this.props.state}
        </Text>
        <TouchableOpacity onPress={()=>{
            this.refs.child.next()
          //  console.log(this.refs)
                }} >
            <Text style={{backgroundColor:'mediumseagreen',
            padding:10,color:'white'}}>Call Child</Text>
        </TouchableOpacity >
        <Child ref={'child'} />
      </View>
    );
  }
}
//Map du lieu ra props de hien thi len view
//Cach 1
// const mapStateToProps = state =>{
//   return {count:state}
// }
// export default connect(mapStateToProps)(Box)
//Cach 2
//export default connect(state =>({state}))(Box)
//Cach 3
export default connect(state =>{return {state:state}})(Box)