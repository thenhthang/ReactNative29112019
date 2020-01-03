import React,{Component} from 'react'
import {View,Text, SafeAreaView} from 'react-native'
export class User extends Component {
    render(){
      const user = this.props.data;
      this.props.onReady('I am ready!')
      //Props chỉ được quyền dùng, không được quyền thay đổi nó
      return(
        <View>
          <Text>score: {this.props.score}</Text>
          <Text>type: {this.props.type}</Text>  
          <Text>Name: {user.name}</Text> 
          <Text>Age: {user.age}</Text> 
        </View>
      );
    }
  }
  User.defaultProps = {
      score: 10,
      type:'Dev'
  }
  var user = {name: 'foo', age: 21};
  export class Main extends Component {
    handleReady(str){
      console.log(str);
    }
    render(){
      return(
        <SafeAreaView>
        <View style={{justifyContent:'center',alignItems:'center',
                height:'100%'}}>
          <User type="Developer" score='20' data={user} onReady={this.handleReady}/>
          <User type="Accountant" score='20' data={user} onReady={this.handleReady}/>
        </View>
        </SafeAreaView>
        
      );
    }
  }