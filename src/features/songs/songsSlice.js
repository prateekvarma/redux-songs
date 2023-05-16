import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'http://localhost:3001/songs';

const initialState = {
  allSongs: [],
  status: 'idle',
};

export const getAllSongs = createAsyncThunk('songs/fetchSongs', async () => {
  const response = await fetch(url)
  const data = await response.json()
  return data
});

const songsSlice = createSlice({
  name: 'songs',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(getAllSongs.pending, (state) => {
      state.status = 'loading'
    })
    .addCase(getAllSongs.fulfilled, (state, action) => {
      state.status = 'success',
      state.allSongs = action.payload
    })
    .addCase(getAllSongs.rejected, (state) => {
      state.status = 'failed'
    })
  }
});

//console.log(songsSlice);

export default songsSlice.reducer;
