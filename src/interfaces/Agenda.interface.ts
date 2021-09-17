
import { ImageSourcePropType } from 'react-native'

export interface AgendaProps {
  id: number
  title: string
  image: ImageSourcePropType
  castracao?: string
  atarefa: {
    id: number
    nome: string
    data: string
  }[]
}
