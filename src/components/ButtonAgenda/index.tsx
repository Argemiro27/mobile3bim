import { AutoFocus } from "expo-camera/build/Camera.types";
import React from "react";
import { StyleSheet, TouchableOpacity, Text, Image } from "react-native";
import { ButtonProps } from "../../interfaces/Button.interface";
import colors from "../../styles/colors";

export default function ButtonAnimal({
  title,
  image,
  onPress,
  ...rest
}: ButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} {...rest}>
      {image && <Image style={styles.image} source={image} />}
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.black,
    borderRadius: 16,
    margin: 35,
    bottom: 40,
  },
  text: {
    color: colors.purpleLight,
    fontWeight: "bold",
    textAlign: "center",
    padding: 10,
    lineHeight:15,
  },
  image: {
    margin: 20,
    
  },
});
