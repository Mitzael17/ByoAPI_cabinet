import { createApi } from '@reduxjs/toolkit/query/react'
import { graphqlBaseQuery } from '@shared/api/cabinet-api/graphql-base-query'

export const cabinetApi = createApi({
    reducerPath: 'cabinetApi',
    baseQuery: graphqlBaseQuery({ baseUrl: 'http://localhost:3000/graphql' }),
    endpoints: () => ({}),
})
