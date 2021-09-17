import { StackNavigationProp } from "@react-navigation/stack"
import { ImageSourcePropType } from "react-native"
import { AgendaProps } from "../interfaces/Agenda.interface"

// Login Stack
export type LoginStackParamList = {
  Login: undefined
  Cadastrar: undefined
  HomeStack: undefined
}
type LoginScreenNavigationProp = StackNavigationProp<LoginStackParamList>
export type LoginTypes = {
  navigation: LoginScreenNavigationProp
}

// Agenda Stack
export type AgendaStackParamList = {
  Home: undefined
  Agenda: AgendaProps
  Tarefa: {
    title: string
    image: ImageSourcePropType
    atarefa?: {
      nome: string
      data: string
    }[]
  }
}
type AgendaScreenNavigationProp = StackNavigationProp<AgendaStackParamList>
export type AgendaTypes = {
  navigation: AgendaScreenNavigationProp
}