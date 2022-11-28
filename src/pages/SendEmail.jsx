import React from 'react';
import '@styles/SendEmail.scss';
import logo from '@logos/logo_yard_sale.svg';
import icon from '@icons/email.svg';

const SendEmail = () => {
    return (
       <div className="SendEmail">
        <div className="SendEmail-container">
          <img src={logo} alt="logo" className="logo" />
          <h1 className="title">Email fue Enviado!</h1>
          <p className="subtitle">Por favor revise su correo para las instrucciones de cambiar la contraseña</p>
          <div className="email-image">
            <img src={icon} alt="email" />
          </div>
          <button className="primary-button login-button">Login</button>
          <p className="resend">
            <span>No has recibido el Email?</span> 
            <a href="/">Reenviar</a>
          </p>
        </div>
</div>

    );
}

export default SendEmail;