'use client'

import { SpanQuestionsAnswered } from '@/components/Quiz/SpanQuestionsAnswered'
import AnswerButton from '@/components/Quiz/answerButton'
import Title from '@/components/_ui/Title'
import { Answer } from '@/types/Answer'
import { FeedbackQuestion } from '@/types/Answer/feedbackQuestion.type'
import { Question } from '@/types/Question'
import { QuestionAnswered } from '@/types/Question/questionAnswered.type'
import { Quiz } from '@/types/Quiz'
import { getSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function QuestionPage({
  params,
}: {
  params: { quizId: string }
}) {
  const [quiz, setQuiz] = useState<Quiz | null>(null)
  const [questions, setQuestions] = useState<Question[]>([])
  const [currentQuestion, setCurrentQuestion] = useState<Question | null>(null)
  const [feedbackQuestion, setFeedbackQuestion] =
    useState<FeedbackQuestion | null>(null)
  const [isFinish, setIsFinish] = useState<boolean>(false)
  const [questionsAnswered, setQuestionsAnswered] = useState<
    QuestionAnswered[]
  >([])
  const [numQuestionsAnswered, setNumQuestionsAnswered] = useState<number>(0)

  const { push } = useRouter()

  useEffect(() => {
    async function fectchData() {
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
      setQuestions(data.questions)
      setCurrentQuestion(data.questions[0])
    }

    fectchData()
  }, [params.quizId])

  async function answerQuestion(answerId: string) {
    if (!currentQuestion) {
      return
    }
    const body = JSON.stringify({ questionId: currentQuestion.id, answerId })
    console.log({ questionId: currentQuestion.id, answerId })
    const resp = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL_API}/question/response`,
      {
        body,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    )

    const data: FeedbackQuestion = await resp.json()

    console.log(data)

    setQuestionsAnswered((value) => [
      ...value,
      { questionId: currentQuestion.id, answerId },
    ])
    setFeedbackQuestion(data)
    if (numQuestionsAnswered === questions.length - 1) {
      setIsFinish(true)
      return
    }

    setNumQuestionsAnswered((value) => value + 1)
  }

  function handleNextQuestion() {
    setFeedbackQuestion(null)
    setCurrentQuestion(questions[numQuestionsAnswered])
  }

  async function handleFinishQuiz() {
    const session = await getSession()
    const body = JSON.stringify({
      quizId: params.quizId,
      responses: questionsAnswered,
    })

    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_API}/quiz/answer`, {
      body,
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${session?.user.token}`,
      },
    })

    push('/panel/quizzes')
  }

  async function handleFavoriteQuestion() {
    console.log(questionsAnswered[questionsAnswered.length - 1])
  }

  if (!quiz) {
    return null
  }

  return (
    <div className="flex h-full w-full flex-col p-2 text-black sm:p-8 md:p-16">
      <div className="flex h-fit flex-row items-center justify-between gap-2 rounded-lg p-2">
        <Title className="text-lg text-white">
          <strong className="font-bold">Quiz: </strong>
          {quiz.title}
        </Title>
        <div className="strong text-center">
          <SpanQuestionsAnswered
            numQuestion={quiz.numQuestions}
            numQuestionsAnswered={numQuestionsAnswered}
          />
          <p className="h-fit rounded-lg bg-purple-900 p-1 text-center text-sm font-bold text-white">
            {quiz.category}
          </p>
        </div>
      </div>

      <div className="flex basis-3/4 flex-col justify-around">
        <div className="rounded-lg border-b-2 border-b-gray-300 bg-slate-100 p-4">
          <h2 className="text-1xl tracking-wide ">
            <strong className="font-bold">Pergunta: </strong>
            {currentQuestion?.title}
          </h2>
          <div className="text-end text-sm">{currentQuestion?.origin}</div>
        </div>
        {feedbackQuestion && (
          <div className={`block space-y-2 p-4 text-white`}>
            <div>
              <p>
                Sua resposta está{' '}
                <strong
                  className={`rounded-lg bg-white p-1 ${feedbackQuestion.correct ? 'text-green-500' : 'text-red-500'}`}
                >
                  {feedbackQuestion.correct ? 'Correta!' : 'Errada!'}
                </strong>
              </p>
              <div>
                <p>
                  <strong>Resposta correta: </strong>
                  {feedbackQuestion.correctAnswer.description}
                </p>
                {feedbackQuestion.explanation && (
                  <p>
                    <strong className="font-bold">Explicacão: </strong>
                    {feedbackQuestion.explanation}
                  </p>
                )}
              </div>
            </div>
            <div className="text-end">
              <button
                onClick={() => handleFavoriteQuestion()}
                className="rounded-lg bg-yellow-500 p-2 text-black"
              >
                Salvar qustão para revisão
              </button>
            </div>
          </div>
        )}

        {feedbackQuestion ? (
          isFinish ? (
            <div className="flex justify-end">
              <button
                onClick={() => handleFinishQuiz()}
                className="w-fit rounded-lg bg-white p-2"
              >
                Encerrar Quiz
              </button>
            </div>
          ) : (
            <div className="flex justify-end">
              <button
                className="rounded-lg bg-slate-100 p-2 text-black"
                onClick={() => handleNextQuestion()}
              >
                Proxima Pergunta
              </button>
            </div>
          )
        ) : (
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {currentQuestion?.answers.map((answer: Answer) => (
              <AnswerButton
                onClick={() => answerQuestion(answer.id)}
                key={answer.id}
              >
                {answer.description}
              </AnswerButton>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
