import { useState } from "react"
import { crearCategoria } from "../services/categoriasService"
import { useNavigate } from "react-router-dom"
import Swal from "sweetalert2"

export default function CrearCategoriaView() {
  const [inputs, setInputs] = useState({
    cat_nom:"",
    cat_des:""
  })

  const navigate = useNavigate() //es cp,p un new Navigate()

  const manejarInput = (e) => {
    console.log(e)
    // console.log("NAME",e.target.name)
    // console.log("VALUE",e.target.value)
    setInputs({
      ...inputs,
      //e.target.name => "cat_nom"
      [e.target.name]:e.target.value
    })
  }

  const existeErrorInputs = () => {
    if(inputs.cat_nom.trim() === "" || 
    inputs.cat_des.trim() === ""  ){
      //si alguno de los inputs quitandoles los espacios no tiene nada de texto retornare true
      //Si se ejecuta un return ahí finaliza la función
      return true
    }
    return false
  }
  const manejarSubmit = async (e) => {
    e.preventDefault();
    try {
      await crearCategoria(inputs)
      // alert("Categoria Creada")
      Swal.fire({
        icon:"success",
        title:"Categoria Creada!"
      })
      navigate('/')//llevame hacia el home, hacia la url /
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className="card mt-3">
        <div className="card-body">
          <h4 className="card-title">Crear Categoria</h4>
       
        <form onSubmit={(e) => {manejarSubmit(e)}}>
            <div className="mb-3">
                <label className="form-label">
                    Nombre categoria
                </label>
                <input 
                    className="form-control"
                    type="text"
                    placeholder="Cosméticos"
                    name="cat_nom"
                    value={inputs.cat_nom}
                    onChange={(e) => {manejarInput(e)}}
                />
            </div>
            <div className="mb-3">
                <label className="form-label">
                    Descripción categoria
                </label>
                <input 
                    className="form-control"
                    type="text"
                    placeholder="Indique una descripción larga de la categoria"
                    name="cat_des"
                    value={inputs.cat_des}
                    onChange={(e) => {manejarInput(e)}}
                />
            </div>
            <button type="submit" className="btn btn-primary" disabled={existeErrorInputs()}>
              Guardar
            </button>
        </form>
        </div>
      </div>
    </>
  )
}