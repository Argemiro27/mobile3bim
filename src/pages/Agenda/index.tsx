import React from "react";
import { useRoute } from "@react-navigation/core";
// import { useNavigation } from "@react-navigation/core";
import { SafeAreaView } from "react-native";
import { Header, Atarefa, ButtonText } from "../../components";
import { AgendaProps } from "../../interfaces/Agenda.interface";
import { TarefaParamProps } from "../../interfaces/Tarefa.interface";
import { AgendaTypes } from "../../types/ScreenStack.types";

export default function Agenda({ navigation }: AgendaTypes) {
  const route = useRoute();
  const data = route.params as AgendaProps;
  // const navigation = useNavigation();
  function handleTarefaAgenda() {
    navigation.navigate("Tarefa", { ...data });
  }
  function tarefaEdit(item: TarefaParamProps) {
    navigation.navigate("Tarefa", { ...data, ...item });
  }
  function tarefaRemove(item: TarefaParamProps) {
    console.log("Tarefa", { ...data, ...item });
  }
  function voltar() {
    navigation.navigate("Home");
  }

  return (
    <SafeAreaView>
      <Header name={data.title} image={data.image} />
      <Atarefa
        title="Tarefas"
        onPress={handleTarefaAgenda}
        buttonEdit={tarefaEdit}
        buttonRemove={tarefaRemove}
        atarefa={data.atarefa}
      />
      <ButtonText title="Voltar" onPress={voltar} />
    </SafeAreaView>
  );
}
