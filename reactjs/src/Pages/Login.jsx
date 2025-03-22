import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
function Login() {
    const navigate = useNavigate();
    const [LoginInput, setLogin] = useState({
        email: '',
        password: '',
        error_list: [],
    });
    const handleInput = (e) => {
        e.persist();
        setLogin({...LoginInput, [e.target.name]: e.target.value });
    }

    const loginSubmit = (e) => {
        e.preventDefault();
        const data = {
            email: LoginInput.email,
            password: LoginInput.password,
        }
        axios.get('/sanctum/csrf-cookie').then(response => {
        axios.post(`api/login`, data).then(res => {
            if(res.data.status === 200)
            {
                localStorage.setItem('auth_token', res.data.token);
                localStorage.setItem('auth_name', res.data.username);
                swal("Success", res.data.message, "success");
                navigate("/");
            }
            else if(res.data.status === 401)
            {
                swal("Warning", res.data.message, "warning");
            }
            else
            {
                setLogin({...LoginInput, error_list: res.data.validation_errors });
            }
        });
    });
    }
    return (
        <div>
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-header">
                                <h4>Login</h4>
                            </div>
                            <div className="card-body">
                                <form onSubmit={loginSubmit}>
                                    <div className="form-group mb-3">
                                        <label>Email</label>
                                        <input type="email" name="email" onChange={handleInput} value={LoginInput.email} className="form-control"  />
                                        <span>{LoginInput.error_list.email}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <label>Password</label>
                                        <input type="password" name="password" onChange={handleInput} value={LoginInput.password} className="form-control"  />
                                        <span>{LoginInput.error_list.password}</span>
                                    </div>
                                    <div className="form-group mb-3">
                                        <button type="submit" className="btn btn-primary">Login</button>

                                        <Link to="/register">Register</Link>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Login;
