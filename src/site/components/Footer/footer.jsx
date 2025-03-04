import React from "react";
import './footer.css'

export default function Footer() {
    var ano = new Date().getFullYear()

    function Dev(props) {
        return <p style={{ color: props.cor }}>{props.name}</p>
    }

    return (
        <section id="footer">
            <footer className="py-5">
                <div className="row">
                    <div className="col-6 col-md-2 mb-3">
                        <h5>Section</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
                        </ul>
                    </div>

                    <div className="col-6 col-md-2 mb-3">
                        <h5>Section</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
                        </ul>
                    </div>

                    <div className="col-6 col-md-2 mb-3">
                        <h5>Section</h5>
                        <ul className="nav flex-column">
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Home</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Features</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">Pricing</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">FAQs</a></li>
                            <li className="nav-item mb-2"><a href="#" className="nav-link p-0 text-body-secondary">About</a></li>
                        </ul>
                    </div>

                    <div className="col-md-5 offset-md-1 mb-3">
                        <form>
                            <h5>Subscribe to our newsletter</h5>
                            <p>Monthly digest of what's new and exciting from us.</p>
                            <div className="d-flex flex-column flex-sm-row w-100 gap-2">
                                <label for="newsletter1" className="visually-hidden">Email address</label>
                                <input id="newsletter1" type="text" className="form-control" placeholder="Email address" />
                                <button className="btn btn-primary" type="button">Subscribe</button>
                            </div>
                        </form>
                    </div>
                    <div className="media d-flex justify-content-end">
                        <i className="icon-ld fa-brands fa-linkedin fa-2x"></i>
                        <i className="icon-ig fa-brands fa-instagram fa-2x"></i>
                    </div>
                </div>

                <div className="d-flex flex-column flex-sm-row justify-content-between py-4 my-4 border-top">
                    <p>Desenvolvido por Lucas Leitão &copy; {ano} Hand Tecnologia, Inc. All rights reserved.</p>
                </div>
            </footer>
        </section>
    )
}