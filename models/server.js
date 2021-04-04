const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosRoute = '/api/usuarios';

        this.middlewares();
        this.routes();
    }

    middlewares() {
        
        //cors
        this.app.use(cors());

        //Lectura y pasero del body

        this.app.use(express.json());
        
        // Directorio público
        this.app.use(express.static('public'));
    }

    routes() {
        
        this.app.use(this.usuariosRoute, require('../routes/user'));
    }

    listen() {
        
        this.app.listen(this.port);
    }

}

module.exports = Server;