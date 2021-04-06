const { response} = require('express');

const userGet= (req, res = response) => {
    res.json({
        msg: 'get API - controlador'
    });
}

const userPut = (req, res = response) => {
    
    const {id} = req.params;

    res.json({
        msg: 'put API - controlador',
        id,
    });
}

const userPost = (req, res = response) => {
    
    const {nombre,edad} = req.body;

    res.json({
        msg: 'Post API - controlador',
        nombre,
        edad,
    });
}

const userDelete= (req, res = response) => {
    res.json({
        msg: 'delete API - controlador'
    });
}

module.exports = {
    userGet,
    userPut,
    userPost,
    userDelete,
}