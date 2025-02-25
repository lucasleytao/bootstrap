import React from "react";
import Navbar from "./components/Navbar/navbar";
import Footer from "./components/Footer/footer";
import Content from "../app/components/Content/content";
import Banner from "./components/Banner/banner";

export default function Site() {
    return (
        <>
                <Navbar />
            <section className="container-fluid">
                <Banner />
                <Footer />
            </section>
        </>
    )
}