import React, {useState, useEffect, FormEventHandler} from 'react';
import { Button, Form, Alert, Row, Col } from 'react-bootstrap';
import IExpense from '../models/IExpense';

import ExpenseService from '../services/ExpenseService';

const ExpenseForm: React.FC = () => {

  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [cost, setCost] = useState<string>("");
  const [dueDate, setDueDate] = useState<string>("");
  const [invoiceDate, setInvoiceDate] = useState<string>("");
  const [periodStart, setPeriodStart] = useState<string>("");
  const [periodEnd, setPeriodEnd] = useState<string>("");
  const [periodicity, setPeriodicity] = useState<string>("");
  const [paymentMethod, setPaymentMethod] = useState<string>("");
  const [typableLine, setTypableLine] = useState<string>("");
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [showError, setShowError] = useState<boolean>(false);

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const expense: IExpense = {
      title, 
      description, 
      cost:parseFloat(cost), 
      dueDate, 
      invoiceDate, 
      servicePeriodStart: periodStart,
      servicePeriodEnd: periodEnd,
      periodicity,
      paymentMethod,
      typableLine
    };      

    ExpenseService.postExpense(expense)
    .then((response: any)=>{
      console.log('response: ', response);

      if(response.status === 201){
        setShowSuccess(true);
        setShowError(false);
      }
    })
    .catch((err:any) => {
      console.error(err);
      setShowError(true);
      setShowSuccess(false);
    });

  }


  return(
    <div>

      <Alert key='success' variant='success' hidden={!showSuccess} >Expense registered!</Alert>
      <Alert key='warning' variant='warning' hidden={!showError}>Something wrong happened, please try again later.</Alert>

      <Form onSubmit={submitForm} >
        <Row>
          <Col xs={12} md={8}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Title</Form.Label>
              <Form.Control 
                type="text"
                placeholder="[COPEL] - Conta de Eletricidade"
                value={title}
                onChange={e => setTitle(e.target.value)}/>
            </Form.Group>
          </Col>
          <Col xs={12} md={4}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Cost</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="220.90"
                value={cost} 
                onChange={e => setCost(e.target.value)} />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Description</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="Conta referente ao mês de abril"
                value={description}
                onChange={e => setDescription(e.target.value)}/>
              </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={3}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Due Date</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="YYYY-MM-DD"
                value={dueDate}
                onChange={e => setDueDate(e.target.value)}/>
            </Form.Group>
          </Col>
          <Col xs={12} md={3}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Invoice Date</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="YYYY-MM-DD"
                value={invoiceDate}
                onChange={e => setInvoiceDate(e.target.value)} />
            </Form.Group>
          </Col>
          <Col xs={12} md={3}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Period Start</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="YYYY-MM-DD"
                value={periodStart}
                onChange={e => setPeriodStart(e.target.value)} />
            </Form.Group>
          </Col>
          <Col xs={12} md={3}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Period End</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="YYYY-MM-DD"
                value={periodEnd}
                onChange={e => setPeriodEnd(e.target.value)}/>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={6}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Periodicity</Form.Label>
              <Form.Select 
                aria-label="Default select example" 
                className="form-control"
                value={periodicity}
                onChange={e => setPeriodicity(e.target.value)}>
                <option>Select Periodicity</option>
                <option value="just_once">Just Once</option>
                <option value="daily">Daily</option>
                <option value="weekly">Weekly</option>
                <option value="monthly">Monthly</option>
                <option value="yearly">Yearly</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col xs={12} md={6}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Payment Method</Form.Label>
              <Form.Select 
                aria-label="Default select example" 
                className="form-control"
                value={paymentMethod}
                onChange={e => setPaymentMethod(e.target.value)}>
                <option>Select Payment Method</option>
                <option value="cash">Cash</option>
                <option value="debit card">Debit Card</option>
                <option value="credit card">Credit Card</option>
                <option value="ticket">Ticket</option>
                <option value="bank transfer">Bank Transfer</option>
                <option value="pix">Pix</option>
              </Form.Select>
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Typable Line</Form.Label>
              <Form.Control 
                type="text" 
                placeholder="84660000000-0 00000000002-2 20000000000-6 00248334881-5"
                value={typableLine}
                onChange={e => setTypableLine(e.target.value)}/>
            </Form.Group>
          </Col>
        </Row>
        
        <Row>
          <Col>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Button type="submit" variant="primary">Save Info</Button>
            </Form.Group>
          </Col>
        </Row>
      </Form>
    </div>
  )
}

export default ExpenseForm;