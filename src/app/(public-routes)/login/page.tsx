'use client'

import Link from 'next/link'
import { useForm } from 'react-hook-form'
import { signIn } from 'next-auth/react'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { Input } from '@/components/_ui/Input'

type SigninForm = {
  email: string
  password: string
}

export default function Login() {
  const { register, handleSubmit } = useForm<SigninForm>()

  const { replace } = useRouter()

  async function onSumbit(data: SigninForm) {
    console.log(data)
    const currentToast = toast.loading('Processando...')
    const result = await signIn('credentials', {
      email: data.email,
      password: data.password,
      redirect: false,
    })

    console.log(result)

    toast.dismiss(currentToast)
    if (result?.error) {
      toast.error('Email ou Senha inválidos!')
      return
    }

    toast.success('Bem vindo de volta!')
    replace('/panel')
  }

  return (
    <div className="flex h-full items-center justify-center px-4">
      <form
        className="w-full space-y-4 sm:w-[350px]"
        onSubmit={handleSubmit(onSumbit)}
      >
        <div className="space-y-1">
          <h2 className="text-3xl">Bem vindo de volta!</h2>
          <p className="text-sm font-thin">Continue estudando agora mesmo.</p>
        </div>
        <div className="flex flex-col text-start">
          <label htmlFor="email">E-mail</label>
          <Input placeholder="Digite seu e-mail" {...register('email')} />
        </div>
        <div className="flex flex-col text-start">
          <label htmlFor="password">Senha</label>
          <Input
            type="password"
            placeholder="Digite sua senha"
            {...register('password')}
          />
        </div>
        <button
          className="w-full rounded-lg border-b-4 border-b-blue-800 bg-blue-600 p-2 font-bold text-white"
          type="submit"
        >
          Entrar
        </button>
        <p className="text-center text-sm text-gray-400">
          Não possui conta?{' '}
          <Link href={'/register'} className="text-black">
            Registra-se
          </Link>
        </p>
      </form>
    </div>
  )
}
