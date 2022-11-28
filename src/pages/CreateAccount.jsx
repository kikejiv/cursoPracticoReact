import React from 'react';
import '@styles/CreateAccount.scss';

const CreateAccount = () => {
    return (
       <div className="CreateAccount">
        <div className="CreateAccount-container">
          <h1 className="title">Crea tu cuenta</h1>
          <form action="/" className="form">
            <div>
              <label htmlFor="name" className="label">Nombre</label>
              <input type="text" id="name" placeholder="Ingresa tu Nombre" className="input input-name" />
              <label htmlFor="email" className="label">Correo</label>
              <input type="text" id="email" placeholder="Ingresa tu Correo" className="input input-email" />
              <label htmlFor="password" className="label">Contraseña</label>
              <input type="password" id="password" placeholder="*********" className="input input-password" />
            </div>
            <input type="submit" defaultValue="Crear" className="primary-button login-button" />
          </form>
        </div>
      </div>

    );
}

export default CreateAccount;