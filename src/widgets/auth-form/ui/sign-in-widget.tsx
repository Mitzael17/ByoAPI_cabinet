import { LogIn } from 'lucide-react'
import { SignInForm } from '@features/sign-in'
import InternalLink from '@shared/ui/link'
import { ROUTES } from '@shared/config/routes'
import { getTranslations } from 'next-intl/server'
import { FormWrapper } from '@widgets/auth-form/ui/form-wrapper'

export const SignInWidget = async () => {
    const t = await getTranslations('Auth')

    return (
        <FormWrapper
            form={<SignInForm />}
            icon={<LogIn />}
            title={t('title')}
            description={t('login')}
            footer={
                <>
                    <p>{t('noAccount')}</p>
                    <InternalLink href={ROUTES.signUp}>{t('signUp')}</InternalLink>
                </>
            }
        />
    )
}
