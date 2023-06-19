import React from "react";
import { View, Text, ImageBackground, StyleSheet } from "react-native";

const PoetryBanner = () => {
  return (
    <>
      <ImageBackground
        source={{
          uri: "https://i1.wp.com/www.somaynews24.com/wp-content/uploads/2020/08/Kobita-Home-Page-Banner-copy.jpg",
        }}
        style={styles.banner}
        resizeMode="cover"
      >
        {/* <View style={styles.overlay}>
        <Text style={styles.title}>Full Width Banner</Text>
        <Text style={styles.subtitle}>This is a beautiful banner</Text>
      </View> */}
      </ImageBackground>
      <ImageBackground
        source={{
          uri: "  https://1.bp.blogspot.com/-GoXUqFm5jqE/YOvNbOzeIMI/AAAAAAAAFFM/2xO3h0QKop8TqrAZWOM3qjYgfPukFcMogCLcBGAsYHQ/s16000/eid-ul-adha-bangla.jpg",
        }}
        style={styles.banner}
        resizeMode="cover"
      >
        {/* <View style={styles.overlay}>
        <Text style={styles.title}>Full Width Banner</Text>
        <Text style={styles.subtitle}>This is a beautiful banner</Text>
      </View> */}
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  banner: {
    width: "100%",
    height: 130,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 10,
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 28,
    color: "#fff",
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  subtitle: {
    fontSize: 16,
    color: "#fff",
    textAlign: "center",
  },
});

export default PoetryBanner;
