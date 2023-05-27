import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { UsersState } from './types'
import { TypeUser } from '../../types/typeUser'
const initialState: UsersState = {
  users: [],
}
export const getUsersList = createAsyncThunk(
  'users/getUsersList',
  async (_, { rejectWithValue }) => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
      const users: TypeUser[] = await res.json()
      return users
    } catch (e) {
      return rejectWithValue(e)
    }
  }
)
const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getUsersList.fulfilled, (state, action) => {
      state.users = action.payload
    })
    builder.addCase(getUsersList.rejected, (state, action) => {
      console.error(action.payload)
    })
  },
})

export default usersSlice.reducer
