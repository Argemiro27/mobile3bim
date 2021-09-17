import React from "react";
// import { useNavigation } from "@react-navigation/core";
// import { useNavigationContainerRef } from "@react-navigation/native";
import {Button,ButtonText, Header} from "../../components"
import colors from "../../styles/colors";
import { Form, Container, FormRow, TextInput, Title } from "../../styles/Login";
import { LoginTypes } from "../../types/ScreenStack.types";
import { useFonts, NovaFlat_400Regular } from '@expo-google-fonts/nova-flat';
import {  Text, View } from "react-native";
import { HeaderImage } from "../../components/Header/styles";

export default function Login({ navigation }: LoginTypes) {
  // const navigation = useNavigation();
  // const navigation = useNavigationContainerRef();
  let [fontsLoaded] = useFonts({
    NovaFlat_400Regular,
  });
  
  function handleHome() {
    navigation.navigate("HomeStack");
  }
  return (
    <>
    {fontsLoaded &&(
      <Container>
        <HeaderImage image={require("../../../assets/logo1.png")} />
        <Title>MENU PRINCIPAL</Title>
        <View>
        <Button title="MINHA AGENDA" onPress={handleHome} />
        <Button title="SOBRE" onPress={handleHome} />
        <Button title="SITE" onPress={"https://schedz2021.herokuapp.com"} />
        </View>
      </Container>
    )}
    </>
  );
}

