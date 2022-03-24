const { response } = require ('express')


const usuariosGet = (req, res = response ) => {

    const {q, nombre} = req.query
    res.json({
        msg: 'get Api -controller',
        q,
        nombre
    })
}

const usuariosPut =   (req, res = response ) => {

    const { id } = req.params

    res.json({
        msg: 'put Api -controller',
        id
    }) 
}    
const usuariosPost =   (req, res = response) => {
   
   const { nombre, edad} = req.body
   
    res.status(201).json({
        msg: 'post Api -controller',
        nombre,
        edad
    }) 
}    

const usuariosDelete = (req, res = response) => {
    res.json({
        msg: 'delete Api -controller'
    })
}  

module.exports = {usuariosGet,
usuariosPut,
usuariosPost,
usuariosDelete}