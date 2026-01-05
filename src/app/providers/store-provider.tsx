'use client'
import { setupListeners } from '@reduxjs/toolkit/query'
import type { ReactNode } from 'react'
import { useEffect, useRef } from 'react'
import { Provider } from 'react-redux'
import { AppState, makeStore } from '@shared/redux'

export const StoreProvider = ({ children }: { children: ReactNode }) => {
    const storeRef = useRef<AppState | null>(null)

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
