import Title from '@/components/_ui/Title'
import { APP_ROUTES } from '@/constants/app.routes'
import Link from 'next/link'

export default async function Home() {
  return (
    <div className="flex h-full w-full flex-col">
      <section className="grid h-full grid-cols-2 grid-rows-3 gap-4">
        <div className="col-span-2 h-full w-full rounded-xl bg-sky-400 p-4">
          <div className="flex h-full flex-col items-start justify-center space-y-2">
            <Title className="text-4xl font-semibold text-blue-800">
              Vamos continuar treinando!
            </Title>
            <div className="text-base font-semibold text-white">
              <p>
                Projetado com base nos princípios de repetição espaçada,
                aprendizado adaptativo e muito mais.
              </p>
              <p>Melhore os resultados dos seus testes.</p>
            </div>
          </div>
        </div>
        <div className="col-span-1 h-full w-full rounded-xl bg-gray-200 p-4">
          <div className="flex  h-full w-full flex-col items-start justify-center space-y-2">
            <p className="text-3xl">Quizzes</p>
            <p>
              Disponíveis atualmente: <span className="font-bold ">2</span>
            </p>
            <p>
              Categorias: <span>3</span>
            </p>
            <p>
              Questões: <span>60</span>
            </p>
            <div className="flex w-full justify-end">
              <Link
                href={APP_ROUTES.panel.quizzes}
                className="w-36 rounded-xl border-b-2 border-b-black bg-gray-700 px-4 py-2 text-center text-white"
              >
                Praticar
              </Link>
            </div>
          </div>
        </div>
        <div className="col-span-1 row-span-2 h-full w-full space-y-4 rounded-xl bg-white p-4 shadow-lg">
          <p className="text-3xl">
            Projeto <span className="font-bold">Studiis Online</span>
          </p>
          <p className="text-justify text-lg">
            O Studiss Online é uma plataforma educacional interativa projetado
            para ajudar estudantes a estudar e treinar de forma eficaz para seus
            exames. Ele oferece uma variedade de recursos, incluindo quizzes e
            flashcards, todos apresentados de forma gamificada para tornar o
            aprendizado mais envolvente e divertido.
          </p>
          <div className="text-md">
            <p>- Quizzes para você ficar fera no assunto! 🔥</p>
            <p>- Flashcards para memorizar conceitos.</p>
            <p>- Quiz de revisão personalizada</p>
            <p>- Reduza a ansiedade ao fazer o teste</p>
            <p>
              - <span className="text-violet-500">Gamificado</span> para crescer
            </p>
          </div>
        </div>
        <div className="col-span-1 h-full w-full rounded-xl bg-violet-200 p-4">
          <div className="flex  h-full w-full flex-col items-start justify-center space-y-2">
            <p className="text-3xl">FlashCards</p>
            <p>
              Disponíveis atualmente: <span className="font-bold ">2</span>
            </p>
            <p>
              Categorias: <span>3</span>
            </p>
            <p>
              Questões: <span>60</span>
            </p>
            <div className="flex w-full justify-end">
              <Link
                href={APP_ROUTES.panel.flashCards}
                className="w-36 rounded-xl border-b-2 border-b-black bg-violet-800 px-4 py-2 text-center text-white"
              >
                Praticar
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
