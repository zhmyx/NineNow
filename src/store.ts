import { configureStore } from '@reduxjs/toolkit';
import CategoryReducer from './reducers/categoryReducer';

// This creates a Redux store, and also automatically configure the Redux DevTools extension so that you can inspect the store while developing.

export const store = configureStore({
  reducer: {
    category: CategoryReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
