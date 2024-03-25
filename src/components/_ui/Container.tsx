import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

export type ContainerProps = ComponentProps<'div'>

export default function Container({
  children,
  className,
  ...props
}: ContainerProps) {
  return (
    <div
      className={
        (twMerge('h-[700px] w-full rounded-xl bg-slate-200'), className)
      }
      {...props}
    >
      {children}
    </div>
  )
}
