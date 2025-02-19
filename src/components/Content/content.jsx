import React from "react";
import { Card } from "../Card/card";
import { Footer } from "../Footer/footer";

export function Content() {
    return (
        <div className="container">
            <div>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
            <Footer />
        </div>
    )
}