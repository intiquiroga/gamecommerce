import {BrowserRouter,Routes,Route}from "react-router-dom" ;
import './App.css';
import { ComponenteNavBar } from './components/Navbar';
import Carousel from 'react-bootstrap/Carousel';
import {ItemListContainer, itemListContainer } from "./components/itemListContainer";
import { Navbar } from "./components/Navbar";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import { ItemList } from "./components/itemList";
import "../games.json";

const categories = ["id", "Plataforma","Juego"]
function App() {
  return (

    <BrowserRouter>
      <div className="App">
         <Navbar></Navbar>
         <ItemListContainer></ItemListContainer>
      <Routes>
         <Route path="/" element={<ItemListContainer/>}/>
         <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
         <Route path='/item/:id' element={<ItemListContainer/>}/>
         <Route path="/item/:id" element={<ItemDetail/>} />
      </Routes>
    </div>
    </BrowserRouter>
    //<BrowserRouter>
    //  <ComponenteNavBar/>
    //  <Routes>
    //    <Route path="/category/:id" 
    //    element={<itemListContainer greeting ="Productos"/>}/>
    //    <Route path="/item/:id" element={<itemDetailContainer/>}/>
    //  </Routes>
    //</BrowserRouter>
    
  );
}

export default App;
