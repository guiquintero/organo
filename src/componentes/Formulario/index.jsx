import ListaSuspensa from '../ListaSuspensa'
import TextField from '../TextField'
import './Formulario.css'
import Button from '../Button'
import { useState } from 'react'

const Formulario = (props) => {
    

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        props.aoColaboradorAdicionado({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField 
                obrigatorio = {true} 
                label='Nome' 
                valor = {nome}
                aoAlterado = {valor => setNome(valor)}
                />

                <TextField 
                obrigatorio = {true}  
                label='Cargo'
                valor = {cargo}
                aoAlterado = {valor => setCargo(valor)}
                />

                <TextField 
                obrigatorio = {false} 
                label='Imagem' 
                valor = {imagem}
                aoAlterado = {valor => setImagem(valor)}
                />

                <ListaSuspensa 
                obrigatorio = {true}  
                label = 'Time' 
                itens={props.times}
                valor = {time}
                aoAlterado = {valor => setTime(valor)}
                />

                
                <Button text = 'Criar Card'/>
            </form>
            
        </section>

    )
}

export default Formulario