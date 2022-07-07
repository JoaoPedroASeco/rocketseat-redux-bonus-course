import { useDispatch } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'
import rootReducer from './modules/rootReducer'
import createSagaMiddleware from '@redux-saga/core'
import rootSaga from './modules/rootSaga';

const sagaMiddleware = createSagaMiddleware()

const middlewares = [sagaMiddleware]

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(...middlewares),
})

sagaMiddleware.run(rootSaga)

export type AppDispatch = typeof store.dispatch;

export type RootState = ReturnType<typeof store.getState>;

export const useAppDispatch = () => useDispatch<AppDispatch>();