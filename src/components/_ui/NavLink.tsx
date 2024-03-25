import { Url } from 'next/dist/shared/lib/router/router'
import Link from 'next/link'
import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

export type NavLinkProps = {
  href: Url
  className?: string
  children?: ReactNode
}
export const NavLink = ({
  className,
  href,
  children,
  ...props
}: NavLinkProps) => {
  return (
    <Link
      className={twMerge(
        'flex w-full items-center gap-4 rounded-lg px-2 py-4 font-bold hover:bg-sky-500 hover:text-white',
        className,
      )}
      href={href}
      {...props}
    >
      {children}
    </Link>
  )
}
