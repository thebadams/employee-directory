import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import reactDom from 'react-dom';

const FormComponent = () => {

  const handleForm = (e) => {
    e.preventDefault();
    const filter =document.querySelector('#filterInput').value;
    const rows = document.querySelectorAll('tbody tr')
    rows.forEach((row)=> {
      row.classList.remove('hidden')
    })
    rows.forEach((row) => {
      if(!row.dataset.name.includes(filter)) {
        row.classList.add('hidden')
      }
      }
      )
  }
  return (
    <Form>
      <Form.Group controlId="filter">
        <Form.Label>Search</Form.Label>
        <Form.Control type= "text" placeholder="Search By Name" id="filterInput"/>
        <Form.Text className="text-muted">Filter By Name</Form.Text>
      </Form.Group>
      <Button variant="primary" type="submit"  onClick={handleForm}>Submit</Button>
    </Form>
  )
}

export default FormComponent;
