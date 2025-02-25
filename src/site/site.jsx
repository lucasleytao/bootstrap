import React from "react";
import Footer from "./components/Footer/footer";
import Banner from "./components/Banner/banner";
import Menu from "./components/Menu/menu";

export default function Site() {
    return (
        <>
                <Menu />
            <section className="container-fluid">
                <Banner />
                <Footer />
            </section>
        </>
    )
}