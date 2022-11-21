import React from "react";
import PropTypes from "prop-types";
const SimpleComponent = ({ onLogin, onLogOut, isAuth }) => {
    const handleSubmit = () => {
        if (!isAuth) {
            onLogin();
            location.reload();
        } else {
            onLogOut();
            location.reload();
        }
    };
    return (
        <>
            {isAuth ? <button onClick={handleSubmit}>Выйти из системы</button>
            : <button onClick={handleSubmit}>Войти</button>}
        </>
    );
};
SimpleComponent.propTypes = {
    onLogin: PropTypes.func,
    onLogOut: PropTypes.func,
    isAuth: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
};
export default SimpleComponent;
