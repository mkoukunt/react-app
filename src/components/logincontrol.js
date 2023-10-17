import React from "react";
class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isLoggedIn: false };
        this.handleLogin=this.handleLogin.bind(this);
        this.handleLogout=this.handleLogout.bind(this);
    }
    handleLogin() {
        this.setState({ isLoggedIn: true });
    }
    handleLogout() {
        this.setState({ isLoggedIn: false });
    }
    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogout} />
        } else {
            button = <LoginButton onClick={this.handleLogin} />
        }
        return (
            <div> { button }</div>
           
        );
    }
}

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}
export default LoginControl;