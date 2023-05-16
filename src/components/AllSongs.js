import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAllSongs } from '../features/songs/songsSlice';

import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert';
import Spinner from 'react-bootstrap/Spinner';
import Table from 'react-bootstrap/Table';

const AllSongs = () => {
  const dispatch = useDispatch();
  const status = useSelector((store) => store.songs.status);
  const songs = useSelector((store) => store.songs.allSongs);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getAllSongs());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return (
      <Container className='p-5'>
        <Spinner animation='border' role='status'>
          <span className='visually-hidden'>Loading...</span>
        </Spinner>
      </Container>
    );
  }

  if (status === 'failed') {
    return (
      <Alert key='danger' variant='danger'>
        Failed to get data from backend. Please check if you're running this
        command on another terminal window: json-server --watch database/db.json
        --port 3001
      </Alert>
    );
  }

  return (
    <Container className='p-5'>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#ID</th>
            <th>Title</th>
            <th>Main Artist</th>
          </tr>
        </thead>
        <tbody>
          {songs.length > 0 &&
            songs.map((song) => {
              return (
                <tr key={song.id}>
                  <td>{song.id}</td>
                  <td>
                    <Link to={`/songs/${song.id}`}>{song.title}</Link>
                  </td>
                  <td>{song.artistId}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </Container>
  );
};

export default AllSongs;
