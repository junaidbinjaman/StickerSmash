import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const About = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About</Text>
      <Link style={styles.button} href={'/'}>Go back to Home Screen</Link>
    </View>
  )
}

export default About

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#25292e',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: '#fff'
    },
    button: {
      color: '#fff',
      fontSize: 20,
      textDecorationLine: 'underline'
    }
})