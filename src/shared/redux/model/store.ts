import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from '@shared/redux/model/root-reducer'
import { dynamicMiddleware } from '@shared/redux/model/dynamic-middleware'

export const makeStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => {
            return getDefaultMiddleware().concat(dynamicMiddleware.middleware)
        },
    })
}
export const appStore = makeStore()

export type AppState = ReturnType<typeof makeStore>
export type AppDispatch = typeof appStore.dispatch
