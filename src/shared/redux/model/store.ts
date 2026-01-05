import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from '@shared/redux/model/root-reducer'

export const makeStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => {
            return getDefaultMiddleware()
        },
    })
}
export const appStore = makeStore()

export type AppState = ReturnType<typeof makeStore>
export type AppDispatch = typeof appStore.dispatch
