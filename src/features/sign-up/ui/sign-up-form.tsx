'use client'

import { useTranslations } from 'next-intl'
import { useAppDispatch } from '@shared/redux'
import { setRemember, useSignUpMutation } from '@entities/session'
import { SignInFormSchema } from '@features/sign-in/model/sign-in-form-schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Form, FormControl, FormField, FormItem, FormLabel } from '@shared/ui/form'
import InputWithIcon from '@shared/ui/input-with-icon'
import { Lock, Mail, UserPlus } from 'lucide-react'
import { Checkbox } from '@shared/ui/checkbox'
import { ROUTES } from '@shared/config/routes'
import { Button } from '@shared/ui/button'
import { redirect } from 'next/navigation'
import { signUpFormSchema, SignUpFormSchema } from '@features/sign-up/model/sign-up-form-schema'
import { useForm } from 'react-hook-form'

export const SignUpForm = () => {
    const t = useTranslations('Auth')

    const dispatch = useAppDispatch()
    const [signUp] = useSignUpMutation()

    const form = useForm<SignUpFormSchema>({
        resolver: zodResolver(signUpFormSchema),
        defaultValues: {
            email: '',
            password: '',
            confirmPassword: '',
            remember: true,
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
                    <FormField
                        render={({ field, fieldState }) => (
                            <FormItem className="mt-5">
                                <FormLabel>{t('confirmPassword')}</FormLabel>
                                <FormControl>
                                    <InputWithIcon
                                        icon={<Lock />}
                                        placeholder={t('confirmPassword')}
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
                        name="confirmPassword"
                    />
                    <FormField
                        control={form.control}
                        name="remember"
                        render={({ field }) => (
                            <FormItem className="flex gap-0 mt-5">
                                <FormControl className="cursor-pointer">
                                    <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                    />
                                </FormControl>
                                <FormLabel className="pl-2 cursor-pointer">
                                    {t('remember')}
                                </FormLabel>
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="w-full h-12 mt-5">
                        <UserPlus /> {t('signUp')}
                    </Button>
                </form>
            </Form>
        </div>
    )

    async function submitHandler(data: SignInFormSchema) {
        dispatch(setRemember(data.remember))

        const result = await signUp({ email: data.email, password: data.password })

        if (result.error) {
            if ('code' in result.error && result.error.code === 409) {
                return form.setError('email', { message: 'userAlreadyExists' })
            }

            alert('Unknown error.')

            return
        }

        redirect(`${ROUTES.signConfirm}?email=${data.email}&remember=${data.remember}`)
    }
}
