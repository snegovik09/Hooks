import React from "react";

const withFunctions = (Component) => (props) => {
    const isToken = localStorage.getItem("token");
    const onLogin = () => {
        return localStorage.setItem("token", "true");
    };
    const onLogOut = () => {
        return localStorage.removeItem("token");
    };
    return (
        <div className="card my-2">
            <Component {...props} isAuth={isToken} onLogin={onLogin} onLogOut={onLogOut}/>
        </div>
    );
};

export default withFunctions;
