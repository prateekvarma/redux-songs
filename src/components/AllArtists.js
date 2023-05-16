import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllArtists } from '../features/artists/artistsSlice';

import Container from 'react-bootstrap/Container';
import Spinner from 'react-bootstrap/Spinner';
import Table from 'react-bootstrap/Table';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';

const AllArtists = () => {
  const dispatch = useDispatch();
  const status = useSelector((store) => store.artists.status);
  const artists = useSelector((store) => store.artists.allArtists);
  const [checkedIds, setCheckedIds] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getAllArtists());
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

  const handleChange = (e) => {
    const id = e.target.id;
    if (checkedIds.includes(id)) {
      setCheckedIds(checkedIds.filter((i) => i !== id));
    } else {
      setCheckedIds([...checkedIds, id]);
    }
  };

  const handleButtonSubmit = () => {
    const contructedUrl = `/artists/byIds?ids=${checkedIds.join(',')}`;
    navigate(contructedUrl);
  };

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
            <th>Name</th>
            <th>Select</th>
          </tr>
        </thead>
        <tbody>
          {artists.length > 0 &&
            artists.map((artist) => {
              return (
                <tr key={artist.id}>
                  <td>{artist.id}</td>
                  <td>{artist.name}</td>
                  <td>
                    <input
                      type='checkbox'
                      id={artist.id}
                      onChange={handleChange}
                    />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
      {checkedIds.length > 0 && (
        <div>
          <Alert key='dark' variant='dark'>
            <Alert.Heading>Selected Ids:</Alert.Heading>
            <p>{checkedIds.join(', ')}</p>
          </Alert>
          <Button onClick={handleButtonSubmit} variant='dark'>
            Get Selected Artists
          </Button>
        </div>
      )}
    </Container>
  );
};

export default AllArtists;
