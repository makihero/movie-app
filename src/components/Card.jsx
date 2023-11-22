// src/components/Card.js
// Componente funcional Card que recibe la información de una película como prop
const Card = ({ movie }) => {
  // Construir la URL del póster de la película o usar un marcador de posición si no hay póster
  const posterUrl = movie.poster_path
    ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
    : 'https://via.placeholder.com/150';

  // Función para truncar el texto a una longitud máxima
  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + '...'; // Si el texto es más largo, truncarlo y añadir puntos suspensivos
    }
    return text; // Si no, devolver el texto completo
  };

  // Renderizar la tarjeta con la información de la película
  return (
    <div className="card">
      <img src={posterUrl} alt={movie.title} /> {/* Mostrar la imagen del póster o el marcador de posición */}
      <h2>{movie.title}</h2> {/* Mostrar el título de la película */}
      <p>{truncateText(movie.overview, 70)}</p> {/* Mostrar una descripción truncada de la película */}
    </div>
  );
};

export default Card; // Exportar el componente Card