import * as React from 'react'
import { StyleSheet, Text, View,Image,Button,StatusBar } from 'react-native'

export default function SignUp(props) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>
        SignUp !!!

        </Text>
        <Button title={'profile'}    onPress={()=>{navigation.navigate('Profile')}} />
      </View>
    );
  }
