import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { useNavigation } from '@react-navigation/native'


const records = () => {
  const navigation = useNavigation();
    return (
      <View>
        <Text>records</Text>
      </View>
    )
  
}

export default records;