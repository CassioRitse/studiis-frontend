'use client'

import GetQuizDataFromLocalStorage from '@/functions/get-quiz-data-from-localStorage'
import { Quiz } from '@/types/Quiz'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export type StartButtonProps = {
  quiz: Quiz
}

export function StartButton({ quiz }: StartButtonProps) {
  const router = useRouter()
  const [continueQuiz, setContinueQuiz] = useState<boolean>(false)
  const [isQuizFinished, setIsQuizFinished] = useState<boolean>(false)
  const [nextQuestion, setNextQuestion] = useState<number>(0)

  useEffect(() => {
    // Obtém os dados do quiz do localStorage
    const quizDataFromStorage = GetQuizDataFromLocalStorage()

    if (quizDataFromStorage && quizDataFromStorage.quizId === quiz.id) {
      if (quizDataFromStorage.is_finished) {
        setIsQuizFinished(true)
        return
      }
      // Se os dados correspondem ao quiz atual, definimos continueQuiz como true
      setContinueQuiz(true)
      setNextQuestion(quizDataFromStorage.current_question_number)
      return
    }

    setContinueQuiz(false)
  }, [quiz])

  const startQuiz = () => {
    if (continueQuiz) {
      router.push(`/panel/quiz/${quiz.id}/${quiz.questions[nextQuestion].id}`)
      return
    }

    // Inicializa os dados do quiz no localStorage ao iniciar o quiz pela primeira vez
    const quizData = {
      quizId: quiz.id,
      answered_questions: [],
      current_question_number: 0,
      is_finished: false,
      number_of_questions: quiz.questions.length,
    }
    localStorage.setItem('quiz_data', JSON.stringify(quizData))

    router.push(`/panel/quiz/${quiz.id}/${quiz.questions[nextQuestion].id}`)
  }

  return !isQuizFinished ? (
    <button
      onClick={startQuiz}
      className="rounded-lg border-b-2 border-b-gray-300 bg-white px-8 py-2 text-black"
    >
      {continueQuiz ? 'Continuar' : 'Iniciar'}
    </button>
  ) : (
    <p className="text-white">
      Este foi o ultimo quiz que você terminou, comece outro!
    </p>
  )
}
