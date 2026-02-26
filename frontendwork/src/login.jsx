import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    function handlelogin(e) {
        e.preventDefault();

        fetch("http://localhost:4002/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
            .then(res => res.json())
            .then(responsejson => {

                if (responsejson.msg === "success") {
                    navigate("/dashboard");
                } else {
                    alert(responsejson.msg);
                }

            })
            .catch(() => {
                alert("Error logging in");
            });
    }
    return (
        <div className="container-fluid min-vh-100 d-flex justify-content-center align-items-center bg-light">

            <div className="card border-0 shadow-lg rounded-4 p-4" style={{ width: '24rem' }}>

                <h2 className="text-center fw-bold mb-4 text-primary">
                    login form
                </h2>

                <form>


                    <div className="form-floating mb-3">
                        <input
                            type="email"
                            className="form-control rounded-3"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email"
                        />
                        <label htmlFor="email">Email address</label>
                    </div>

                    <div className="form-floating mb-4">
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="form-control rounded-3"
                            id="password"
                            placeholder="Enter your password"
                        />
                        <label htmlFor="password">Password</label>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-primary w-100 rounded-3 fw-semibold py-2"
                        onClick={handlelogin}
                    >
                        Login
                    </button>
                </form>

                <p className="text-center mt-4 text-muted small">
                    Don't have an account?{" "}
                    <a href="#" className="text-decoration-none fw-semibold">
                        Sign up
                    </a>
                </p>

            </div>
        </div>
    );
}

export default Login;