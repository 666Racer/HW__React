import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './slices/usersSlice'
import userReducer from './slices/specificUserSlice'
import { loggerMiddleware } from '../services/loggerMiddleware';

const store = configureStore({
  reducer: {users: usersReducer, user: userReducer}, 
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware),
})

export default store;
