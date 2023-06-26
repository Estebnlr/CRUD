//peticiones - axios
import axios from "axios";

const URL = "https://628302ed92a6a5e4621c974e.mockapi.io/categorias";

const obtenerCategorias = () => {
    return new Promise ((resolve, reject) => {
        axios.get(URL)
        .then(({data, status}) => {

            if(status === 200){
                resolve(data)
            }else{
                reject("Error al obtener data")
            }
        })
        .catch((error) => {
            reject(error)
        })
    })
}

const crearCategoria = async (nuevaCategoria) => {
    try {
        const headers = {
            "Content-Type":"application/json"
        }

        const { data, status } = await axios.post(URL, nuevaCategoria, {headers})
        console.log(status)
        if(status === 201){
            return data
        }else{
            throw "Error al obtener data"
        }
    } catch (error) {
        throw error
    }
}

export {
    obtenerCategorias,
    crearCategoria
}