import { sessionSlice } from '@entities/session/model/session-slice'

export { useSignInMutation } from './api/sign-in.generated'
export { useSignUpMutation } from './api/sign-up.generated'

export const { selectTokens } = sessionSlice.selectors

export const { setRemember } = sessionSlice.actions
