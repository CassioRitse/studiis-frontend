import { Answer } from '../Answer'

export type Question = {
  id: string
  title: string
  origin: string
  tip: null | string
  answers: Answer[]
}
