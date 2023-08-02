
import { Button } from "react-bootstrap"
import Card from 'react-bootstrap/Card';
import "../../games.json"

export const itemDetail = ({item}) => {
    return (
      <div className='detail-container'>
         <p style={{color:"violet"}}> item detail</p>
         <div className=''>
             <img/>
         </div>
         <div>
              <h4> {Item.title} </h4>
              <h5>$ {Item.price} </h5>
         </div>
     </div>
    );

}