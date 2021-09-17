import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Home, Agenda, Tarefa } from "../pages";
import { AgendaStackParamList } from "../types/ScreenStack.types";

const Stack = createStackNavigator<AgendaStackParamList>();

export default function AgendaRoute() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Agenda" component={Agenda} />
      <Stack.Screen name="Tarefa" component={Tarefa} />
    </Stack.Navigator>
  );
}
