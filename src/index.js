import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './router/AppRouter';
import { msalConfig } from './components/authConfig';
import { MsalProvider } from '@azure/msal-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.scss';
import { PublicClientApplication } from '@azure/msal-browser';


const msalInstance = new PublicClientApplication(msalConfig);

ReactDOM.render( <MsalProvider instance={msalInstance}><AppRouter/></MsalProvider> , document.getElementById('root'));