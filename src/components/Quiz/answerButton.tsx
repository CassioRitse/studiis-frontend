'use client'

import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export type ButtonProps = ComponentProps<'button'>

export default function AnswerButton({
  children,
  className,
  onClick,
}: ButtonProps) {
  return (
    <button
      className={twMerge(
        'rounded-lg border-b-2 border-b-gray-300 bg-slate-100 px-2 py-4 text-start',
        className,
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
