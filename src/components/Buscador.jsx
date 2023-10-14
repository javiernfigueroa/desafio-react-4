import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { InputGroup, FormControl } from "react-bootstrap";

function Buscador({ countries, setFilteredCountries }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchTerm(query);

    const filtered = countries.filter((country) =>
      country.name.common.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredCountries(filtered);
  };

  return (
    <InputGroup className="my-3">
      <FormControl
        placeholder="Buscar país por nombre"
        value={searchTerm}
        onChange={handleSearch}
      />
    </InputGroup>
  );
}

export default Buscador;
