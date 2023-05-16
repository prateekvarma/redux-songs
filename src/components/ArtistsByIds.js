import { useSearchParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import Table from 'react-bootstrap/Table';
import Alert from 'react-bootstrap/Alert';

const ArtistsByIds = () => {
  const [searchParams] = useSearchParams();
  const extractedIds = searchParams.getAll('ids');
  const ids = extractedIds[0].split(',').map(Number);

  const status = useSelector((store) => store.artists.status);
  const artists = useSelector((store) => store.artists.allArtists);
  const filtered_artists = artists.filter((item) => {
    return ids.includes(item.id);
  });

  if (!filtered_artists) {
    return (
      <Container className='p-5'>
        <h1>Artists not found!</h1>
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

  if(status === 'failed') {
    return (
      <Alert key='danger' variant='danger'>
          Failed to get data from backend. Please check if you're running this command on another terminal window: json-server --watch database/db.json --port 3001
        </Alert>
    )
  }

  return (
    <Container className='p-5'>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#ID</th>
            <th>Main Artist</th>
          </tr>
        </thead>
        <tbody>
          {filtered_artists.length > 0 &&
            filtered_artists.map((artist) => {
              return (
                <tr key={artist.id}>
                  <td>{artist.id}</td>
                  <td>{artist.name}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </Container>
  );
};

export default ArtistsByIds;
