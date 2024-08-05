import { StyleSheet, Text, View, SafeAreaView, ScrollView } from "react-native";
import { useSelector } from "react-redux";
import RecipeCard from "../components/RecipeCard";

export default function MyRecipesScreen({ navigation }) {
  const favorite = useSelector((state) => state.favorites.value);

  const bestRecipes = favorite.map((recipe, i) => {
    return <RecipeCard key={i} {...recipe} navigation={navigation} />;
  });

  return (
    <SafeAreaView className="bg-white flex-1 px-2">
      <View className="mb-8 pt-1 pl-4">
        <Text className="text-3xl font-semibold text-purple-900">
          The best ones...
        </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="flex-row flex-wrap justify-center">{bestRecipes}</View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#A7C8F1",
  },
});
