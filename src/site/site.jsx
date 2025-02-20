import React from "react";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";
import Content from "../app/components/Content/content";

export default function Site() {
    return (
        <>
            <Navbar />
            <div className="container">
                <Content />
                <Footer />
            </div>
        </>
    )
}