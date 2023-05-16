import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <Container className='p-5 text-center'>
        <Card>
          <Card.Body>
            <Card.Title>Error 404</Card.Title>
            <Card.Text>You've likely mistyped the URL</Card.Text>
            <Link to='/' variant='primary'>
              Go to home page
            </Link>
          </Card.Body>
        </Card>
    </Container>
  );
};

export default Error;
