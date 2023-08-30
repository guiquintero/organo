import './Button.css'

const Button = (props) => {
    return(
        <button className='botao'>
            {props.text}
        </button>
    )
}

export default Button