import axios from "axios"

const URL = process.env.REACT_APP_API;

const crearProducto = async(nuevoProducto) => {
    try {
        const headers = {
            "Content-Type":"application/json"
        }
        const endpoint = `${URL}/categorias/${nuevoProducto.categoriaId}/productos`
        const { data, status } = await axios.post(endpoint, nuevoProducto, {headers})
        if(status === 201) {
            return data
        }else{    
            throw Error("Error al crear")
        }
    } catch (error) {
        throw error
    }
}

const obtenerProductoPorId = async(idCat, idProducto) => {
    try {
        const endpoint = `${URL}/categorias/${idCat}/productos/${idProducto}`
        const { data, status } = await axios.get(endpoint)
        if(status === 200){
            return data
        }else{
            throw Error("Error al obtener el producto")
        }
    } catch (error) {
        throw error
    }
}

const editarProducto = async (idCat, idProducto, productoEditado) => {
    try {
        const headers = {
            "Content-Type":"application/json"
        }
        const endpoint = `${URL}/categorias/${idCat}/productos/${idProducto}`
        const { data, status } = await axios.put(endpoint, productoEditado, { headers })
        console.log(status)
        if(status === 200){
            return data
        }else{
            return Error("Error al editar producto")
        }
    } catch (error) {
        return error
    }
}

const eliminarProducto = async (idCat, idProducto) => {
    try {
        const endpoint = `${URL}/categorias/${idCat}/productos/${idProducto}`
        const { status } = await axios.delete(endpoint)
        console.log(status)
        if(status === 200){
            return "ok"
        }else{
            return Error("Error al eliminar producto")
        }
    } catch (error) {
        return Error
    }
}

export {
    crearProducto,
    obtenerProductoPorId,
    editarProducto,
    eliminarProducto
}