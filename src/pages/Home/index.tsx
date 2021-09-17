import React from "react";
import { FlatList, StyleSheet, SafeAreaView, Text, View } from "react-native";
// import { useNavigation } from "@react-navigation/core";
import { Header, ButtonAgenda } from "../../components";
import data from "../../services/data";
import { AgendaProps } from "../../interfaces/Agenda.interface";
import { AgendaTypes } from "../../types/ScreenStack.types";

export default function Home({ navigation }: AgendaTypes) {
  // const navigation = useNavigation();
  function handleAgenda(item: AgendaProps) {
    navigation.navigate("Agenda", { ...item });
  }
  return (
    <SafeAreaView style={styles.container}>
      <ButtonAgenda
        hello="Olá"
        name="Argemiro"
        image={require("../../../assets/logo1.png")}
      />
      <Text style={styles.message}>Você possui 2 agendas:</Text>
      <View>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <ButtonAgenda
              key={item.id}
              title={item.title}
              onPress={() => handleAgenda(item)}
              image={item.image}
            />
          )}
          numColumns={2}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 110,
    marginTop: 10,
  },
  message: {
    fontSize: 18,
    marginTop: 20,
    marginLeft: 20,
  },
});
