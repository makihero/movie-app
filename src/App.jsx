// src/App.js
import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "./components/Card";
import Pagination from "./components/Pagination";
import Search from "./components/Search";
import Filter from "./components/Filter";
import Navbar from "./components/Navbar";

// Definición del componente principal
const App = () => {
  // Estados locales utilizando React Hooks
  const [movies, setMovies] = useState([]); // Almacena la lista de películas
  const [currentPage, setCurrentPage] = useState(1); // Almacena la página actual
  const [totalPages, setTotalPages] = useState(1); // Almacena el total de páginas
  const [searchQuery, setSearchQuery] = useState(''); // Almacena la cadena de búsqueda
  const [selectedGenre, setSelectedGenre] = useState(''); // Almacena el género seleccionado

  // Efecto secundario para cargar datos desde la API cuando cambian las dependencias
  useEffect(() => {
    // Función asincrónica para realizar la llamada a la API
    const fetchData = async () => {
      try {
        const apiKey = '68c2e8775e468b4794b0dfdf0fc85dbe';
        const baseUrl = 'https://api.themoviedb.org/3';
        let endpoint = '/discover/movie';

        // Modificar el endpoint si hay una cadena de búsqueda
        if (searchQuery) {
          endpoint = '/search/movie';
        }

        // Parámetros para la llamada a la API
        const params = {
          api_key: apiKey,
          page: currentPage,
          query: searchQuery,
          with_genres: selectedGenre,
        };

        // Realizar la llamada a la API utilizando Axios
        const response = await axios.get(`${baseUrl}${endpoint}`, { params });

        // Actualizar el estado con los resultados de la llamada
        setMovies(response.data.results);
        setTotalPages(response.data.total_pages);
      } catch (error) {
        // Manejar errores en la consola en caso de fallo en la llamada a la API
        console.error('Error al cargar datos:', error);
      }
    };

    // Llamar a la función fetchData al montar el componente y cuando cambien las dependencias
    fetchData();
  }, [currentPage, searchQuery, selectedGenre]);

  // Función para manejar el cambio de página
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  // Función para manejar la búsqueda de películas
  const handleSearch = (query) => {
    // Actualizar la cadena de búsqueda y resetear la página a 1
    setSearchQuery(query);
    setCurrentPage(1);
  };

  // Función para manejar el filtro por género
  const handleFilter = (genre) => {
    // Actualizar el género seleccionado y resetear la página a 1
    setSelectedGenre(genre);
    setCurrentPage(1);
  };

  // Renderizar el componente principal
  return (
    <div className="app">
      <div className="buscar">
        {/* Barra de navegación */}
        <Navbar />
        {/* Componente de búsqueda */}
        <Search onSearch={handleSearch} />
        {/* Componente de filtro por género */}
        <Filter onFilter={handleFilter} />
      </div>
      {/* Mapear y renderizar las tarjetas de películas */}
      {movies.map((movie) => (
        <Card key={movie.id} movie={movie} />
      ))}
      {/* Componente de paginación */}
      <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
    </div>
  );
};

// Exportar el componente principal
export default App;