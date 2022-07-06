import { useDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './modules/rootReducer'

export const store = configureStore({
  reducer: rootReducer,
})

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();