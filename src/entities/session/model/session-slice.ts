import { createSlice } from '@reduxjs/toolkit'
import { api } from '@entities/session/api/sign-in.generated'
import { rootReducer } from '@shared/redux'
import { deleteCookie, setCookie, getCookie } from 'cookies-next/client'

const initialState = {
    accessToken: getCookie('accessToken') || '',
    refreshToken: getCookie('refreshToken') || '',
    remember: false,
}

export const slice = createSlice({
    name: 'session',
    initialState,
    reducers: {
        setRemember: (state, { payload }: { payload: boolean }) => {
            state.remember = payload
        },
        logout: (state) => {
            state.accessToken = ''
            state.refreshToken = ''

            deleteCookie('refreshToken')
            deleteCookie('accessToken')
        },
    },
    selectors: {
        selectTokens: (state) => state,
    },
    extraReducers: (builder) => {
        builder.addMatcher(api.endpoints.signIn.matchFulfilled, (state, { payload }) => {
            const { accessToken, refreshToken } = payload.signIn

            state.accessToken = accessToken
            state.refreshToken = refreshToken

            if (state.remember) {
                setCookie('refreshToken', refreshToken, { maxAge: 60 * 60 * 24 * 30 })
                setCookie('accessToken', accessToken, { maxAge: 60 * 60 * 24 * 30 })
            }
        })
    },
})

export const sessionSlice = slice.injectInto(rootReducer)
