import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <Container className='p-3'>
        <Container className='p-5 mb-4 bg-light rounded-3 text-center'>
          <h1 className='header'>Welcome to the Song App</h1>
          <br />
          <Card className='text-center'>
            <Card.Header>Featured</Card.Header>
            <Card.Body>
              <Card.Title>View list of all Songs!</Card.Title>
              <Card.Text>Rich list of all popular songs...</Card.Text>
              <Link to='/songs'>Songs</Link>
            </Card.Body>
            <Card.Footer className='text-muted'>2 days ago</Card.Footer>
          </Card>
          <hr />
          <Card className='text-center'>
            <Card.Header>Featured</Card.Header>
            <Card.Body>
              <Card.Title>View list of all popular Artists</Card.Title>
              <Card.Text>Artists from all genres and every flavor</Card.Text>
              <Link to='/artists'>Artists</Link>
            </Card.Body>
            <Card.Footer className='text-muted'>2 days ago</Card.Footer>
          </Card>
        </Container>
      </Container>
    </>
  );
};

export default Home;
