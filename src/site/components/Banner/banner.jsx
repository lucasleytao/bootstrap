import React from "react";
import Content from "../../../app/components/Content/content";

export default function Banner() {
    return (
        <div className="row">
            <div className="banner col-lg-4 col-md-6">
                <Content />
            </div>
            <div className="banner col-lg-4 col-md-6">
                <h3>Coluna 2</h3>
            </div>
            <div className="banner col-lg-4 col-md-6">
                <h3>Coluna 3</h3>
            </div>
        </div>
    )
}