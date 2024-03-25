import { Categories } from '@/components/_ui/Categories'
import QuizCard from '@/components/_ui/QuizCard'
import { QuizCardType } from '@/types/Quiz/quizCard.type'

export default async function Quizzes() {
  const resp = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL_API}/quiz`, {
    method: 'GET',
    cache: 'no-store',
  })

  const quizzes: QuizCardType[] = await resp.json()

  return (
    <div className="w-full p-6">
      <section className="h-fit p-2">
        <div>
          <div className="flex items-center justify-between gap-4 rounded-lg border border-b-4 border-b-gray-200 bg-white p-4">
            <p className="text-2xl font-semibold tracking-wider">
              Quizzes oficiais:
            </p>
            <Categories></Categories>
          </div>
          <div className="xl:grid-col-4 mt-4 grid grid-cols-1 flex-wrap  gap-2 md:grid-cols-2 lg:grid-cols-3">
            {quizzes?.map((quiz) => {
              return <QuizCard key={quiz.id} {...quiz} />
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
