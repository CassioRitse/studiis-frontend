import { Question } from '../Question'

export type Quiz = {
  id: string
  title: string
  createdAt: string
  updatedAt: string
  numQuestions: number
  alreadyDone: boolean
  score: number | boolean
  category: string
  questions: Question[]
}
