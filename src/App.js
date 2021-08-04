import React from 'react';
import './App.css';
import { NavBar } from './components/navBar';
import { ItemListContainer } from './components/ItemListContainer'

const datos = {
    contenido: "Las mejores herramientas al mejor precio"
}

function App() {
    return (
        <div>
            <NavBar />
            <ItemListContainer texto={datos.contenido}/>
        </div>
    );
}

export default App;



    