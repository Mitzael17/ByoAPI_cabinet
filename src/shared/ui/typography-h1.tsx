import { ReactNode } from 'react'
import { cn } from '@shared/lib/cn'

export const TypographyH1 = ({
    children,
    className,
}: {
    children: ReactNode
    className?: string
}) => {
    return (
        <h1 className={cn('text-4xl text-center font-bold tracking-tight text-balance', className)}>
            {children}
        </h1>
    )
}
