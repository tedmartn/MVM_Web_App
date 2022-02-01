import React from 'react';
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
        <p><select value={azure_regions} onChange={handleChange}>
            {azure_regions.map(Item => {
                return (<option key={Item.value}>{Item.text}</option>);
            })}
        </select></p>
        </Form.Group>
        <Form.Group controlId="compute_Memory">
        <Form.Label>Please select Kubernetes or Azure Container Instances.</Form.Label>
        <p><select value={compute_Memory} onChange={handleChange}>
            {compute_Memory.map(Item => {
                return (<option key={Item.value}>{Item.text}</option>);
            })}
        </select></p>
        </Form.Group>
        <Button variant="primary" type="submit">
          Next
        </Button>
      </div>
    </Form>
  );
};

export default SecondStep;