import React from "react";
import { useMsal } from "@azure/msal-react";
import { Button } from "react-bootstrap";

function handleLogout(instance) {
    instance.logoutRedirect().catch(e => {
        console.error(e);;
    })
}

export const SignOutButton = () => {
    const { instance } = useMsal();

    return (
            <Button variant="secondary" className="ml-auto" onClick={() => handleLogout(instance)}>Sign Out Button</Button>
    )

}