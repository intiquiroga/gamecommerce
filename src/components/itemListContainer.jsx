
import data from "../../games.json";
import Card from 'react-bootstrap/Card';
import { ItemList } from "./itemList"; 
import { item } from "./item";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";


export const ItemListContainer = () => {
   console.log (useParams());
   const {categoryId} = useParams ( arregloProductos );
   const [productos,setProductos] = useState ([]);

   const promesa = new Promise((resolve, reject) => {
        setTimeout(() => { 
        resolve (arregloProductos) 
       },2000); 
       })

   useEffect (()=>{
       promesa.then((response)=> {
           if (categoryId){
               const productsFiltered = response.filter (elm=>elm.categoria === categoryId);
               setProductos (productsFiltered);
           } else {
               setProductos (response)
           }
       })
       },[])
      console.log ("productos",productos);
      return(
           <div style={{backgroundcolor:"blue", display:"flex",justifyContent:"center",marginTop:"100px"}}>
              <p> item list container</p>
              <ItemList items ={productos}/>
           </div >
   )
}

//export const itemListContainer = props  => {
  //  return (
    //  <div>
      //   <h2> {props.greeting} </h2>
        // { games.length === 0 ? (
          //  <div> loading ... </div> 
         //) : (
         //   games.map (products => (
           //     <div key={games.plataforma}> {games.plataforma}</div>
           //  ))
       // )}
     //</div>
//) }