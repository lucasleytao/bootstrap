import React from "react";
import { Link } from "react-router-dom";

export default function () {
    return (
        <>
            <div class="container">
                <div class="col-md-6 mx-auto text-center">
                    <div class="header-title">
                        <h1 class="wv-heading--title">
                            Check out — it’s free!
                        </h1>
                        <h2 class="wv-heading--subtitle">
                            Lorem ipsum dolor sit amet! Neque porro quisquam est qui do dolor amet, adipisci velit...
                        </h2>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-4 mx-auto">
                        <div class="myform form ">
                            <form action="" method="post" name="login">
                                <div class="form-group">
                                    <input type="text" name="name" class="form-control my-input" id="name" placeholder="Name" />
                                </div>
                                <div class="form-group">
                                    <input type="email" name="email" class="form-control my-input" id="email" placeholder="Email" />
                                </div>
                                <div class="form-group">
                                    <input type="number" min="0" name="phone" id="phone" class="form-control my-input" placeholder="Phone" />
                                </div>
                                <div class="text-center ">
                                    <button type="submit" class=" btn btn-block send-button tx-tfm">Create Your Free Account</button>
                                </div>
                                <div class="col-md-12 ">
                                    <div class="login-or">
                                        <hr class="hr-or" />
                                            <span class="span-or">or</span>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <a class="btn btn-block g-button" href="#">
                                        <i class="fa fa-google"></i> Sign up with Google
                                    </a>
                                </div>
                                <p class="small mt-3">By signing up, you are indicating that you have read and agree to the <a href="#" class="ps-hero__content__link">Terms of Use</a> and <a href="#">Privacy Policy</a>.
                                </p>
                                <Link to="/login">Já tenho uma conta</Link>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}