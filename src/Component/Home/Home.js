import { Text } from "react-native";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import PoetryBanner from "../Share/PoetryBanner";
export default function HomeScreen({ navigation }) {
  console.log("navigation", navigation);
  const handleCardPress = () => {
    navigation.navigate("Details");
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.card, styles.shadow]}
        onPress={handleCardPress}
      >
        <Icon name="rocket" size={30} color="#900" />
        <Text>ছড়া</Text>
      </TouchableOpacity>
      <View style={[styles.card, styles.shadow]}>
        <Icon name="user" size={30} color="#900" />
        <Text>কবিতা </Text>
      </View>
      <View style={[styles.card, styles.shadow]}>
        <Icon name="heart" size={30} color="#900" />
        <Text>ছোট গল্প </Text>
      </View>
      <View style={[styles.card, styles.shadow]}>
        <Icon name="star" size={30} color="#900" />
        <Text>গদ্য </Text>
      </View>
      <View style={[styles.card, styles.shadow]}>
        <Icon name="user" size={30} color="#900" />
        <Text>গীতি কবিতা </Text>
      </View>
      <View style={[styles.card, styles.shadow]}>
        <Icon name="calendar" size={30} color="#900" />
        <Text>প্রবন্ধ</Text>
      </View>
      <PoetryBanner />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },
  card: {
    width: "30%",
    height: "20%",
    aspectRatio: 1,
    backgroundColor: "#fff",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  shadow: {
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },
});
