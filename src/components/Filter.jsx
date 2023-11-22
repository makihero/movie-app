// src/components/Filter.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

// Componente funcional Filter que permite al usuario filtrar películas por género
const Filter = ({ onFilter }) => {
  // Estado local para almacenar la lista de géneros y el género seleccionado
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState('');

  // Efecto secundario para cargar la lista de géneros al montar el componente
  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const apiKey = '68c2e8775e468b4794b0dfdf0fc85dbe';
        const baseUrl = 'https://api.themoviedb.org/3';
        const endpoint = '/genre/movie/list';
        const params = {
          api_key: apiKey,
        };

        // Realizar la llamada a la API para obtener la lista de géneros
        const response = await axios.get(`${baseUrl}${endpoint}`, { params });
        setGenres(response.data.genres);
      } catch (error) {
        // Manejar errores en la consola en caso de fallo en la llamada a la API
        console.error('Error al cargar géneros:', error);
      }
    };

    // Llamar a la función fetchGenres al montar el componente
    fetchGenres();
  }, []);

  // Función para manejar el cambio de género y llamar a la función proporcionada como prop
  const handleGenreChange = (event) => {
    const genreId = event.target.value;
    setSelectedGenre(genreId);
    onFilter(genreId);
  };

  // Renderizar el componente Filter con un menú desplegable de géneros
  return (
    <div className="filter">
      <label htmlFor="genre">Género: </label>
      {/* Menú desplegable para seleccionar el género */}
      <select id="genre" onChange={handleGenreChange} value={selectedGenre}>
        <option value="">Todos</option>
        {/* Mapear y renderizar las opciones del menú desde la lista de géneros */}
        {genres.map((genre) => (
          <option key={genre.id} value={genre.id}>
            {genre.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter; // Exportar el componente Filter
