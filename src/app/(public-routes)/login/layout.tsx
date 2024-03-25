import { ReactNode } from 'react'

export default function LoginLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex h-screen flex-col">
      <header className="flex items-center justify-between p-4">
        <div>
          <h1 className="text-2xl font-bold text-blue-900">Studiis Online</h1>
        </div>
        <div className="hidden justify-end gap-4 sm:flex">
          <button className="border-b-gay-800 w-36 rounded-lg border-2 border-b-4 p-2 font-bold text-blue-600">
            Registra-se
          </button>
          <button className="w-36 rounded-lg border-b-4 border-b-blue-800 bg-blue-600 p-2 font-bold text-white">
            Login
          </button>
        </div>
      </header>
      <main className="flex-1">{children}</main>
    </div>
  )
}
