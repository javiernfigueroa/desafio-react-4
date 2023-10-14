import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import MiApi from "./components/MiApi";

function App() {
  return (
    <Container>
      <Row className="mt-5">
        <Col>
          <h1>Bienvenido a la Página de Países</h1>
          <p>
            Explora la lista de países, busca tu pais favorito, ordénalos
            alfabeticamente y consulta su poblacion usando el icono de
            informacion.
          </p>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <Card>
            <Card.Body>
              <MiApi />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
