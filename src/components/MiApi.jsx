import { useState, useEffect } from "react";
import { Button, Card, Container, Spinner } from "react-bootstrap";
import { fetchCountries } from "../services/api";
import Buscador from "./Buscador";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaInfoCircle } from "react-icons/fa";

function MiApi() {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchCountries()
      .then((result) => {
        setCountries(result);
        setFilteredCountries(result);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error al obtener datos de la API", error);
      });
  }, []);

  const handleSort = () => {
    const sortedCountries = [...filteredCountries];
    sortedCountries.sort((a, b) => a.name.common.localeCompare(b.name.common));
    setFilteredCountries(sortedCountries);
  };

  return (
    <Container className="my-4">
      <h2 className="mb-3">Lista de Países</h2>
      <Button variant="primary" onClick={handleSort}>
        Ordenar Alfabeticamente
      </Button>
      <Buscador
        countries={countries}
        setFilteredCountries={setFilteredCountries}
      />
      {isLoading ? (
        <Spinner animation="border" role="status" className="mt-3">
          <span className="sr-only">Cargando...</span>
        </Spinner>
      ) : (
        <Card className="mt-3">
          <Card.Body>
            <ul className="list-group">
              {filteredCountries.map((country, index) => (
                <li
                  className="list-group-item d-flex justify-content-between align-items-center"
                  key={index}
                >
                  {country.name.common}
                  <FaInfoCircle
                    style={{ cursor: "pointer" }}
                    data-toggle="tooltip"
                    title={`Población: ${country.population}`}
                  />
                </li>
              ))}
            </ul>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
}

export default MiApi;
