import React from "react";
// import { useNavigation } from "@react-navigation/core";
// import { useNavigationContainerRef } from "@react-navigation/native";
import {Button,ButtonText, Header} from "../../components"
import colors from "../../styles/colors";
import { Form, Container, FormRow, TextInput, Title } from "../../styles/Login";
import { LoginTypes } from "../../types/ScreenStack.types";
import { useFonts, NovaFlat_400Regular } from '@expo-google-fonts/nova-flat';

export default function Login({ navigation }: LoginTypes) {
  // const navigation = useNavigation();
  // const navigation = useNavigationContainerRef();
  let [fontsLoaded] = useFonts({
    NovaFlat_400Regular,
  });
  function handleCadastrar() {
    navigation.navigate("Cadastrar");
  }
  
  function handleMainMenu() {
    navigation.navigate("MainMenuStack");
  }
  return (
    <>
    {fontsLoaded &&(
      <Container>
        <Header image={require("../../../assets/cabecalho1.png")} name={"cabecalho"}/>
        <Form> 
        <Title>LOGIN</Title>
        <FormRow>
          <TextInput placeholder="Email"></TextInput>
        </FormRow>
        <FormRow>
          <TextInput placeholder="Senha"></TextInput>
        </FormRow>
        <Button title="Entrar" onPress={handleMainMenu} />
        <Button title="CADASTRAR-SE" onPress={handleCadastrar} />
        </Form>       
      </Container>
    )}
    </>
  );
}

