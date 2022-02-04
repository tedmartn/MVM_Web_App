import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Form, Button } from 'react-bootstrap';

const azure_regions = [
    {value: 'eastus', text: 'eastus'},
    {value: 'westus', text: 'westus'},
    {value: 'centralus', text: 'centralus'},
    {value: 'southcentralus', text: 'southcentralus'},
    {value: 'westus2', text: 'westus2'},
    {value: 'westus3', text: 'westus3'},
]
const compute_Memory = [
    {value: 'Azure Kubernetes Services', text: 'Azure Kubernetes Services'},
    {value: 'Azure Container Instance', text: 'Azure Container Instance'}
]
const SecondStep = (props) => {
  const { register, handleChange, handleSubmit, formState: {errors} } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Form className="input-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="col-md-6 offset-md-3">
        <Form.Group controlId="Azure_regions">
          <Form.Label>Please choose your preferred Azure Region.</Form.Label>
        <p>      
            <select {...register("azure_regions")}>
                <option value="eastus">East US</option>
                <option value="westus">West US</option>
                <option value="centralus">Central US</option>
                <option value="northcentralus">North Central US</option>
                <option value="westus2">West US 2</option>
                <option value="westus3">West US 3</option>
      </select></p>
        </Form.Group>
        <Form.Group controlId="compute_Memory">
        <Form.Label>Please select Azure Kubernetes Services or Azure Container Instances.</Form.Label>
        <p>      
            <select {...register("compute_Memory")}>
                <option value="aks">Azure Kubernetes Services</option>
                <option value="aci">Azure Container Instances</option>
            </select>
      </p>
        </Form.Group>
        <Button variant="primary" type="submit">
          Next
        </Button>
      </div>
    </Form>
  );
};

export default SecondStep;