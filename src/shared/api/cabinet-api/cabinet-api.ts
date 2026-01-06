import { createApi } from '@reduxjs/toolkit/query/react'
import { dynamicMiddleware, rootReducer } from '@shared/redux'
import { GraphQLClient } from 'graphql-request'
import { graphqlRequestBaseQuery } from '@rtk-query/graphql-request-base-query'

export const client = new GraphQLClient('http://localhost:3000/graphql')

export const cabinetApi = createApi({
    reducerPath: 'cabinetApi',
    baseQuery: graphqlRequestBaseQuery({ client }),
    endpoints: () => ({}),
})

export const cabinetApiReducer = cabinetApi.reducer

rootReducer.inject(cabinetApi)
dynamicMiddleware.addMiddleware(cabinetApi.middleware)
