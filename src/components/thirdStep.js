import React from "react";
import { useForm } from 'react-hook-form';
import { AuthenticatedTemplate, UnauthenticatedThemplate, useIsAuthenticated } from "@azure/msal-react"
import { Form, Button } from 'react-bootstrap';
import { SignInButton } from "./SignInButton";
import { SignOutButton } from "./signOutButton";

const ThirdStep = (props) => {
    const isAuthenticated = useIsAuthenticated();
    const { handleChange, handleSubmit, formState: {errors} } = useForm();
    const onSubmit = (data) => {  
      console.log(data);
    };

    return (
        <Form className="input-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="col-md-6 offset-md-3">
            <Form.Group controlId="Random_Form">
              <Form.Label>Welcome to Microsoft Authorization Form!</Form.Label>
            <p>
            <p>
              <SignInButton />
            </p>
              <SignOutButton />
              <AuthenticatedTemplate>
                <h1>You are seeing this because you have successfully signed into your Microsoft Tenant, the next steps in this process would be
                  to add this application to your Azure Subscription. You can find the instructions here https://tedstechblog.com/mvm-web-app
                </h1>
              </AuthenticatedTemplate>
              { SignOutButton }
            </p>
            
            
            
            </Form.Group>
        <Button variant="primary" type="submit">
          Next
        </Button>
        </div>
        </Form>
    );
};

export default ThirdStep;