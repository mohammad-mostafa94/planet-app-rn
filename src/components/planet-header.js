import { View,StyleSheet} from 'react-native'
import React from 'react'
import {spacing} from '../theme/spacing'
import Text from './text/text'
import { colors } from '../theme/colors'

export default function PlanetHeader() {
  return (
    <View style = {styles.container}>
      <Text preset="h2">THE PLANET</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        padding:spacing[5],
        borderBottomWidth:0.3,
        borderBottomColor:colors.white,
    }
})