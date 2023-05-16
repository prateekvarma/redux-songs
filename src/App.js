import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navigationbar from './components/Navigationbar';
import Home from './components/Home';
import AllSongs from './components/AllSongs';
import AllArtists from './components/AllArtists';
import Error from './components/Error';
import Song from './components/Song';
import ArtistsByIds from './components/ArtistsByIds';

function App() {
  return (
    <BrowserRouter>
      <Navigationbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/songs' element={<AllSongs />} />
        <Route path='/songs/:songId' element={<Song />} />
        <Route path='/artists' element={<AllArtists />} />
        <Route path='/artists/byIds' element={<ArtistsByIds />} />
        <Route path='*' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
