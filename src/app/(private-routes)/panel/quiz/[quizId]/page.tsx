'use client'

import Title from '@/components/_ui/Title'

import { Quiz } from '@/types/Quiz'
import { getSession } from 'next-auth/react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function QuizPage({ params }: { params: { quizId: string } }) {
  const [quiz, setQuiz] = useState<Quiz | null>(null)

  async function getData() {
    const session = await getSession()

    const resp = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL_API}/quiz/${params.quizId}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${session?.user.token}`,
        },
      },
    )

    const data: Quiz = await resp.json()

    console.log(data)

    setQuiz(data)
  }

  useEffect(() => {
    getData()
  }, [])

  if (!quiz) {
    return
  }

  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-2 rounded-xl border-b-8 border-b-sky-600 bg-sky-500 px-12 py-4">
        <Title className="text-white">{quiz.title}</Title>
        <p className="text-white">Questões: {quiz.numQuestions}</p>
        <Link
          className="rounded-lg border-b-2 border-b-gray-300 bg-white px-8 py-2 text-black"
          href={`/panel/quiz/${quiz.id}/questions`}
        >
          Iniciar
        </Link>

        {quiz.alreadyDone && (
          <div className="text-center text-white">
            <p>Quiz já realizado anteriormente</p>
            <strong>Pontuação: {quiz.score}</strong>
          </div>
        )}
      </div>
    </div>
  )
}
