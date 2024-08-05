import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { recipes } from "../data/recipes";
import RecipeScreen from "./RecipeScreen";
import RecipeCard from "../components/RecipeCard";
import { useSelector } from "react-redux";
import favorite from "../reducers/favorites";

export default function SearchScreen({ navigation }) {
  const favorite = useSelector((state) => state.favorites.value);

  const allRecipes = recipes.map((recipe, i) => {
    const isFav = favorite.some((fav) => fav.name === recipe.name);
    return (
      <RecipeCard key={i} {...recipe} navigation={navigation} isFav={isFav} />
    );
  });

  // console.log(recipes);

  return (
    <SafeAreaView className="flex-1 bg-white pt-4">
      <View className="pl-6">
        <Text className="text-purple-900 text-3xl font-semibold">
          What do you want to eat today?
        </Text>
        <Text className="text-slate-300">Our daily healthy meal plans</Text>
      </View>
      <ScrollView>
        <View className="flex-row flex-wrap mt-8 w-full justify-center">
          {allRecipes}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cards: {
    borderRadius: 10,
  },
});
