import React from "react";
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';

const ThirdStep = (props) => {
    const { register, handleChange, handleSubmit, formState: {errors} } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <Form className="input-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="col-md-6 offset-md-3">
            <Form.Group controlId="Random_Form">
              <Form.Label>Microsoft Azure Subscription Authorization Form</Form.Label>
            <p>      
                <select {...register("randomstuff")}>
                    <option value="randomdata">Random Stuff</option>
          </select></p>
            </Form.Group>
        <Button variant="primary" type="submit">
          Next
        </Button>
        </div>
        </Form>
    );
};

export default ThirdStep;