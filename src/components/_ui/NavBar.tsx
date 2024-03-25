import Link from 'next/link'
import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type NavBarProps = ComponentProps<'ul'>

export const NavBar = ({ className }: NavBarProps) => {
  return (
    <nav>
      <ul className={twMerge('', className)}>
        <li className="p-2 hover:opacity-60">
          <Link href="/">Home</Link>
        </li>
        <li className="p-2 hover:opacity-60">
          <Link href="/">Questionarios</Link>
        </li>
        <li className="p-2 hover:opacity-60">
          <Link href="/">FlashCards</Link>
        </li>
        <li className="p-2 hover:opacity-60">
          <Link href="/">Minha revisão</Link>
        </li>
        <li className="p-2 hover:opacity-60">
          <Link href="/">Perfil</Link>
        </li>
      </ul>
    </nav>
  )
}
