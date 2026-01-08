import { createApi } from '@reduxjs/toolkit/query/react'
import { dynamicMiddleware, rootReducer } from '@shared/redux'
import { GraphQLClient } from 'graphql-request'
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query'

export const client = new GraphQLClient('http://localhost:3000/graphql')

export const cabinetApi = createApi({
    reducerPath: 'cabinetApi',
    baseQuery: graphqlRequestBaseQuery({
        client,
        prepareHeaders: (headers, { getState }) => {
            const state = getState() as { session: { accessToken: string } }

            if (state.session.accessToken) {
                headers.set('Authorization', `Bearer ${state.session.accessToken}`)
            }

            return headers
        },
        customErrors: (error) => {
            const originalError = error.response.errors?.[0].extensions.originalError as {
                message: string
                statusCode: number
            }

            if (!originalError) return error

            return { message: originalError.message.toLowerCase(), code: originalError.statusCode }
        },
    }),
    endpoints: () => ({}),
})

export const cabinetApiReducer = cabinetApi.reducer

rootReducer.inject(cabinetApi)
dynamicMiddleware.addMiddleware(cabinetApi.middleware)
