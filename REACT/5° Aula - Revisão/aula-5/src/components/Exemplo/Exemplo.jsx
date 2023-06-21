import { useState } from "react";

function Exemplo() {

    let [contador, setContador] = useState(0)

    return (
        <div>        
            <button onClick={() => setContador(contador+1)}>
                Aumenta
            </button>
            <button onClick={() => setContador(contador-1)}>
                Diminuir
            </button>
            <button onClick={() => setContador(contador=0)}>
                Resetar
            </button>

            <p>Você clicou {contador} vezes!</p>
        </div>
    );
}

export default Exemplo;