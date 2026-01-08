import { SignInForm } from '@features/sign-in'
import { LogIn } from 'lucide-react'
import { TypographyH1 } from '@shared/ui/typography-h1'
import { getTranslations } from 'next-intl/server'
import InternalLink from '@shared/ui/link'
import { ROUTES } from '@shared/config/routes'

export const SignInPage = async () => {
    const t = await getTranslations('SignInForm')

    return (
        <div className="bg-white w-full max-w-125 items-center p-8 rounded-lg flex flex-col">
            <div className="rounded-full w-16 h-16 text-indigo-600 bg-indigo-100 flex items-center justify-center">
                <LogIn color="currentColor" size={30} />
            </div>
            <TypographyH1 className="mt-4">{t('title')}</TypographyH1>
            <p className="text-center text-xl mt-2">{t('login')}</p>
            <SignInForm />
            <div className="mt-5 flex gap-2">
                <p>{t('noAccount')}</p>
                <InternalLink href={ROUTES.signUp}>{t('signUp')}</InternalLink>
            </div>
        </div>
    )
}
