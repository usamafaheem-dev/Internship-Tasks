// App.js
import { useRef } from 'react';
import CustomInput from './CustomInput';

export default function Form() {
  
  // 3 alag refs banaye
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  function focusName() {
    nameRef.current.focus();
  }

  function focusEmail() {
    emailRef.current.focus();
  }

  function focusPassword() {
    passwordRef.current.focus();
  }

  function focusAll() {
    nameRef.current.focus();
    setTimeout(() => emailRef.current.focus(), 800);
    setTimeout(() => passwordRef.current.focus(), 1600);
  }

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial' }}>
      <h2>Registration Form</h2>
      
      <CustomInput 
        ref={nameRef} 
        label="Full Name" 
        placeholder="Enter your name" 
      />
      
      <CustomInput 
        ref={emailRef} 
        label="Email Address" 
        placeholder="Enter your email" 
      />
      
      <CustomInput 
        ref={passwordRef} 
        label="Password" 
        placeholder="Enter password" 
        type="password"
      />

      <div style={{ marginTop: '30px' }}>
        <button onClick={focusName} style={{ marginRight: '10px' }}>
          Focus Name
        </button>
        
        <button onClick={focusEmail} style={{ marginRight: '10px' }}>
          Focus Email
        </button>
        
        <button onClick={focusPassword} style={{ marginRight: '10px' }}>
          Focus Password
        </button>

        <button onClick={focusAll} style={{ background: '#28a745', color: 'white' }}>
          Focus All One by One
        </button>
      </div>
    </div>
  );
}