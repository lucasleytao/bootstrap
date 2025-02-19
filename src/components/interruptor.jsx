//props e estado

import { useState } from "react"

function Botao(props) { //cria uma funcao local
    return (
        <button style={{background:props.cor, width:100, height:100, borderRadius:50}}>{props.msg}</button>
    )
}

export function Interruptor() {
    const[ligado, setLigado] = useState(false) //cria e gerencia o estado do componente

    return(
        <>
        <Botao cor={ligado ? '#F0E68C': '#808080'}/> <br /><br />
        <button style={{width:200}} onClick={()=>setLigado(!ligado)}>
            {ligado ? 'Desligar' : 'Ligar'}
        </button>
        </>
    )
}