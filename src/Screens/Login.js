import  React, {useState} from 'react'
import { StyleSheet, Text, View,
    Dimensions,Modal,Keyboard,TouchableWithoutFeedback,
  Image,Button,StatusBar,TextInput,TouchableOpacity,
   Platform,SafeAreaView } from 'react-native'
import propTypes from 'prop-types';
import store from '../redux/Store'
import {action_Login} from '../redux/Actions'
import {connect} from 'react-redux';
import { isEmulator } from 'react-native-device-info';
// import axios from 'axios'
import blue from '../utils/Constants'
// const height=Dimensions.get('window').height;
const width=Dimensions.get('window').width;



class Login extends React.Component {
  
  constructor(props) {
    super(props)
    this.state = {
      userName:'',
       password: '',
       showInfoPopUp:false,
       isEmulator:null
    }

  }

  async componentDidMount(){
    const res=await isEmulator();
    this.setState({isEmulator:res,showInfoPopUp:true})

  }

 
  onPressLogin = () => {
     Keyboard.dismiss()
     if(this.state.userName.trim().length<1)
      {
        alert('Please add a valid username')
        return
      }

     if(this.state.password.trim().length<1)
      {
        alert('Please add a valid password')
        return;
      }

      let data={
               username:this.state.userName,
               password:this.state.password
              }

      this.props.setLoginData(data)      
      this.props.navigation.navigate('Home')
  };

  render() {
    let {userName,password}=this.state
   
    return (
      <SafeAreaView style={{flex:1,backgroundColor:'#1A1924'}} >
        <StatusBar barStyle='light-content'/>

          <View style={styles.view}>
       
          <TextInput
          placeholder={'Username'}
          placeholderTextColor={'lightgrey'}
    style={[styles.input,{marginTop:30}]}
      onChangeText={userName => this.setState({userName})}
      value={userName}
    />
       <TextInput
      style={[styles.input,{marginTop:20}]}
      placeholder={'Password'}
      placeholderTextColor={'lightgrey'}

      secureTextEntry={true}
      onChangeText={password => this.setState({password})}
      value={password}
    />
           <TouchableOpacity
           style={styles.btn}
            onPress={()=>{this.onPressLogin()}}>
             <Text style={styles.text}>Sign up</Text>
             </TouchableOpacity>
          
         </View>
         {this.state.showInfoPopUp && this.customPopup()}
        </SafeAreaView>
    )
   
  }


   customPopup=()=>{
     return (
       <Modal
       visible={this.state.showInfoPopUp}
      visible={true}
      onRequestClose={()=>{this.setState({showInfoPopUp:false})}}
       transparent={true}
       
       hardwareAccelerated={true}
       animationType={ "slide"}
       >
      <TouchableWithoutFeedback onPress={() => {this.setState({showInfoPopUp:false}) }}>

         <View style={{flex:1,backgroundColor:'rgba(1,1,1,0.4)',justifyContent:'flex-end'}}>
         <View style={{width:width,height:300,backgroundColor:'white',padding:10}}>
     <Text style={{color:'black',fontSize:20}}>This app is running in {this.state.isEmulator?'Emulator':'Real Device'}</Text>
           <Text>Thsi is a custom modal popup </Text>
             </View>
           </View>
         </TouchableWithoutFeedback>

         </Modal>
     )
  }
}


const mapStateToProps=(state)=> ({
})

const mapDispatchToProps=(dispatch)=> ({
  setLoginData:(data)=>dispatch(action_Login(data))
})



//=======================================================================
// Styles
//=======================================================================

const styles=StyleSheet.create({
 view: {
   flex:1,
   backgroundColor:'#1A1924',
  //  justifyContent:'center',
  marginTop:width/4,
   alignItems:'center'
  },
  input:{ 
    paddingHorizontal:10,
    borderRadius:10,
    width:width/1.5,
    height: 40, 
    fontSize:16,
    borderColor: blue,
    color:'white',
     borderWidth: 1
     },
 text: { 
   color:'white',
   fontWeight:'bold',
   fontSize:20,
  },
  btn:{
    width:width/1.5,
    borderRadius:10,
    height:40,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:blue,
    marginTop:20
  }

})

export default connect(mapStateToProps,mapDispatchToProps)(Login)