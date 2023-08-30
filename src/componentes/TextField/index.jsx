import './TextField.css'

const TextField = (props) => {
    let ph=null;
    switch(props.label){
        case 'Nome':
            ph='Digite o seu nome';
            break;
        case 'Cargo':
            ph='Digite o seu cargo';
            break;
        case 'Imagem':
            ph='Digite a URL da sua imagem';
            break;
    }

    const aoDigitado = (evento) => {
        props.aoAlterado(evento.target.value)
    }

    return(
        <div className = "campo-texto">
            <label>
                {props.label}
            </label>
            <input value={props.valor} onChange={aoDigitado} required = {props.obrigatorio} placeholder={ph}/>
        </div>
    
    )
}

export default TextField