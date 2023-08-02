
import { CartWidget } from "./CartWidget"
import { Button } from "react-bootstrap";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Carousel from 'react-bootstrap/Carousel';
import "../../games.json"
import { Link , NavLink } from "react-router-dom";

//const juego = data.map (game => game.plataforma)
//const unico = new Set (plataforma)
//console.log (...unico) 
//{[...unique].map (item =>( <NavLink to= {'/category/ ${plataforma}' }>
///</NavLink>))}
export const Navbar = () => {
return (

   <nav style={{backgroundColor:"black",display:"flex",justifyContent:"space-between"}}>       
     <img className='imagenlogo' src="https://th.bing.com/th/id/OIP.0pWty1ATaKrYjEx7Xwpt-wAAAA?pid=ImgDet&rs=1" alt="Logo de Pagina"/>
     <ul style={{display:"flex",columnGap:"20px",justifyContent:"flex-end",color:"white",listStyle:"none",fontFamily:"fantasy",marginRight:"10px"}}>
         <li><Link to="/">Consolas</Link></li>
         <li><Link to="/">Nosotros</Link></li>
         <li><Link to="/"></Link>Quienes Somos</li>
         <li><Link to="/"></Link>Contacto</li>
  </ul>
  <CartWidget></CartWidget>
</nav> 
      //<Navbar bg="dark" data-bs-theme="dark">
      //  <Container>
      //    <Navbar.Brand href="#home">Juegos</Navbar.Brand>
      //    <Nav className="me-auto">
      //      <Nav.Link href="#home">Nosotros</Nav.Link>
      //      <Nav.Link>Consolas</Nav.Link>
     //       <Nav.Link href="#pricing">Ofertas</Nav.Link>
     //     </Nav>
     //     <CartWidget></CartWidget>
     //   </Container>
     // </Navbar>
     
   
   
)
}
  
