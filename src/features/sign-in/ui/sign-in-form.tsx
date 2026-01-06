'use client'

import { Lock, LogIn, Mail } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { useForm } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem, FormLabel } from '@shared/ui/form'
import { Checkbox } from '@shared/ui/checkbox'
import { ROUTES } from '@shared/config/routes'
import InternalLink from '@shared/ui/link'
import { Button } from '@shared/ui/button'
import InputWithIcon from '@shared/ui/input-with-icon'
import { useSignInMutation } from '@entities/session'
import { SignInFormSchema, signInFormSchema } from '@features/sign-in/model/sign-in-form-schema'
import { zodResolver } from '@hookform/resolvers/zod'

export const SignInForm = () => {
    const t = useTranslations('SignInForm')

    const [signIn] = useSignInMutation()

    const form = useForm<SignInFormSchema>({
        resolver: zodResolver(signInFormSchema),
        defaultValues: {
            email: '',
            password: '',
            remember: 'checked',
        },
    })

    return (
        <div className="w-full">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(submitHandler)}>
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field, fieldState }) => (
                            <FormItem>
                                <FormLabel>{t('email')}</FormLabel>
                                <FormControl>
                                    <InputWithIcon
                                        icon={<Mail />}
                                        errorMessage={
                                            fieldState.error?.message
                                                ? t(fieldState.error?.message)
                                                : undefined
                                        }
                                        placeholder={t('email')}
                                        {...field}
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                    />
                    <FormField
                        render={({ field, fieldState }) => (
                            <FormItem className="mt-5">
                                <FormLabel>{t('password')}</FormLabel>
                                <FormControl>
                                    <InputWithIcon
                                        icon={<Lock />}
                                        placeholder={t('password')}
                                        type="password"
                                        errorMessage={
                                            fieldState.error?.message
                                                ? t(fieldState.error?.message)
                                                : undefined
                                        }
                                        {...field}
                                    />
                                </FormControl>
                            </FormItem>
                        )}
                        name="password"
                    />
                    <div className="flex items-center justify-between gap-4 mt-5">
                        <FormField
                            control={form.control}
                            name="remember"
                            render={({ field }) => (
                                <FormItem className="flex gap-0">
                                    <FormControl className="cursor-pointer">
                                        <Checkbox {...field} />
                                    </FormControl>
                                    <FormLabel className="pl-2 cursor-pointer">
                                        {t('remember')}
                                    </FormLabel>
                                </FormItem>
                            )}
                        />
                        <InternalLink href={ROUTES.recover}>{t('forgetPassword')}</InternalLink>
                    </div>
                    <Button type="submit" className="w-full h-12 mt-5">
                        <LogIn /> {t('signIn')}
                    </Button>
                </form>
            </Form>
        </div>
    )

    async function submitHandler(data: SignInFormSchema) {
        const result = await signIn(data)

        if (result.error) {
            if ('status' in result.error && result.error.status === 401) {
                form.setError('email', {})
                return form.setError('password', { message: result.error.message })
            }

            alert(result.error.message)

            return
        }
    }
}
