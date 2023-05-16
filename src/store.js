import { configureStore } from '@reduxjs/toolkit';
import songsReducer from './features/songs/songsSlice'
import artistsReducer from './features/artists/artistsSlice'

export const store = configureStore({
  reducer: {
    songs: songsReducer,
    artists: artistsReducer
  },
});
