import {
  TypedUseSelectorHook,
  useSelector as useReduxSelector,
} from 'react-redux'
import { AppState } from '../store/type'
import { useDispatch } from 'react-redux'
import store from '../store'

type AppDispatch = () => typeof store.dispatch

export const useAppDispatch: AppDispatch = useDispatch

export const useSelector: TypedUseSelectorHook<AppState> = useReduxSelector
