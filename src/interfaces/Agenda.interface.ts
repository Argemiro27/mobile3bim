
import { ImageSourcePropType } from 'react-native'

export interface AgendaProps {
  id: number
  title: string
  image: ImageSourcePropType
  atarefa: {
    id: number
    nome: string
    data: string
  }[]
}

export interface IAgenda {
  status: string,
  message: string,
  data: {
    id: number
    title: string
    image: ImageSourcePropType
    atarefa: {
      id: number
      nome: string
      data: string
    }[]
  }[]
}


export interface IInterfaceAgenda {
  id: number
  title: string
  image: ImageSourcePropType
  atarefa: {
    id: number
    nome: string
    data: string
  }[]
}






