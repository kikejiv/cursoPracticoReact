import React from 'react';
import '@styles/NewPassword.scss';
import logo from  '@logos/logo_yard_sale.svg';

const NewPassword = () => {
    return (
        <div className="NewPassword">
          <div className="NewPassword-container">
            <img src={logo} alt="logo" className="logo" />
            <h1 className="title">Crea una nueva Contraseña</h1>
            <p className="subtitle">Ingrese una nueva Contraseña</p>
            <form action="/" className="form">
              <label htmlFor="password" className="label">Contraseña</label>
              <input type="password" id="password" placeholder="*********" className="input input-password" />
              <label htmlFor="new-password" className="label">Confirmar Contraseña</label>
              <input type="password" id="new-password" placeholder="*********" className="input input-password" />
              <input type="submit" defaultValue="Confirmar" className="primary-button login-button" />
            </form>
          </div>
</div>

    );
}

export default NewPassword;