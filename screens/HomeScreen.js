import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";

export default function HomeScreen({navigation}) {
  return (
    <View className="flex-1 w-full bg-purple-900">
      <Image
        className="w-full h-4/5"
        style={styles.borderImage}
        source={require("../assets/images/home.jpg")}
      />
      <View className="h-full items-end p-6">
        <Text className="text-white text-6xl font-bold mb-2">Food App</Text>
        <TouchableOpacity onPress={() => navigation.navigate('DrawerNavigator')}>
          <Text className="text-white text-lg font-bold">Let's go -> </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  borderImage: {
    borderBottomLeftRadius: 200
  }
})
