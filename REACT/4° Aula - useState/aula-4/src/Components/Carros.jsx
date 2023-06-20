import { useState } from "react";

function Carro() {
    const [carro, setCarro] = useState({
        marca: "VolksWagem",
        modelo: "Gol-Quadrado-GTI",
        ano: "1995",
        cor: "Branco"
    })


    return (
        <div>
            <h1>{carro.marca}</h1>
            <p>
                possui tem a cor {carro.cor}, o modelo é {carro.modelo} 
                do ano {carro.ano} 
            </p>
        </div>
    );
}

export default Carro;