import { useSelector } from 'react-redux'
import { AppState } from '@shared/redux/model/store'

export const useAppSelector = useSelector.withTypes<AppState>()
