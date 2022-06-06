import React, {useState, useEffect} from 'react';
import { Button, Form } from 'react-bootstrap';

const ExpenseForm: React.FC = () => {

  return(
    <div>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="[COPEL] - Conta de Eletricidade" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Description</Form.Label>
          <Form.Control type="text" placeholder="Conta referente ao mês de abril" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Cost</Form.Label>
          <Form.Control type="text" placeholder="220.90" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Due Date</Form.Label>
          <Form.Control type="text" placeholder="YYYY-MM-DD" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Invoice Due Date</Form.Label>
          <Form.Control type="text" placeholder="YYYY-MM-DD" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Period Start</Form.Label>
          <Form.Control type="text" placeholder="YYYY-MM-DD" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Period End</Form.Label>
          <Form.Control type="text" placeholder="YYYY-MM-DD" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Periodicity</Form.Label>
          <Form.Select aria-label="Default select example" className="form-control">
            <option>Select Periodicity</option>
            <option value="just_once">Just Once</option>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Payment Method</Form.Label>
          <Form.Select aria-label="Default select example" className="form-control">
            <option>Select Payment Method</option>
            <option value="cash">Cash</option>
            <option value="debit card">Debit Card</option>
            <option value="credit card">Credit Card</option>
            <option value="ticket">Ticket</option>
            <option value="bank transfer">Bank Transfer</option>
            <option value="pix">Pix</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Typable Line</Form.Label>
          <Form.Control type="text" placeholder="84660000000-0 00000000002-2 20000000000-6 00248334881-5" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Button type="submit" variant="primary">Save Info</Button>
        </Form.Group>
      </Form>
    </div>
  )
}

export default ExpenseForm;