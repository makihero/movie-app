// src/components/Pagination.js
import React from 'react';

// Componente funcional Pagination que muestra botones para navegar entre páginas
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="pagination">
      {/* Botón para ir a la página anterior, deshabilitado si ya está en la primera página */}
      <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
        Anterior
      </button>
      
      {/* Mostrar el número de la página actual y el total de páginas */}
      <span>{`Página ${currentPage} de ${totalPages}`}</span>
      
      {/* Botón para ir a la página siguiente, deshabilitado si ya está en la última página */}
      <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        Siguiente
      </button>
    </div>
  );
};

export default Pagination; // Exportar el componente Pagination