import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

/**
 * Robust Entry Point
 * ==================
 * Includes error boundary for early failures.
 */
try {
    const rootElement = document.getElementById('root');

    if (!rootElement) {
        throw new Error('Root element not found');
    }

    const root = createRoot(rootElement);

    root.render(
        <StrictMode>
            <App />
        </StrictMode>
    );
} catch (error) {
    console.error('Error in main.jsx:', error);
    document.body.innerHTML = `
    <div style="padding: 2rem; text-align: center; background-color: #f0f0f0; min-height: 100vh;">
      <h1 style="color: #FF5200;">Application Error</h1>
      <p style="color: #666;">Failed to load the application.</p>
      <p style="color: #999; font-size: 0.9rem;">Error: ${error.message}</p>
    </div>
  `;
}
