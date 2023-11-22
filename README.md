# Movie API

Movie API es un proyecto que utiliza React para crear una interfaz de usuario que consume una API externa de películas y muestra información sobre ellas, como el título y una información breve de la película

## Descripción del proyecto

Este proyecto tiene como objetivo mostrar cómo se puede utilizar React para crear una aplicación web que se comunica con una API externa y muestra datos dinámicos. La API que se utiliza es [The Movie Database (TMDB)], que ofrece una gran variedad de información sobre películas, series, actores, etc. La aplicación permite buscar películas por título y filtra por género las películas.

## Funcionalidades

- Buscar películas por título, utilizando la API de TMDB.
- Filtrar películas por género, utilizando los parámetros de la API de TMDB.
- Ver los detalles de cada película, como el título y una descripción breve, utilizando la API de TMDB.
- Navegar entre las páginas de resultados, utilizando la paginación de la API de TMDB.
- Mostrar mensajes de error o de vacío cuando no se encuentran resultados o cuando ocurre algún problema con la API.

## Requisitos

- Sistema operativo: Windows, Linux o Mac OS.
- Lenguaje de programación: JavaScript (ES6 o superior).
- Entorno de ejecución: Node.js (v14.0.0 o superior).
- Gestor de paquetes: npm (v6.0.0 o superior) o yarn (v1.0.0 o superior).
- Biblioteca de interfaz de usuario: React (v17.0.0 o superior).
- Biblioteca de peticiones HTTP: Axios (v0.21.0 o superior).

## Instalación

Para instalar el proyecto en el entorno local, se deben seguir los siguientes pasos:

- Clonar el repositorio de GitHub con el comando:

```bash
git clone https://github.com/makihero/movie-app.git
```

- Entrar en el directorio del proyecto con el comando:

```bash
cd movie-app
```

- Instalar las dependencias con el comando:

```bash
npm install
```

o

```bash
yarn install
```

- Crear un archivo .env en la raíz del proyecto y añadir la variable REACT_APP_API_KEY con el valor de la clave de la API de TMDB, que se puede obtener registrándose en [su página web]. El archivo .env debe tener el siguiente contenido:

```bash
REACT_APP_API_KEY=your_api_key
```

- Iniciar el servidor de desarrollo con el comando:

```bash
npm start
```

o

```bash
yarn start
```

- Abrir el navegador y acceder a la dirección http://localhost:3000 para ver la aplicación.

## Uso

Para utilizar la aplicación, se pueden seguir los siguientes pasos:

- Escribir el título de la película que se desea buscar en el campo de texto y pulsar el botón de buscar.
- Seleccionar el género de las películas que se desea filtrar en el menú desplegable.
- Seleccionar el criterio de ordenación de las películas en el menú desplegable.
- Hacer clic en el botón de atrás del navegador o en el botón de volver para regresar a la página de resultados.
- Hacer clic en los botones de siguiente o anterior para navegar entre las páginas de resultados.
