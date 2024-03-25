import Link from 'next/link'
import Title from '@/components/_ui/Title'

export default function Home() {
  return (
    <div className="flex h-screen flex-col">
      <header className="flex items-center justify-between p-4">
        <div>
          <h1 className="text-2xl font-bold text-blue-900">Studiis Online</h1>
        </div>
        <div className="hidden justify-end gap-4 sm:flex">
          <Link
            href={'/register'}
            className="border-b-gay-800 w-36 rounded-lg border-2 border-b-4 p-2 text-center font-bold text-blue-600"
          >
            Registra-se
          </Link>
          <Link
            href={'/login'}
            className="w-36 rounded-lg border-b-4 border-b-blue-800 bg-blue-600 p-2 text-center font-bold text-white"
          >
            Login
          </Link>
        </div>
      </header>
      <main className="flex-1">
        <div className="flex h-full items-center justify-center px-4">
          <Title>Bem vindo ao Studiis Online</Title>
        </div>
      </main>
    </div>
  )
}
