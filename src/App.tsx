import { Navbar, Container, Nav } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import { Store } from "./Store";
import { useContext, useEffect } from "react";

function App() {
  const {
    state: { mode },
    dispatch,
  } = useContext(Store);
  useEffect(() => {
    document.body.setAttribute("data-bs-theme", mode);
  }, [mode]);
  return (
    <div className="d-flex, flex-column vh-full">
      <header>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand>Amazon</Navbar.Brand>
          </Container>
          <Nav>
            <a href="/cart" className="nav-link">
              Cart
            </a>
            <a href="/login" className="nav-link">
              Login
            </a>
          </Nav>
        </Navbar>
      </header>
      <main>
        <Container className="mt-3">
          <Outlet />
        </Container>
      </main>
      <footer>
        <div className="text-center">All right reserved</div>
      </footer>
    </div>
  );
}

export default App;
