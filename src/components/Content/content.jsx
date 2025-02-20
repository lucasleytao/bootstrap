import React from "react";
import { Card } from "../Card/card";
import { Footer } from "../Footer/footer";
import { Props } from "../Props/props";

export function Content() {
    return (
        <div className="container">
            <div>
                <Props msg='Mensagem de PROPS' bg={{background:'#add8e6'}}/>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <Footer />
        </div>
    )
}