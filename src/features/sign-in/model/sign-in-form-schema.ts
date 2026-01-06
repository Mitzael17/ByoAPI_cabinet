import { z } from 'zod'

export const signInFormSchema = z.object({
    email: z.email({ error: 'invalidEmail' }),
    password: z.string().min(3, { error: 'shortPassword' }).max(100, { error: 'longPassword' }),
    remember: z.string().optional(),
})

export type SignInFormSchema = z.infer<typeof signInFormSchema>
