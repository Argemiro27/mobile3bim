import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import {
  TarefaParamProps,
  TarefaProps,
} from "../../interfaces/Tarefa.interface";
import ButtonAction from "../ButtonAction";
import { StyleSheet, View, Text } from "react-native";
import colors from "../../styles/colors";
import Button from "../Button";
import { Alert } from "react-native";

export default function Atarefa({
  title,
  atarefa,
  buttonEdit,
  buttonRemove,
  onPress,
  ...rest
}: TarefaProps) {
  const tarefaRemoveAlert = (item: TarefaParamProps) =>
    Alert.alert(
      "Remoção",
      "Tem certeza que deseja remover a tarefa cadastrada?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
        },
        {
          text: "OK",
          onPress: () => {
            console.log(item);
            buttonRemove(item);
          },
        },
      ],
      { cancelable: false }
    );
  return (
    <View style={styles.container}>
      <Text style={styles.header}>{title}</Text>
      {atarefa &&
        atarefa.map((item, index) => (
          <View style={styles.list} key={index}>
            <Text style={styles.text}>{item.nome}</Text>
            <Text style={styles.text}>{item.data}</Text>
            <View style={styles.button}>
              <ButtonAction
                type="edit"
                onPress={() => buttonEdit(item)}
                {...rest}
              >
                <FontAwesome name="edit" color={colors.white} />
              </ButtonAction>
              <ButtonAction
                type="remove"
                onPress={() => tarefaRemoveAlert(item)}
                {...rest}
              >
                <FontAwesome name="remove" color={colors.white} />
              </ButtonAction>
            </View>
          </View>
        ))}
      <Button size="define" title="Cadastrar" onPress={onPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 20,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
    width: "100%",
    marginTop: 10,
  },
  list: {
    width: "100%",
    flexDirection: "row",
  },
  text: {
    fontSize: 16,
    width: "30%",
    marginTop: 20,
  },
  button: {
    width: "40%",
    justifyContent: "flex-end",
    flexDirection: "row",
  },
});
