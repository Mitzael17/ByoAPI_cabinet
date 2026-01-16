import { TypographyH1 } from '@shared/ui/typography-h1'
import { ReactElement, ReactNode, cloneElement, isValidElement } from 'react'

interface FormWrapperProps {
    form: ReactNode
    icon: ReactElement
    title: string
    description: string
    footer: ReactNode
}

export const FormWrapper = async ({ form, footer, title, description, icon }: FormWrapperProps) => {
    const enhancedIcon = isValidElement(icon)
        ? cloneElement(icon as ReactElement<{ size: number; color: string }>, {
              size: 30,
              color: 'currentColor',
              ...(icon.props as object),
          })
        : icon

    return (
        <div className="bg-white w-full max-w-125 items-center p-8 rounded-lg flex flex-col">
            <div className="rounded-full w-16 h-16 text-indigo-600 bg-indigo-100 flex items-center justify-center">
                {enhancedIcon}
            </div>
            <TypographyH1 className="mt-4">{title}</TypographyH1>
            <p className="text-center text-xl mt-2">{description}</p>
            {form}
            <div className="mt-5 flex gap-2">{footer}</div>
        </div>
    )
}
