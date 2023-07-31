import { configureStore } from '@reduxjs/toolkit';
import homeReducer from './homeReducer/HomeSlice';

const store = configureStore({
  reducer: { AllKats: homeReducer.reducer },
});

export default store;
