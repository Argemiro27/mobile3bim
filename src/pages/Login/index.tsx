import { AxiosError } from "axios";
import React, { useState, useEffect } from "react";
import {Button,ButtonText, Header, Loading} from "../../components"
import colors from "../../styles/colors";
import {
  Alert,
} from "react-native";
import { Form, Container, FormRow, TextInput, Title } from "../../styles/Login";
import { useAuth } from "../../hook/auth";
import { IAuthenticate, IUser } from "../../interfaces/User.interface";
import { LoginTypes } from "../../types/ScreenStack.types";
import { useFonts, NovaFlat_400Regular } from '@expo-google-fonts/nova-flat';

export default function Login({ navigation }: LoginTypes) {
  const { signIn } = useAuth();
  const [data, setData] = useState<IAuthenticate>();
  const [isLoading, setIsLoading] = useState(true);
  let [fontsLoaded] = useFonts({
    NovaFlat_400Regular,
  });

  function handleCadastrar() {
    navigation.navigate("Cadastrar");
  }

  function handleChange(item: IAuthenticate) {
    setData({ ...data, ...item });
  }

  async function handleSignIn() {
    try {
      setIsLoading(true);
      if (data?.email && data.password) {
        await signIn(data);
      } else {
        Alert.alert("Preencha todos os campos!!!");
        setIsLoading(false);
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
      setIsLoading(false);
    }
  }
  useEffect(() => {
    setIsLoading(false);
  }, []);
  
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
          <TextInput             
            onChangeText={(i) => handleChange({ email: i })}
            keyboardType="email-address" 
            autoCapitalize="none" 
            placeholder="Email"></TextInput>
        </FormRow>
        <FormRow>
          <TextInput 
          secureTextEntry={true}
          onChangeText={(i) => handleChange({ password: i })}            
          placeholder="Senha"></TextInput>
        </FormRow>
        <Button title="Entrar" onPress={handleSignIn} />
        <Button title="CADASTRAR-SE" onPress={handleCadastrar} />
        </Form>       
      </Container>
      )}
    </>
  );
}

