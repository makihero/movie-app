// src/components/Search.js
import React, { useState } from 'react';

// Componente funcional Search que permite al usuario realizar búsquedas
const Search = ({ onSearch }) => {
  // Estado local para almacenar la cadena de búsqueda
  const [query, setQuery] = useState('');

  // Función para manejar la búsqueda y llamar a la función proporcionada como prop
  const handleSearch = () => {
    onSearch(query);
  };

  // Renderizar el componente de búsqueda con un campo de entrada y un botón
  return (
    <div className="search">
      {/* Campo de entrada controlado por el estado local 'query' */}
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
      
      {/* Botón para iniciar la búsqueda al hacer clic */}
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};

export default Search; // Exportar el componente Search
