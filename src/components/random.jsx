//componente

import {useState} from "react";

function Random() {
    return (
        <button style={{width:200}}>{(Math.random()*10)}</button>
    )
}

export function Sorteio() {
    const[numero, setNumero] = useState()
    const style = {width:200}
    return (
        <>
        <Random /><br /><br />
        <button style={style} onClick={()=>setNumero((Math.random()*10))}>{numero ? 'Sortear' : 'Começar'}</button>
        </>
    )
}

