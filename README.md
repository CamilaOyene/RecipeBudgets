# RecipeBudgets

RecipeBudgets es una aplicación diseñada para facilitar la tarea de cálculo de presupuestos para profesionales culinarios al almacenar información sobre ingredientes y sus precios en una base de datos. Esto permite que se generen presupuestos automáticamente cuando se utilizan estos ingredientes en recetas posteriores.

## Características Principales

- Guardar recetas con detalles sobre ingredientes y sus precios.
- Actualizar precios de ingredientes según sea necesario.
- Generar automáticamente presupuestos al planificar nuevas recetas.
- Modificar presupuestos en respuesta a cambios en costos, como costos de insumos o mano de obra.

## Tecnologías Utilizadas

- Node.js
- Express.js
- React
- MongoDB
- Mongoose
- JWT

## Instrucciones de Instalación

### API (Backend)

1. En la carpeta `Api`, ejecuta `npm install` para instalar las dependencias.
2. Ejecuta `npm run dev` para iniciar el servidor de la API.

### Cliente (Frontend)

1. En la carpeta `Client`, ejecuta `npm install` para instalar las dependencias.
2. Ejecuta `npm run dev` para iniciar la aplicación cliente.

## Configuración de la Base de Datos

Asegúrate de tener MongoDB instalado y crea una base de datos llamada `recipe-budgets`.

## Instrucciones de Uso

- La aplicación consta de dos partes: la API (backend) y el cliente (frontend).
- Accede al servidor de la API mediante `http://localhost:3001`.
- Accede al cliente en modo desarrollo en el puerto especificado (no necesariamente 3000).

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
