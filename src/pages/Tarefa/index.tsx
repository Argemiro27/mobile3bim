import React, { useState } from "react";
import { useRoute } from "@react-navigation/core";
// import { useNavigation } from "@react-navigation/core";
import { Button, Header } from "../../components";
import { StyleSheet, SafeAreaView, Text, TextInput } from "react-native";
import {
  TarefaParamProps,
  TarefaPropsAgenda,
} from "../../interfaces/Tarefa.interface";
import colors from "../../styles/colors";
import { AgendaTypes } from "../../types/ScreenStack.types";

export default function Tarefa({ navigation }: AgendaTypes) {
  const route = useRoute();
  const data = route.params as TarefaParamProps;
  console.log({ ...data });
  const [nomeTarefa, setNomeTarefa] = useState(data.nome);
  const [dataTarefa, setDataTarefa] = useState(data.data);
  function nomeChange(item: string) {
    setNomeTarefa(item);
  }
  function dataChange(item: string) {
    setDataTarefa(item);
  }
  // const navigation = useNavigation();
  function handleAgenda() {
    navigation.navigate("Agenda", { ...data });
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header name={data.title} image={data.image} />
      <Text style={styles.text}>Cadastro de Tarefa</Text>
      <TextInput
        style={styles.input}
        placeholder="nome"
        value={nomeTarefa}
        onChangeText={(text) => nomeChange(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="dia/mês/ano"
        value={dataTarefa}
        onChangeText={(text) => dataChange(text)}
      />
      <Button size="define" title="Salvar" onPress={handleAgenda} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    width: "50%",
    margin: 10,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: colors.black,
    fontSize: 16,
    padding: 10,
    width: "50%",
    marginTop: 20,
    marginBottom: 20,
  },
});
