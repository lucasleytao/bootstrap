import React from "react";
import card from '../../endpoints/card' //suba dois niveis
import Card from "../Card/card";

export default function Content() {
    //funcao de objeto que mapeia um determinado endpoint
    function createCard(profile) {
        return <Card key={profile.id} name={profile.name} bio={profile.bio} />
    }

    return (
        <div>
            {/* <Props msg='Mensagem de PROPS' bg={{ background: '#add8e6' }} /> */}
            {card.map(createCard)}  
            {/* <Card name={perfil[0].name} bio={perfil[0].bio} />
                <Card name={perfil[1].name} bio={perfil[1].bio} /> */}
        </div>
    )
}