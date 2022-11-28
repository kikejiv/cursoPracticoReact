import React from 'react';
import '@styles/MyAccount.scss';

const MyAccount = () => {
    return (
     <div className="MyAccount">
        <div className="MyAccount-container">
          <h1 className="title">Mi Cuenta</h1>
          <form action="/" className="form">
            <div>
              <label htmlFor="name" className="label">Nombre</label>
              <p className="value">Kikejiv</p>
              <label htmlFor="tel" className="label">Telefono</label>
              <p className="value">316*******</p>
              <label htmlFor="dir" className="label">Direccion</label>
              <p className="value">Av***</p>
              <label htmlFor="email" className="label">Correo</label>
              <p className="value">kikejiv@gmail.com</p>
              <label htmlFor="password" className="label">Contraseña</label>
              <p className="value">********</p>
            </div>
            <input type="submit" defaultValue="Editar" className="secondary-button login-button" />
          </form>
        </div>
</div>

    );
}

export default MyAccount;