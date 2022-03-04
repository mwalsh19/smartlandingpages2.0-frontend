import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import landingPagesReducer from '../reducers/landingpages';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    landingpages: landingPagesReducer
  },
});