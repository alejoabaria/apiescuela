require('dotenv').config();
const express = require('express');
const app = express();
const sequelize = require('./config/db'); 
const routes = require('./routes/routes'); 

app.use(express.json());
app.use('/api', routes);

sequelize.authenticate()
  .then(() => console.log('Conexión a la base de datos exitosa'))
  .catch(error => console.error('Error en la conexión a la base de datos:', error));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
