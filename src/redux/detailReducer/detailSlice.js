import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { breedURL } from '../../components/API';

export const fetchBreed = createAsyncThunk('Fetch/CatBreeds', async () => {
  const response = await axios.get(breedURL);
  return response.data;
});

const detailReducer = createSlice({
  name: 'CatBreeds',
  initialState: {
    breedData: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBreed.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBreed.fulfilled, (state, action) => {
        state.loading = false;
        state.breedData = action.payload.map((breed) => ({
          id: breed.id,
          url: breed.url,
          name: breed.breeds[0].name,
          life_span: breed.breeds[0].life_span,
          adaptability: breed.breeds[0].adaptability,
          affection_level: breed.breeds[0].affection_level,
          energy_level: breed.breeds[0].energy_level,
          health_issues: breed.breeds[0].health_issues,
          intelligence: breed.breeds[0].intelligence,
        }));
      })
      .addCase(fetchBreed.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error;
      });
  },
});

export default detailReducer;
