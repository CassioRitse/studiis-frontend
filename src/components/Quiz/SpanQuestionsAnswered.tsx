export type SpanQuestionsAnsweredProps = {
  numQuestion: number
  numQuestionsAnswered: number
}

export function SpanQuestionsAnswered({
  numQuestion,
  numQuestionsAnswered,
}: SpanQuestionsAnsweredProps) {
  return (
    <span>
      <strong>Questão:</strong> {numQuestionsAnswered}/{numQuestion}
    </span>
  )
}
