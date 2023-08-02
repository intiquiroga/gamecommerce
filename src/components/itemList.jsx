import { useEffect } from "react";
import { item } from "./item";
//export const itemList = ({products}) =>
    //products.map (games => <Item key={game.plataforma}game= {plataforma }/>)
export const ItemList = ({items})=>{
        console.log(props)
        //const{items} =props ;
    
       return(
           <div>
               <div style={{color:"black"}}>item list</div>
               {
                  items.map(producto=>(
                      <Item key={producto.id} item= {producto}/>
                  ))
                }
           </div>
        )
    }
     