const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();

// Configuración de la base de datos
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'participacion'
});

db.connect((err) => {
  if (err) {
    console.error('Error de conexión: ', err.stack);
    return;
  }
  console.log('Conexión exitosa a la base de datos');
});

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Ruta para verificar las credenciales del admin
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  
  // Consulta a la base de datos para validar las credenciales
  const query = 'SELECT * FROM usuarios WHERE username = ? AND password = ?';
  
  db.query(query, [username, password], (err, result) => {
    if (err) {
      res.status(500).send('Error al ejecutar la consulta');
      return;
    }
    
    if (result.length > 0) {
      // Si se encuentran resultados, es un login exitoso
      res.json({ success: true, message: 'Bienvenido al panel de administración' });
    } else {
      res.status(401).json({ success: false, message: 'Usuario o contraseña incorrectos' });
    }
  });
});

// Iniciar servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});
