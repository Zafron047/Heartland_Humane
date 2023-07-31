import { createSlice } from '@reduxjs/toolkit';

const homeReducer = createSlice({
  name: 'AllKats',
  initialState: {
    array: [0, 1, 2, 3],
  },
  reducers: {},
});

export default homeReducer;
