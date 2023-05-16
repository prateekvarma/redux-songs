import { useParams } from 'react-router-dom';
import ListGroup from 'react-bootstrap/ListGroup';
import { useSelector } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import Card from 'react-bootstrap/Card';
import Alert from 'react-bootstrap/Alert';

const Song = () => {
  const { songId } = useParams();
  const status = useSelector((store) => store.songs.status);
  const songs = useSelector((store) => store.songs.allSongs);
  const song = songs.find((song) => song.id === parseInt(songId));

  if (!song) {
    return (
      <Container className='p-5'>
        <h1>Song not found!</h1>
      </Container>
    );
  }

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
      <Card bg='dark' text='white' className='mb-2'>
        <Card.Header>{song?.title}</Card.Header>

        {song && (
          <ListGroup className='list-group-flush'>
            <ListGroup.Item>ID:{song.id} </ListGroup.Item>
            <ListGroup.Item>Genre: {song.genre}</ListGroup.Item>
            <ListGroup.Item>Duration: {song.duration}</ListGroup.Item>
            <ListGroup.Item>Main Artist: {song.artistId}</ListGroup.Item>
            <ListGroup.Item>
              Audio Language: {song.audioLanguage}
            </ListGroup.Item>
          </ListGroup>
        )}
      </Card>
    </Container>
  );
};

export default Song;
