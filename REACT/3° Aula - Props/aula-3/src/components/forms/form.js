import "./form.css"

function CampoTexto(props) {
    return (
        <div className="Campo-texto">
            <label>
                {props.label}
            </label>
            <input
                type='text'
                placeholder= {props.placeholder}
            />
        </div>
    );
}

export default CampoTexto;