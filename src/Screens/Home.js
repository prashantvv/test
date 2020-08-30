import  React from 'react'
import { StyleSheet,Dimensions, 
  SafeAreaView,Text,TouchableOpacity, View,Image,Button,StatusBar,Platform } from 'react-native'
import {connect} from 'react-redux';
import SwipeButton from '../CustomSwipeBtn'
import img from '../resources/logo.png';
const width=Dimensions.get('window').width;

class Home extends React.Component {
  constructor(props) {
    super(props)
     console.log('props-=',props);
     this.state={
       title:'Swipe me to continue',
       titleColor:'black'
     }
     

  }


  componentDidMount(){

  }

 
  onPress=()=>{
    this.props.navigation.navigate('Profile')
  }
  
  render() {
    const {username}=this.props.loginUser
      
   
    return (
      <SafeAreaView style={{flex:1,backgroundColor:'#1A1924'}}>
        <StatusBar barStyle='light-content'/>
        <View style={[styles.view,{justifyContent:'flex-end',marginBottom:50}]}>
    <Text style={{color:'white',fontSize:25}}>Welcome home {username} </Text>


<View style={{marginTop:100}}>
      <TouchableOpacity 
       onPress={this.onPress}
      style={[styles.btn,{backgroundColor:'white'}]}>
          <Text style={{color:'#6EB1F7',fontWeight:'bold',fontSize:15}}>Press Me</Text>
       </TouchableOpacity>

       <TouchableOpacity 
       onPress={this.onPress}
       style={[styles.btn,{backgroundColor:'lightgrey'}]}>
          <Text style={{color:'#6EB1F7',fontSize:15}}>Press Me</Text>
       </TouchableOpacity>

       <TouchableOpacity 
       onPress={this.onPress}
       style={[styles.btn,{backgroundColor:'#6EB1F7'}]}>
          <Text style={{color:'white',fontWeight:'bold',fontSize:15}}>Press Me</Text>
       </TouchableOpacity>

       <SwipeButton
       height={40}
       borderRadius={8}
      //  railBorderColor={'#6EB1F7'}
       railFillBackgroundColor={'rgba(256, 256, 256,0.5)'}
       railBackgroundColor={'grey'}
       title={this.state.title}
       titleColor={this.state.titleColor}
       titleFontSize={16}
         containerStyles={{marginTop:30,width:width/1.5,height:40,borderRadius:8}}
         railStyles={{height:40,borderRadius:8}}
            // thumbIconImageSource={img}
            thumbIconBackgroundColor={'#6EB1F7'}
            thumbIconStyles={{borderRadius:8,backgroundColor:'white'}}
            onSwipeStart={() => {}}
            onSwipeFail={() => {}}
            onSwipeSuccess={() =>
              {   
                this.setState({title:'Success',titleColor:'black'})
                setTimeout(()=>{  this.onPress() },200)
              }
            }
          />
</View>
      </View >
        </SafeAreaView>
    );
  }
}


const mapStateToProps=(state)=> ({
  loginUser: state.red_LoginData,
 
})

const mapDispatchToProps=(dispatch)=> ({
  setLoginData:(data)=>dispatch(action_Login(data))
})


const styles=StyleSheet.create({
 view: {flex:1,
  height:'100%',
  width:'100%',
  alignItems:'center'
},
 text: { color:'white',fontSize:25},
  btn:{
    borderRadius:8,
    width:width/1.5,
    height:40,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#6EB1F7',
    marginTop:20
  }

})

export default connect(mapStateToProps,mapDispatchToProps)(Home)
