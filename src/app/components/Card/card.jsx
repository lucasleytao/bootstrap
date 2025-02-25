import React from "react";

export default function Card(perfil) {
    return (
        <div className="card" style={{padding:'5%'}}>
            <img src="#" className="card-img-top" alt="" />
                <div className="card-body">
                    <h5 className="card-title">{perfil.name}</h5>
                    <p className="card-text">{perfil.bio}</p>
                    <a href="#" className="btn btn-primary">Acessar Perfil</a>
                </div>
        </div>
    )
}