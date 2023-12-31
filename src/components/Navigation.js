import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom"

export default function Navigation() {
  return (
    <Navbar bg="success" variant="dark">
      <Container>
        <Navbar.Brand>
            Admin App
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar">
          <Nav className="me-auto">
            <Link className="nav-link" to="/">
             Categorias
            </Link>
            <Link className="nav-link" to="/crearcategoria">
              Crear Categoria
            </Link>
            <Link className="nav-link" to="/productos">
              Ver Productos
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}