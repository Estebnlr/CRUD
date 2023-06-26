import { useState, useEffect } from "react"
import { obtenerCategorias } from "../services/categoriasService"
import { Link } from "react-router-dom"
import { eliminarProducto } from "../services/productosService"
import Swal from "sweetalert2"

export default function ProductosView() {

  const [productos, setProductos] = useState([])

  const deleteProducto = async (idCat, idProducto) => {
    try {
      const resultado = await Swal.fire({
        title: 'Desea eliminar este Producto',
        showCancelButton: true,
        confirmButtonText: 'Si, eliminar',
        cancelButtonText: `No, cancelar`,
      })
      if(resultado.isConfirmed){
        await eliminarProducto(idCat, idProducto)
        Swal.fire({
          title:"Producto eliminado",
          icon:"success"
        })
        getCategorias()
      }
    } catch (error) {
      console.log(error)
    }
  }

  const getCategorias = async () => {
    try {
      const categorias = await obtenerCategorias()

      const catFiltradas = categorias.filter((cat) => cat.productos.length > 0)

      const arrProductos = catFiltradas.map((cat) => cat.productos).flat()
      setProductos(arrProductos)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getCategorias();
  }, [])
  
  return (

    <div className="card mt-3">
        <div className="card-body">
          <h4 className="card-title" >Productos</h4>
    
      <Link className="btn btn-success mb-2" to="/crearproducto">
        Crear nuevo producto
      </Link>
      <table className="table">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Categoria</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map(({prod_nom, prod_id, categoriaId}, i) => (
            <tr key={i}>
              <td>{prod_nom}</td>
              <td>{categoriaId}</td>
            
              <td>
             
                <Link className="btn btn-warning btn-sm" to={`/editarproducto/${categoriaId}/${prod_id}`}>
                  <i className="fa-regular fa-pen-to-square" />
                </Link>

                <button 
                  className="btn btn-danger btn-sm ms-2" 
                  onClick={() => {deleteProducto(categoriaId, prod_id)}}
                >
                  <i className="fa-regular fa-trash-can" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      </div>
  )
}