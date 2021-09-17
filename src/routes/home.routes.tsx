import React from "react";
import { Text, StyleSheet } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import AgendaStack from "./agenda.routes";
import colors from "../styles/colors";
import { Camera, File, Map } from "../pages";

const Drawer = createDrawerNavigator();

export default function HomeRoute() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        headerStyle: { backgroundColor: colors.purple },
        headerTintColor: colors.white,
        headerTitle: () => <Text style={styles.title}>Agendas</Text>,
        drawerStyle: {
          backgroundColor: colors.purple,
        },
        drawerInactiveTintColor: colors.white,
        drawerActiveTintColor: colors.black,
      }}
    >
      <Drawer.Screen
        name="AgendaStack"
        component={AgendaStack}
        options={{
          drawerLabel: "Agendas",
        }}
      />
      <Drawer.Screen name="Camera" component={Camera} />
      <Drawer.Screen name="File" component={File} />
      <Drawer.Screen name="Map" component={Map} />
    </Drawer.Navigator>
  );
}

const styles = StyleSheet.create({
  title: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: 18,
  },
});
