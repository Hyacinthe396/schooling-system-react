import React, { Component } from "react";

export default class SignUp extends Component {
    render() {
        return (
            <form>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>Full names </label>
                    <input type="text" className="form-control" placeholder="FullName" />
                </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email" />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <label> Role </label>
                    <input type="text" className="form-control" placeholder="Role" />
                </div>

                <button type="submit" className="btn btn-primary btn-block"><a href="/sign-in" className="btn btn-primary btn-block">Sign Up</a></button>
                <p className="forgot-password text-right">
                    Already registered <a href="/sign-in">sign in</a>
                </p>
            </form>
        );
    }
}