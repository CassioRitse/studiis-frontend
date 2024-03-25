'use client'

import { Input } from '@/components/_ui/Input'
import Link from 'next/link'

export default function Register() {
  return (
    <div className="flex h-full items-center justify-center px-4">
      <div className="w-full space-y-4 sm:w-[350px]">
        <div className="space-y-1">
          <h2 className="text-3xl">Cadastro</h2>
        </div>
        <div className="flex flex-col text-start">
          <label htmlFor="first-name" className="text-sm text-gray-500">
            Nome
          </label>
          <Input placeholder="Digite seu nome" name="first-name" />
        </div>
        <div className="flex flex-col text-start">
          <label htmlFor="last-name" className="text-sm text-gray-500">
            Sobrenome
          </label>
          <Input placeholder="Digite seu sobrenome" name="last-name" />
        </div>
        <div className="flex flex-col text-start">
          <label htmlFor="email" className="text-sm text-gray-500">
            E-mail
          </label>
          <Input placeholder="Digite seu email" name="email" />
        </div>
        <div className="flex flex-col text-start">
          <label htmlFor="password" className="text-sm text-gray-500">
            Senha
          </label>
          <Input
            type="password"
            placeholder="Digite sua senha"
            name="password"
          />
        </div>
        <div className="flex flex-col text-start">
          <label htmlFor="confirm-password" className="text-sm text-gray-500">
            Confirme a senha{' '}
          </label>
          <Input
            type="password"
            placeholder="confirme sua senha"
            name="confirm-password"
          />
        </div>
        <button className="w-full rounded-lg border-b-4 border-b-blue-800 bg-blue-600 p-2 font-bold text-white">
          Registra-se
        </button>

        <p className="text-center text-sm text-gray-400">
          Já possui conta?{' '}
          <Link href={'/login'} className="text-black">
            Entrar
          </Link>
        </p>
      </div>
    </div>
  )
}
