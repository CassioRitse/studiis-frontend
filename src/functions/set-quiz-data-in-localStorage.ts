import { QuizDataFromStorage } from '@/types/localStorage/quizDataFromStorage.type'

export default function SetQuizDataInLocalStorage(
  data: QuizDataFromStorage,
): void {
  const json = JSON.stringify(data)

  localStorage.setItem('quiz_data', json)
}
