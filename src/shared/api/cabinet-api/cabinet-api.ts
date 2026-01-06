import { createApi } from '@reduxjs/toolkit/query/react'
import { graphqlBaseQuery } from '@shared/api/cabinet-api/graphql-base-query'
import { dynamicMiddleware, rootReducer } from '@shared/redux'

export const cabinetApi = createApi({
    reducerPath: 'cabinetApi',
    baseQuery: graphqlBaseQuery({ baseUrl: 'http://localhost:3000/graphql' }),
    endpoints: () => ({}),
})

export const cabinetApiReducer = cabinetApi.reducer

rootReducer.inject(cabinetApi)
dynamicMiddleware.addMiddleware(cabinetApi.middleware)
