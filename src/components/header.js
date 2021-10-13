import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Col, Row, Card } from "react-bootstrap";

const Header = ({ api }) => {
  return (
    // <header>
    //   {api.results.map((pokemon) => (
    //     <div key={pokemon.id}>
    //       <h1>{pokemon.name}</h1>

    //     </div>
    //   ))}
    // </header>
    <Container fluid>
      <Row>
        <Col>
            {api.results.map((pokemon) => (
              <Card>
                <Card.Body>
                  <Card.Title key={pokemon.id}>{pokemon.name}</Card.Title>
                  <Card.Link href={pokemon.url}>{pokemon.url}</Card.Link>
                </Card.Body>
              </Card>
            ))}
        </Col>
      </Row>
    </Container>
  );
};

export default Header;
