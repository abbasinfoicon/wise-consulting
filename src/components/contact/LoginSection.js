import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { login, selectUser } from '../../features/UserSlice';

const Login = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const user = useSelector(selectUser);

    const dispatch = useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login({
            name: name,
            email: email,
            password: password,
            loggedIn: true,
        }));

        console.log(login);
    }
    return (
        <div className="rs-my-account pt-100 pb-100 md-pt-57 md-pb-80">
            <div className="login-side">
                <div className="sec-title">
                    <h2 className="title">Login</h2>
                </div>
                <form className="login-form" onSubmit={(e) => handleSubmit(e)}>
                    <label className="input-label">Username or email address <span>*</span></label>
                    <input className="input-control" type="text" name="text" required value={name} onChange={(e) => setName(e.target.value)} />
                    <input className="input-control" type="email" name="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                    <label className="input-label">Password <span>*</span></label>
                    <input className="input-control" type="password" name="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                    <div className="login-control">
                        <ul>
                            <li><button type="submit" className="readon">Login</button></li>
                            <li>
                                <label className="checkbox">
                                    <input type="checkbox" name="Remember" /> Remember me
                                </label>
                            </li>
                        </ul>
                    </div>
                    <a className="psw-recover" href="#">Lost Your Password?</a>
                </form>
            </div>
        </div>
    )
}

export default Login