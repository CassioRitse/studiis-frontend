import { QuizCardType } from '@/types/Quiz/quizCard.type'
import { ClipboardPenIcon } from 'lucide-react'
import Link from 'next/link'

export type QuizCardProps = QuizCardType

export default function QuizCard({
  id,
  title,
  numQuestions,
  updatedAt,
  owner,
  category,
}: QuizCardProps) {
  return (
    <div
      className="w-full rounded-xl border-b-8 border-b-sky-600 bg-sky-500 p-4 text-white hover:opacity-95"
      key={id}
    >
      <Link
        href={`/panel/quiz/${id}`}
        className="flex flex-col justify-between gap-2"
      >
        <p className="text-2xl">{title}</p>
        <div className="flex gap-2">
          <ClipboardPenIcon></ClipboardPenIcon>
          <p>{numQuestions}</p>
        </div>
        <div className="flex items-center justify-between text-end text-xs text-sky-200">
          <p>{category}</p>
          <span className="">
            {owner.name}
            {'-'}
            {new Date(updatedAt).toLocaleDateString('pt-Br')}
          </span>
        </div>
      </Link>
    </div>
  )
}
