export type QuizCardType = {
  id: string
  title: string
  createdAt: string
  updatedAt: string
  category: string
  subCategories: string[]
  numQuestions: number
  owner: {
    name: string
  }
}
