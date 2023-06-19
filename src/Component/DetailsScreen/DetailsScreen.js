import { View, Text } from "react-native";
import PoetryBanner from "../Share/PoetryBanner";
export default function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <PoetryBanner />
    </View>
  );
}
