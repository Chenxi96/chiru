import React from 'react';
import { createRoot } from 'react-dom/client';
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = createRoot(document.getElementById('root'));

root.render(
<Auth0Provider
    domain="dev-wt8ihp43q2h5vwd3.us.auth0.com"
    clientId="5i8z2HBTM5Cf4BK7AwNcMM5nvOF7cr0G"
    authorizationParams={{
      redirect_uri: 'http://localhost:3000/authorize'
    }}
  >
    <App />
  </Auth0Provider>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
