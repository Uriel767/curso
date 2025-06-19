const mongoose = require('mongoose');
require('dotenv').config({ path: 'variables.env' });

const conectarDB = async () => {
    try {
        // Conexión a la base de datos MongoDB
        await mongoose.connect(process.env.DB_MONGO);
        console.log('Base de datos conectada correctamente');
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error.message);
        process.exit(1); // Detenemos la app si la conexión falla
    }
}

module.exports = conectarDB;