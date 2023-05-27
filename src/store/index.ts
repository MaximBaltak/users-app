import { configureStore } from '@reduxjs/toolkit'
import { AppState } from './type'
import usersSlice from './users/usersSlice'
const store = configureStore<AppState>({
  reducer: {
    users: usersSlice,
  },
})
export default store
