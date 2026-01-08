import { ReactNode } from 'react'
import { cn } from '@shared/lib/cn'

export const TypographyH2 = ({
    children,
    className,
}: {
    children: ReactNode
    className?: string
}) => {
    return (
        <h2 className={cn('text-2xl text-center font-bold tracking-tight text-balance', className)}>
            {children}
        </h2>
    )
}
