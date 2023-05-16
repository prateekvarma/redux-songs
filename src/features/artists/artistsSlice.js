import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'http://localhost:3001/artists';

const initialState = {
  allArtists: [],
  status: 'idle',
};

export const getAllArtists = createAsyncThunk('artists/fetchArtists', async () => {
  const response = await fetch(url)
  const data = await response.json()
  return data
});

const artistsSlice = createSlice({
  name: 'artists',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getAllArtists.pending, (state) => {
      state.status = 'loading'
    })
    .addCase(getAllArtists.fulfilled, (state, action) => {
      state.status = 'success',
      state.allArtists = action.payload
    })
    .addCase(getAllArtists.rejected, (state) => {
      state.status = 'failed'
    })
  }
});

export default artistsSlice.reducer;
