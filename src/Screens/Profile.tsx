import * as React from 'react'
import globalstyle from '../GlobalStyle'
import { useSelector } from 'react-redux';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'

const Profile = () => {

  const { red_LoginData: loginUserData } = useSelector(state => state)

  React.useEffect(() => {
  }, [])

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#1A1924' }}>
      <View style={globalstyle.glo_view_style}>
        <Text style={styles.text}>Description: Profile is Functional Component here. Getting data from redux hooks</Text>

        <View style={{ width: '100%', padding: 10 }}>
          <Text style={styles.text}>Name: {loginUserData.username}</Text>
          <Text style={styles.text}>Password: {loginUserData.password}</Text>
        </View>

      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  text: { color: 'white', fontSize: 18, margin: 5 }
})

export default Profile