import { z } from 'zod'

export const signInFormSchema = z.object({
    email: z.email({ error: 'invalidEmail' }),
    password: z.string().min(3, { error: 'shortPassword' }).max(100, { error: 'longPassword' }),
    // Используем boolean для чекбокса, чтобы корректно работать с react-hook-form и Radix Checkbox
    remember: z.boolean(),
})

export type SignInFormSchema = z.infer<typeof signInFormSchema>
