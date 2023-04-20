import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import Button from './Button'
import InputForm from './InputForm';
import Header from './Header';
import { isValidEmail, isPasswordLongEnough, hasPasswordRequiredChars } from '../utils/inputValidation';

function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    // Here we would verify the email is correct & password are 
    // correct. If they are then we action them to the MFA screen. But here
    // Before we send them to the screen. We should trigger the MFA code to
    // be generated on the server and send to their email address. 
    e.preventDefault();

    if (isPasswordLongEnough(password) && hasPasswordRequiredChars(password) && isValidEmail(email)){
        navigate('/mfa');
    }
    else 
    {
        alert("Password and or email are not valid")
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  console.log('Rendering LoginPage...');

  return (
    <div style={styles.loginPageContainer}>
      <Header/>
      <div style={styles.formContainer}>
      <form 
        onSubmit={handleLogin} 
        style ={styles.loginPaneContainer}
      >
        <h1 style = {styles.loginHeader}>Login</h1>
        <InputForm 
          style = {styles.formPadding}
          type="text" 
          placeholder="Email Address" 
          onChangeHandler={handleEmailChange} 
        />
        <InputForm 
          style = {styles.formPadding} 
          type="password" 
          placeholder="Password" 
          onChangeHandler={handlePasswordChange}
        />
        <Button 
          style = {styles.buttonPadding} 
          title= "Continue" 
        />
        <p 
          style = {styles.legalStatement}
        >
          By logging in you are agreeing to our 
          <br/>
          <strong>
            Terms and Conditions
          </strong>
        </p>
      </form>
      </div>
    </div>
  );
}

// Add Style Sheet here for Simplicity 
const styles = {
  loginPageContainer : {
    backgroundColor: 'black',
    minHeight: '100vh',
    minWidth: '100vh',
    display : 'flex',
    alignItems : 'center',
    flexDirection:'column'
  },
  loginPaneContainer:{
    backgroundColor : '#1A1B1E',
    height : '400px',
    width : '400px',
    borderRadius : 10,
    display: 'flex',
    flexDirection : 'column',
    padding: '15px',
    alignItems: 'center',
    justifySelf:'center'
  },
  loginHeader : {
    color: 'white'
  },
  formPadding : {
    marginTop : 25
  },
  buttonPadding : {
    marginTop: 50,
    marginBottom: 10
  },
  legalStatement : {
    width : '75%',
    textAlign : 'center',
    color: 'white',
    fontSize: 13
  },
  formContainer : {
    width:'100%',
    height: '100vh',
    display:'flex', 
    justifyContent:'center',
     justifySelf:'center', 
     alignItems:'center'
  }
}

export default LoginPage;
