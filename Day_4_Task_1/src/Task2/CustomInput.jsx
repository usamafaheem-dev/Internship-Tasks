// CustomInput.js
import { forwardRef } from 'react';   // React 19 mein bhi safe hai

const CustomInput = forwardRef((props, ref) => {
  const { label, placeholder = "Enter text...", type = "text", ...rest } = props;

  return (
    <div style={{ marginBottom: '20px' }}>
  
        <label 
          style={{
            display: 'block',
            marginBottom: '8px',
            fontWeight: 'bold',
            color: '#333'
          }}
        >
          {label}
        </label>
      

      <input
        ref={ref}
        type={type}
        placeholder={placeholder}
        // {...rest}
        style={{
          width: '100%',
          maxWidth: '350px',
          padding: '12px 15px',
          fontSize: '16px',
          border: '2px solid #007bff',
          borderRadius: '8px',
          outline: 'none',
          transition: 'all 0.3s',
        }}
        onFocus={(e) => {
          e.target.style.borderColor = '#0056b3';
          e.target.style.boxShadow = '0 0 0 3px rgba(0, 123, 255, 0.2)';
        }}
        onBlur={(e) => {
          e.target.style.borderColor = '#007bff';
          e.target.style.boxShadow = 'none';
        }}
      />
    </div>
  );
});

export default CustomInput;