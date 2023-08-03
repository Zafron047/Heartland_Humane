import { configureStore } from '@reduxjs/toolkit';
import homeReducer from './homeReducer/HomeSlice';
import detailReducer from './detailReducer/detailSlice';

const store = configureStore({
  reducer: {
    AllKats: homeReducer.reducer,
    CatBreeds: detailReducer.reducer,
  },
});

export default store;
