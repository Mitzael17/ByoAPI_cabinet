import { ReactNode } from 'react'

export const AuthLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 h-screen w-screen flex justify-center items-center">
            {children}
        </div>
    )
}
