import { View, Text } from "react-native";
import PoetryBanner from "../Share/PoetryBanner";
import { ListItem } from "react-native-elements";
export default function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
      <ListItem
        leftAvatar={{
          title: "Nizam Uddin",
          source: { uri: avatar_url },
          showAccessory: true,
        }}
        title="Babu"
        subtitle={role}
        chevron
      />
      ;
    </View>
  );
}
