export default function QuizLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="flex h-full w-full flex-col items-center justify-center gap-2 rounded-xl border-b-8 border-b-sky-600 bg-sky-500 p-4 text-white">
        {children}
      </div>
    </div>
  )
}
