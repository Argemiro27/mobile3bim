import React from "react";
// import { useNavigation } from "@react-navigation/core";
import { Button, ButtonText, Header } from "../../components";

import { Form, Container, FormRow, TextInput, Title } from "../../styles/Login"
import { LoginTypes } from "../../types/ScreenStack.types";

export default function Cadastrar({ navigation }: LoginTypes) {
  // const navigation = useNavigation();
  function handleLogin() {
    navigation.navigate("Login");
  }
  return (
    <Container>
        <Header image={require("../../../assets/cabecalho1.png")} name={"cabecalho"}/>
        <Title>CADASTRO</Title>
        <Form>
          <FormRow>
            <TextInput placeholder="Email"></TextInput>
          </FormRow>
          <FormRow>
            <TextInput placeholder="Usuário"></TextInput>
          </FormRow>
          <FormRow>
            <TextInput placeholder="Senha"></TextInput>
          </FormRow>
          <Button title="CADASTRAR" onPress={handleLogin} />
          <Button title="Voltar" onPress={handleLogin} />
        </Form>
    </Container>
  );
}

