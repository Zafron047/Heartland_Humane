import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import urlAPI from '../../components/API';

export const fetchKatBreeds = createAsyncThunk('fetch Kat Breeds from API',
  async () => {
    const response = await axios.get(urlAPI);
    return response.data;
  });

const homeReducer = createSlice({
  name: 'AllKats',
  initialState: {
    breedList: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchKatBreeds.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchKatBreeds.fulfilled, (state, action) => {
        state.loading = false;
        state.breedList = action.payload.map((eachKat) => ({
          id: eachKat.id,
          name: eachKat.name,
          origin: eachKat.origin,
          imperial: eachKat.weight.imperial,
        }));
      })
      .addCase(fetchKatBreeds.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});

export default homeReducer;
