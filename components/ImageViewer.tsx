import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Image } from "expo-image";

type Props = {
    imgSource: string;
}

const ImageViewer = ({imgSource}: Props) => {
  return (
    <View>
      <Image style={styles.image} source={imgSource} />
    </View>
  )
}

export default ImageViewer

const styles = StyleSheet.create({
    image: {
    width: 320,
    height: 440,
    borderRadius: 18
  }
})