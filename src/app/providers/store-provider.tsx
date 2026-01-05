'use client'
import { setupListeners } from '@reduxjs/toolkit/query'
import type { ReactNode } from 'react'
import { useEffect, useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore } from '@app/providers/make-store'
import { AppStore } from '@app/providers/app-store'

interface Props {
    readonly children: ReactNode
}

export const StoreProvider = ({ children }: Props) => {
    const storeRef = useRef<AppStore | null>(null)

    // eslint-disable-next-line react-hooks/refs
    if (!storeRef.current) {
        // Create the store instance the first time this renders
        storeRef.current = makeStore()
    }

    useEffect(() => {
        if (storeRef.current !== null) {
            // configure listeners using the provided defaults
            // optional, but required for `refetchOnFocus`/`refetchOnReconnect` behaviors
            return setupListeners(storeRef.current.dispatch)
        }
    }, [])

    // eslint-disable-next-line react-hooks/refs
    return <Provider store={storeRef.current}>{children}</Provider>
}
