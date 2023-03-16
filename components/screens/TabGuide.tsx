import { Pressable,Button, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React from 'react'

function TabGuide ({navigation})  {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Hello</Text>
            <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  )
}

export default TabGuide

const styles = StyleSheet.create({})