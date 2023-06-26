
import "bootstrap/dist/css/bootstrap.min.css"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import CategoriasView from "./views/CategoriasView"
import CrearCategoriaView from "./views/CrearCategoriaView"
import ProductosView from "./views/ProductosView"
import CrearProductoView from "./views/CrearProductoView"
import EditarProductoView from "./views/EditarProductoView"

import Navigation from "./components/Navigation"



export default function App() {

  return (

    <Router> 
      <Navigation />
      <div className="container pt-4">

        <Routes>
     
          <Route path="/" element={<CategoriasView />} />
          <Route path="/crearcategoria" element={<CrearCategoriaView />} />
          <Route path="/productos" element={<ProductosView />} />
          <Route path="/crearproducto" element={<CrearProductoView />} />
         
          <Route path="/editarproducto/:idCat/:idProducto" element={<EditarProductoView />} />
        </Routes>
      </div>
    </Router>
  )
}