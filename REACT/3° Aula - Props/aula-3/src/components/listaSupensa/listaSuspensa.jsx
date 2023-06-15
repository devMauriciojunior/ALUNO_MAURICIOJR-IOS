import "./listaSuspensa.css"

function ListaSuspensa(props) {
    return (
        <div className="Lista-Suspensa">
            <label>{props.label}</label>
            <select name="" id="Lista">
                {props.itens.map(item => <option>{item}</option>)}
            </select>
        </div>
    );
}

export default ListaSuspensa;