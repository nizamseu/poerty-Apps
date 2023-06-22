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
        <Icon name="newspaper-o" size={30} color="#FF9EAA" />
        <Text style={[styles.spacing]}>ছড়া</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate("Test")}
        style={[styles.card, styles.shadow]}
      >
        <Icon name="envira" size={30} color="#40128B" />
        <Text style={[styles.spacing]}>কবিতা </Text>
      </TouchableOpacity>
      <View style={[styles.card, styles.shadow]}>
        <Icon name="pied-piper" size={30} color="#9336B4" />
        <Text style={[styles.spacing]}>ছোট গল্প </Text>
      </View>
      <View style={[styles.card, styles.shadow]}>
        <Icon name="modx" size={30} color="#DD58D6" />
        <Text style={[styles.spacing]}>গদ্য </Text>
      </View>
      <View style={[styles.card, styles.shadow]}>
        <Icon name="play" size={30} color="#3AA6B9" />
        <Text style={[styles.spacing]}>গীতি কবিতা </Text>
      </View>
      <View style={[styles.card, styles.shadow]}>
        <Icon name="book" size={30} color="#E966A0" />
        <Text style={[styles.spacing]}>প্রবন্ধ</Text>
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
  spacing: {
    marginVertical: "15px",
  },
});
