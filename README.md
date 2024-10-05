Claro, aquí tienes un ejemplo de documentación en español para tu aplicación en Nuxt.js:

---

# Documentación de la Aplicación Nuxt.js

## Descripción General

Esta aplicación en Nuxt.js está diseñada para gestionar y promover la interacción con vendedores mediante una serie de características clave. Incluye administración de vendedores, búsqueda y selección de imágenes, votación de imágenes, clasificación de vendedores, y opciones para reclamar premios. Además, se integra con las APIs de Alegra y Pexels.

## Características

### 1. **Administración Básica de Vendedores**
   - **Listar Vendedores**: Permite ver una lista de todos los vendedores registrados en la aplicación.
   - **Crear Vendedores**: Permite agregar nuevos vendedores a la base de datos.

### 2. **Buscador y Selector de Imágenes para Cada Vendedor**
   - **Búsqueda de Imágenes**: Utiliza la API de Pexels para buscar imágenes que los vendedores pueden seleccionar para su perfil.
   - **Selección de Imágenes**: Permite a los vendedores seleccionar imágenes de la búsqueda para asociarlas a su perfil.

### 3. **Página de Votación de Imágenes al Estilo Tinder**
   - **Interfaz de Votación**: Permite a los usuarios votar por imágenes de manera similar a la funcionalidad de Tinder, deslizando para indicar interés o desinterés en cada imagen.

### 4. **Página de Ranking con la Lista de los Vendedores con Más Likes**
   - **Ranking de Vendedores**: Muestra una lista de los vendedores que han recibido la mayor cantidad de likes, ordenados de mayor a menor.

### 5. **Opción de Reclamar Premio para los Vendedores con 20 Votos o Más**
   - **Reclamar Premio**: Permite a los vendedores que han recibido 20 o más votos reclamar un premio. La opción de reclamar el premio está disponible solo para los vendedores que cumplen con este criterio.

### 6. **Integración con APIs**
   - **API de Alegra**: Utilizada para gestionar información relacionada con los vendedores y sus premios.
   - **API de Pexels**: Utilizada para la búsqueda y selección de imágenes.

## Instalación y Configuración

1. **Clonación del Repositorio**
   ```bash
   git clone https://github.com/mrmind3312/world-images.git
   cd world-images
   ```

2. **Instalación de Dependencias**
   ```bash
   yarn install
   ```

3. **Configuración del Entorno**
   - Crea un archivo `.env` en la raíz del proyecto y añade las siguientes variables de entorno:
     ```bash
     ALEGRA_API_KEY=<TU_API_KEY_DE_ALEGRA>
     ALEGRA_API_EMAIL=<TU_EMAIL_DE_ALEGRA>
     ALEGRA_API_URL=https://api.alegra.com/api/v1/
     PEXELS_API_KEY=<TU_API_KEY_DE_PEXELS>
     ```

4. **Ejecución de la Aplicación**
   ```bash
   yarn dev
   ```

   La aplicación estará disponible en `http://localhost:3000`.

## Uso

### Administración de Vendedores

- **Listar Vendedores**: Navega a la página de administración para ver todos los vendedores.
- **Crear Vendedores**: Utiliza el formulario en la página de administración para agregar nuevos vendedores.

### Buscador y Selector de Imágenes

- **Buscar Imágenes**: Utiliza el buscador para encontrar imágenes en Pexels.
- **Seleccionar Imágenes**: Elige imágenes de los resultados de búsqueda y asócialas al perfil del vendedor.

### Votación de Imágenes

- **Votar**: Desliza las imágenes para votar, al estilo de Tinder. Los votos se registran automáticamente.

### Página de Ranking

- **Ver Ranking**: Consulta la página de ranking para ver los vendedores con más likes. Los vendedores están ordenados por la cantidad de likes recibidos.

### Reclamar Premio

- **Reclamar Premio**: Los vendedores con 20 o más votos pueden reclamar su premio desde su perfil.

## Integración con APIs

- **Alegra API**: Utilizada para operaciones relacionadas con la gestión de vendedores y premios. Asegúrate de que las credenciales están configuradas en el archivo `.env`.
- **Pexels API**: Utilizada para la búsqueda de imágenes. Las credenciales deben estar configuradas en el archivo `.env`.

## Contribución

Si deseas contribuir a este proyecto, por favor sigue estos pasos:

1. Haz un fork del repositorio.
2. Crea una nueva rama (`git checkout -b nombre-de-la-rama`).
3. Realiza tus cambios.
4. Envía un pull request.

## Licencia

Este proyecto está licenciado bajo la Licencia MIT.
