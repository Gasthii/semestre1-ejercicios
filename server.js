const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT ?? 3000;

// Servir archivos estáticos
app.use(express.static(path.join(__dirname)));

// Ruta para servir el archivo HTML principal
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// Rutas para manejar los ejercicios
app.get('/ejercicio-1', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'ejercicio-1.html'));
});

app.get('/ejercicio-2', (req, res) => {
  res.sendFile(path.join(__dirname, 'pages', 'ejercicio-2.html'));
});


app.get('/ejercicio-3', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'ejercicio-3.html'));
  });

app.get('/ejercicio-4', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'ejercicio-4.html'));
  });

app.get('/ejercicio-5', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'ejercicio-5.html'));
  });


app.get('/ejercicio-6', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'ejercicio-6.html'));
  });

app.get('/ejercicio-7', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'ejercicio-7.html'));
  });

app.get('/ejercicio-8', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'ejercicio-8.html'));
  });

  app.get('/ejercicio-9', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'ejercicio-9.html'));
  });

  app.get('/ejercicio-10', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'ejercicio-10.html'));
  });

  app.get('/pokeapi', (req, res) => {
    res.sendFile(path.join(__dirname, 'pages', 'pokeapi.html'));
  });



app.use((req, res) => {
  res.status(404).send('Página no encontrada');
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
