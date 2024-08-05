import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "../reducers/favorites";

export default function RecipeScreen(props) {
  const [counter, setCounter] = useState(1);
  const favorite = useSelector((state) => state.favorites.value);

  const item = props.route.params;
  const isFav = favorite.some((fav) => fav.name === item.name);
  const dispatch = useDispatch();

  const infoItem = {
    id: item.id,
    name: item.name,
    color: item.color,
    desc: item.desc,
    ingredients: item.ingredients,
    unit: item.unit,
    amount: item.amount,
    image: item.image,
    level: item.level,
    rating: item.rating,
    time: item.time,
    longDesc: item.longDesc,
  };

  const handleCounter = () => {
    counter > 1 && setCounter(counter - 1);
  };

  const handleFav = () => {
    if (!isFav) {
      dispatch(addFavorite(infoItem));
    } else {
      dispatch(removeFavorite(infoItem));
    }
  };

  const ingredients = item.ingredients.map((ingredient, i) => (
    <View key={i} className="flex-row justify-between my-8">
      <View>
        <Text className="font-bold text-gray-500">{ingredient.name}</Text>
      </View>
      <View className="flex-row">
        <Text className="font-bold text-gray-500">
          {ingredient.amount * counter}{" "}
        </Text>
        <Text className="font-bold text-gray-500">{ingredient.unit}</Text>
      </View>
    </View>
  ));

  let favIcon = isFav ? "bookmark" : "bookmark-o";

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View
        className="pb-2"
        style={{ backgroundColor: item.color, borderBottomLeftRadius: 100 }}
      >
        <View className="pt-8 pl-4">
          <TouchableOpacity onPress={() => props.navigation.goBack()}>
            <FontAwesome name="arrow-left" color="grey" size={30} />
          </TouchableOpacity>
        </View>
        <View className="w-full items-center justify-center -mt-10">
          <Image className="w-72 h-72" source={item.image} />
        </View>
      </View>
      <View className="h-full" style={{ backgroundColor: item.color }}>
        <View
          className="h-full bg-white px-6 "
          style={{ borderTopRightRadius: 140 }}
        >
          <TouchableOpacity
            onPress={() => handleFav()}
            className="bg-purple-900 rounded-full w-20 h-20 justify-center items-center -top-9 left-72"
          >
            <FontAwesome name={favIcon} color={"white"} size={20} />
          </TouchableOpacity>
          <View className="w-full flex-row justify-around -mt-6">
            <View className="items-center">
              <TouchableOpacity>
                <FontAwesome name="dashboard" size={20} />
              </TouchableOpacity>
              <Text className="font-bold">{item.level}</Text>
            </View>
            <View className="items-center">
              <TouchableOpacity>
                <FontAwesome name="hourglass-half" size={20} />
              </TouchableOpacity>
              <Text className="font-bold">{item.time}</Text>
            </View>
            <View className="items-center">
              <TouchableOpacity>
                <FontAwesome name="star-o" size={20} />
              </TouchableOpacity>
              <Text className="font-bold">{item.rating}</Text>
            </View>
          </View>
          <View className="mt-6">
            <Text className="text-4xl font-semibold">{item.name}</Text>
            <Text>{item.longDesc}</Text>
          </View>
          <View className="mt-6 flex-row justify-between items-center">
            <View>
              <Text className="font-bold text-base">Ingredients</Text>
              <Text className="font-bold text-gray-400">
                How many servings ?
              </Text>
            </View>
            <View className="flex-row bg-slate-200 p-4 rounded-full w-32 justify-around">
              <TouchableOpacity onPress={() => handleCounter()}>
                <Text className="text-base font-bold text-purple-900">-</Text>
              </TouchableOpacity>
              <Text className="text-base font-bold text-purple-900">
                {counter}
              </Text>
              <TouchableOpacity onPress={() => setCounter(counter + 1)}>
                <Text className="text-base font-bold text-purple-900">+</Text>
              </TouchableOpacity>
            </View>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            <View className="h-full pb-72">{ingredients}</View>
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
