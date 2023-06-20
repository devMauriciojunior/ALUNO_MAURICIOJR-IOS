import { useState } from "react";

function CorFavorita() {
    const [cor, setCor] = useState('Black');

    return (
        <div>
            <h1>Minha cor favorita {cor}</h1>
            <button onClick={() => setCor('Azul')}>
                MUDAR PARA AZUL
            </button>
        </div>  
    ); 
}
export default CorFavorita;