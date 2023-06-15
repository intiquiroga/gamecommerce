
import { CartWidget } from "./CartWidget"
export const ComponenteNavBar = () => {
return (
    <nav style={{backgroundColor:"black",display:"flex",justifyContent:"space-between",width:"100%" ,img:"10%"}}>       
      <img className='imagenlogo' src="https://pbs.twimg.com/profile_images/1466348271006330885/q8bN20PN_400x400.jpg" alt="Logo de Pagina"/>
      <ul style={{display:"flex",columnGap:"20px",justifyContent:"flex-end",color:"white",listStyle:"none",fontFamily:"fantasy",marginRight:""}}>
         <li>Servicios </li>
         <li>Productos </li>
         <li>Social Gaming </li>
         <li>Contacto</li>
      </ul>
      <CartWidget></CartWidget>
    </nav>

)
}
  
