const { response } = require('express');

const User = require('../models/usuario');

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

const userPost = async (req, res = response) => {
    
    const body = req.body;
    const user = new User(body);
    await user.save();

    res.json({
        user,
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