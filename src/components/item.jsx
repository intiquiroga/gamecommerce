
import { Button } from "react-bootstrap"
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";


export const item = ({item}) => {
    return (  
    <div className="tarjeta-producto">
      <img src="" alt={item.title} />
      <h4>{item.title}</h4>
      <p> </p>
      <Link to= {"/item/${item.id}"}>
      <button className="boton-ver"></button>
      </Link>

    </div>
  )


}