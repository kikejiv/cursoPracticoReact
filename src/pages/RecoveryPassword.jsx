import React from 'react';
import '@styles/RecoveryPassword.scss';
import logo from  '@logos/logo_yard_sale.svg';


const RecoveryPassword = () => {
    return (
       <div className="RecoveryPassword">
        <div className="RecoveryPassword-container">
            <img src={logo} alt="logo" className="logo" />
             <h1 className="title">Password Recovery!</h1>
             <p className="subtitle">Inform the email address used to create your account</p>
             <form action="/" className="form">
                 <label htmlFor="email" className="label">Email Address</label> 
                 <input type="text" id="email" className="input input-email" />
                 <input type="submit" value="Confirm" className="primary-button login-button" />
             </form>
        </div>
    </div>

    );
}

export default RecoveryPassword;