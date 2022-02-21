import React from "react";
import { useMsal } from "@azure/msal-react";
import { loginRequest } from "./authConfig";
import { Button } from "react-bootstrap";

function handleLogin(instance) {
    instance.loginPopup(loginRequest).catch(e=> {
        console.error(e)
    })
}

export const SignInButton = () => {
    const { instance } = useMsal();
    return (
        <Button variant="secondary" className="ml-auto" onClick={() => handleLogin(instance)}>Click here to sign into your Microsoft Tenant</Button> 
    );
}