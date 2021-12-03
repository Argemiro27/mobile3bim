import { AxiosError } from "axios";
import React, { useState, useEffect } from "react";
import { Button, ButtonText, Header, Loading } from "../../components";
import {useAuth} from "../../hook/auth";
import {
  Alert,
} from "react-native";
import { Form, Container, FormRow, TextInput, Title } from "../../styles/Login"
import { IRegister, IUser } from "../../interfaces/User.interface";
import { LoginTypes } from "../../types/ScreenStack.types";

export default function Cadastrar({ navigation }: LoginTypes) {
  const { register } = useAuth();
  const [data, setData] = useState<IRegister>();
  const [isLoading, setIsLoading] = useState(true);
  function handleChange(item: IRegister) {
    setData({ ...data, ...item });
  }
  function handleLogin() {
    navigation.navigate("Login");
  }
  async function handleRegister() {
    try {
      setIsLoading(true);
      if (data?.email && data.name && data.password) {
        await register(data);
      } else {
        Alert.alert("Preencha todos os campos!!!");
      }
    } catch (error) {
      const err = error as AxiosError;
      const data = err.response?.data as IUser;
      let message = "";
      if (data.data) {
        for (const [key, value] of Object.entries(data.data)) {
          message = `${message} ${value}`;
        }
      }
      Alert.alert(`${data.message} ${message}`);
    } finally {
      setIsLoading(false);
    }
  }


  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1400);
  }, []);

  return (
    <>
    {isLoading ? (
      <Loading />
    ) : (
    <Container>
        <Header image={require("../../../assets/cabecalho1.png")} name={"cabecalho"}/>
        <Title>CADASTRO</Title>
        <Form>
          <FormRow>
            <TextInput 
            onChangeText={(i) => handleChange({ email: i })}
            keyboardType="email-address" 
            autoCapitalize="none" 
            placeholder="Email"></TextInput>
          </FormRow>
          <FormRow>
            <TextInput 
            onChangeText={(i) => handleChange({ name: i })}
            placeholder="Usuário"></TextInput>
          </FormRow>
          <FormRow>
            <TextInput 
            secureTextEntry={true}
            onChangeText={(i) => handleChange({ password: i })}            
            placeholder="Senha"></TextInput>
          </FormRow>
          <Button title="CADASTRAR" onPress={handleRegister} />
          <Button title="Voltar" onPress={handleLogin} />
        </Form>
    </Container>
    )}
    </>
    );
  }

