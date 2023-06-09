import CampoTexto from "./form";
import "./formulario.css"
import ListaSuspensa from "../listaSupensa/listaSuspensa";
import Botao from "../Botao/botao";


function Formulario() {
    const Cargos = [
        "Programação", 
        "Front-End", 
        "Data-Science", 
        "Devops", 
        "UX e Designer", 
        "Mobile", 
        "Inovação e Gestão"
    ]

    return (
        <section className="Formulario">
            <form>
                <CampoTexto label='Nome' placeholder='Digite seu nome..'/>
                <CampoTexto label='Cargo' placeholder='Digite seu cargo..'/>
                <CampoTexto label='Idade' placeholder='Digite sua idade..'/>
                <ListaSuspensa itens={Cargos}/>

                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    );
}

export default Formulario;