import { z } from 'zod'

export const signUpFormSchema = z
    .object({
        email: z.email({ error: 'invalidEmail' }),
        password: z.string().min(3, { error: 'shortPassword' }).max(100, { error: 'longPassword' }),
        confirmPassword: z.string(),
        remember: z.boolean(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        error: 'passwordsDontMatch',
        path: ['confirmPassword'],
    })

export type SignUpFormSchema = z.infer<typeof signUpFormSchema>
