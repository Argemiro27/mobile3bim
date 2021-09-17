import { ImageSourcePropType } from "react-native";
import { AgendaProps } from "./Agenda.interface";
import { ButtonProps } from "./Button.interface"

export interface TarefaParamProps extends AgendaProps {
  id: number
  nome: string
  data: string
}

export interface TarefaProps extends ButtonProps {
  buttonEdit: (item: TarefaParamProps) => void
  buttonRemove: (item: TarefaParamProps) => void
  atarefa: {
    id: number
    nome: string
    data: string
  }[]
}

export interface TarefaPropsAgenda {
  title: string
  image: ImageSourcePropType

  nome: string
  data: string
}