import CampoTexto from "./form";

function Formulario() {
    return (
        <section>
            <form>
                <CampoTexto label='Nome' placeholder='Digite seu nome..'/>
                <CampoTexto label='Cargo' placeholder='Digite seu cargo..'/>
                <CampoTexto label='Idade' placeholder='Digite sua idade..'/>
            </form>
        </section>
    );
}

export default Formulario;