import { Input } from '@shared/ui/input'
import { ComponentProps, ReactNode } from 'react'
import { cn } from '@shared/lib/cn'

const InputWithIcon = ({ icon, ...props }: ComponentProps<typeof Input> & { icon: ReactNode }) => {
    return (
        <div className="relative">
            <div className="absolute left-3 top-3.5 pointer-events-none text-gray-400">{icon}</div>
            <Input {...props} className={cn(props.className, 'pl-11 h-12')} />
        </div>
    )
}

export default InputWithIcon
