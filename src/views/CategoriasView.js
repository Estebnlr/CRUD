import { useState, useEffect } from "react"
import { obtenerCategorias } from "../services/categoriasService"

export default function DashboardView() {
  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
    obtenerCategorias()
    .then((data) => {
      setCategorias(data)
    })
    .catch((error) => {
      console.log(error)
    })
  }, [])


  return (
    <>
      <h1></h1>
      <div className="card mt-3">
        <div className="card-body">
          <h4 className="card-title">
            Categorias
          </h4>
          <table className="table">
            <thead>
              <tr>
                <th>
                  Nombre
                </th>
                <th>
                  Descripción
                </th>
              </tr>
            </thead>
            <tbody>
                {categorias.map((item, i) => (
                  <tr key={i}>
                    <td>
                      {item.cat_nom}
                    </td>
                    <td>
                      {item.cat_des}
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}