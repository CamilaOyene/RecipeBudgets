# RecipeBudgets

RecipeBudgets es una aplicación diseñada para facilitar a los trabajadores gastronómicos la tarea de calcular presupuestos en base a recetas. La idea principal es agilizar el proceso al almacenar información sobre los ingredientes y sus precios en una base de datos, permitiendo que los presupuestos se generen automáticamente cuando se utilizan esos ingredientes en recetas posteriores.

## Características Principales

- Guardar recetas con detalles sobre ingredientes y sus precios.
- Actualizar precios de ingredientes según sea necesario.
- Generar automáticamente presupuestos al planificar nuevas recetas.
- Modificar presupuestos en respuesta a cambios en los costos, como costos laborales.

## Tecnologías Utilizadas

- Node.js
- React
- PostgreSQL

## Instrucciones de Instalación

### API (Backend)

1. En la carpeta `Api`, ejecuta `npm install` para instalar las dependencias.
2. Ejecuta `npm start` para iniciar el servidor de la API.

### Cliente (Frontend)

1. En la carpeta `Client`, ejecuta `npm install` para instalar las dependencias.
2. Ejecuta `npm run dev` para iniciar la aplicación cliente.

## Configuración de la Base de Datos

Asegúrate de tener PostgreSQL instalado y crea una base de datos llamada `recipeBudgets`.

## Instrucciones de Uso

- La aplicación consta de dos partes: la API (backend) y el cliente (frontend).
- Accede al servidor API mediante `http://localhost:3001`.
- Accede al cliente en desarrollo mediante el puerto especificado (no necesariamente 3000).

## Estructura del Proyecto

El repositorio consta de dos carpetas principales:
- `Api`: Contiene el código del backend.
- `Client`: Contiene el código del frontend.

## Contribuciones

Los desarrolladores pueden contribuir al proyecto mediante la presentación de pull requests detalladas o issues.

## Licencia

No especificada.

## Estado del Proyecto

El proyecto se encuentra actualmente en desarrollo.
