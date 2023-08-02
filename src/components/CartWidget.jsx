import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome' ;
import { faCoffee } from '@fortawesome/free-solid-svg-icons';


export const CartWidget = () => {
return (
    <>
      <FontAwesomeIcon style={{color:"yellow"}} icon={faCoffee}/>
      <span style={{color:"yellow"}}>0</span>
    </>
)
}