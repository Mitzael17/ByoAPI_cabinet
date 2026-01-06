import { cabinetApi } from '@shared/api/cabinet-api'
import { gql } from 'graphql-request'
import { SignInFormSchema } from '@features/sign-in/model/sign-in-form-schema'

const signIn = cabinetApi.injectEndpoints({
    endpoints: (builder) => ({
        signIn: builder.mutation<
            Record<string, string>,
            Pick<SignInFormSchema, 'email' | 'password'>
        >({
            query: (body) => ({
                url: '',
                method: 'POST',
                body: gql`
                    mutation {
                        signIn(data: { password: "${body.password}", email: "${body.email}" }) {
                            accessToken
                            refreshToken
                        }
                    }
                `,
            }),
        }),
    }),
})

export const { useSignInMutation } = signIn
