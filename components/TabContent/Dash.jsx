import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { colors } from '../../config'

const Dash = () => {
  return (
    <View style={styles.container}>
      <Text>Dash</Text>
    </View>
  )
}

export default Dash

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: colors.body,
    },
})