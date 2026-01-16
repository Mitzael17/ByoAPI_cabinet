import { FormWrapper } from '@widgets/auth-form/ui/form-wrapper'
import InternalLink from '@shared/ui/link'
import { ROUTES } from '@shared/config/routes'
import { getTranslations } from 'next-intl/server'
import { UserPlus } from 'lucide-react'
import { SignUpForm } from '@features/sign-up'

export const SignUpWidget = async () => {
    const t = await getTranslations('Auth')

    return (
        <FormWrapper
            form={<SignUpForm />}
            icon={<UserPlus />}
            title={t('title')}
            description={t('register')}
            footer={
                <>
                    <p>{t('haveAccount')}</p>
                    <InternalLink href={ROUTES.signIn}>{t('signIn')}</InternalLink>
                </>
            }
        />
    )
}
