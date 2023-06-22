import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  FlatList,
} from "react-native";
import PoetryBanner from "../Share/PoetryBanner";
import { ListItem } from "react-native-elements";
import Card from "../DetailsScreen/Card";
export default function Details() {
  const data = [
    {
      id: 1,
      photo:
        "https://i1.wp.com/www.somaynews24.com/wp-content/uploads/2020/08/Kobita-Home-Page-Banner-copy.jpg",
      title: "Nizam Uddin",
      time: "12AM",
    },
    {
      id: 2,
      photo:
        "https://i1.wp.com/www.somaynews24.com/wp-content/uploads/2020/08/Kobita-Home-Page-Banner-copy.jpg",
      title: "Babu",
      time: "12AM",
    },
  ];
  return (
    <View style={styles.background}>
      <View style={styles.cards}>
        <FlatList
          style={{ height: "100%", width: "100%" }}
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Card image={item.photo} title={item.name} time={item.time} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    backgroundColor: "#F2F2F2",
    height: "100%",
    flex: 1,
  },
  cards: {
    marginHorizontal: 20,
    marginVertical: 30,
  },
});
