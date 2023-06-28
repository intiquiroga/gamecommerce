
import { CartWidget } from "./CartWidget"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel';
export const ComponenteNavBar = () => {
return (
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Juegos</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Nosotros</Nav.Link>
            <Nav.Link href="#features">Consolas</Nav.Link>
            <Nav.Link href="#pricing">Ofertas</Nav.Link>
          </Nav>
          <CartWidget></CartWidget>
        </Container>
      </Navbar>
      
   
   
)
}
  
