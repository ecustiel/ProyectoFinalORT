import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink, useNavigate } from "react-router-dom";
import { useAuthStore } from "../Hooks/useAuthStore";

export default function Navigation() {
  const [hidden, setHidden] = useState(true);
  const { startLogout, status } = useAuthStore();
  const navigate = useNavigate();

  return (
    <Navbar collapseOnSelect expand="lg" variant="dark" bg="dark">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          {status === "not-authenticated" ? (
            <>
              <Nav.Link as={NavLink} to="/login">
                Iniciar Sesión
              </Nav.Link>
              <Nav.Link as={NavLink} to="/register">
                Registrarse
              </Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link as={NavLink} to="/perfil">
                Mi Perfil
              </Nav.Link>
              <Nav.Link as={NavLink} to="/search">
                Busqueda
              </Nav.Link>
              <Nav.Link as={NavLink} to="/registerProduct">
                Registrar Publicacion
              </Nav.Link>
            </>
          )}
        </Nav>
      </Navbar.Collapse>

      {status === "authenticated" ? (
        <button
          className="btn btn-outline-danger"
          onClick={(event) => {
            startLogout();
            navigate("/");
          }}
        >
          <i className="fas fa-sign-out-alt"></i>
          <span>Salir</span>
        </button>
      ) : (
        hidden
      )}
    </Navbar>
  );
}
