import { ComponentProps, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

type InputProps = ComponentProps<'input'>

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, placeholder, name, ...props }, ref) => {
    return (
      <input
        className={twMerge(
          'w-full rounded-lg border border-gray-300 bg-transparent p-2 text-sm focus-within:border-violet-600 focus-within:outline-none focus:ring-violet-600',
          className,
        )}
        type="text"
        placeholder={placeholder}
        name={name}
        id={name}
        ref={ref}
        {...props}
      />
    )
  },
)
