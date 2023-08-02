import {useState,useEffect} from "react";
import { itemDetail } from "./itemDetail";
import {itemList} from "./itemList"
import { itemListContainer } from "./itemListContainer";
import { item } from "./item"; 
export const itemDetailContainer = () => {

    const [ products, setProducts] = useState ([])

    const {id} = useParams()


    //useEffect (()=> {
        //const promesa = new Promise (( resolve,rejected) => {
          //  setTimeout (() => {
           //     resolve (data); 
           // }),2000
        //})
        const promesa = new Promise ((resolve,reject)=>{
            setTimeout (()=> {
                resolve ();
          },2000);
        })

        useEffect (()=> {
            const getProducto = async () => {
            const productos = await promesa ;
                console.log ('productos' , productos);
                console.log("producto",producto)
                setItemProduct (producto);
            }
            getProducto ();
        },[id])

       // promesa.then (result =>{ 
        //        setProducts (result[2])
        // })
    //}, [])

    return (
        //<Container>
        //    <h1> Detalle</h1>
        //        {products.length === 0 ? (<div> Cargando ...</div>)
        //        : ( <itemList products={games}/>)
        //        }
        // </Container>
        <div className="item-detail-container">
          <p style={{width:"100%"}}>item datail Container</p>
          <itemDetail item={itemProduct}/>
        </div>
    )

}