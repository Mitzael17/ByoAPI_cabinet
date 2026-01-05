import { useDispatch } from 'react-redux'
import { AppDispatch } from '@shared/redux/model/store'

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
