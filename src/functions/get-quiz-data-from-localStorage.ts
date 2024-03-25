import { QuizDataFromStorage } from '@/types/localStorage/quizDataFromStorage.type'

export default function GetQuizDataFromLocalStorage(): QuizDataFromStorage | null {
  const quizDataFromStorage = localStorage.getItem('quiz_data')
  const parsedQuizData = quizDataFromStorage
    ? (JSON.parse(quizDataFromStorage) as QuizDataFromStorage)
    : null

  return parsedQuizData
}
