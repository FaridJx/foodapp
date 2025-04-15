import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { getInfoItem } from '../utilis/items'

export default function RecipeCard(props) {
  return (
    <TouchableOpacity onPress={() => props.navigation.navigate("Recipe", getInfoItem(props))}>
      <View
        className="w-44 h-72 m-2 p-2"
        style={{
          backgroundColor: props.color,
          borderRadius: 20,
          borderTopRightRadius: 60,
          borderBottomLeftRadius: 60,
        }}
      >
        <View className="w-full items-center">
          <View className="w-full">
            <Image className="w-full h-36 mb-6" source={props.image} />
          </View>
          <View className="items-end">
            <Text className="text-purple-900 font-bold text-right">{props.name}</Text>
            <Text className="text-gray-600 text-right">{props.desc}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({})