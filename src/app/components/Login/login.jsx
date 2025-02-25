import React from "react";
import { Link } from "react-router-dom";
import './login.css'

export default function Login() {
    return (
        <div className="container">
            <form>
                <div class="container">
                    <div class="row">
                        <div class="card">
                            <article class="card-body">
                                <Link to="/signup" class="float-right btn btn-outline-primary">Sign up</Link>
                                <h4 class="card-title mb-4 mt-1">Sign in</h4>
                                <form>
                                    <div class="form-group">
                                        <label>Your email</label>
                                        <input name="" class="form-control" placeholder="Email" type="email" />
                                    </div>
                                    <div class="form-group">
                                        <a class="float-right" href="#">Forgot?</a>
                                        <label>Your password</label>
                                        <input class="form-control" placeholder="******" type="password" />
                                    </div>
                                    <div class="form-group">
                                        <div class="checkbox">
                                            <label> <input type="checkbox" /> Save password </label>
                                        </div>
                                    </div>
                                    <div class="form-group">
                                        <button type="submit" class="btn btn-primary btn-block"> Login  </button>
                                    </div>
                                    <Link to="/">Voltar para o Site</Link>
                                </form>
                            </article>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}