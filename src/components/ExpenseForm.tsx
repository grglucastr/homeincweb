import React, {useState} from 'react';
import { Button, Form, Alert, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import IExpense from '../models/IExpense';

import ExpenseService from '../services/ExpenseService';

import type { DatePickerProps } from 'antd';
import { DatePicker } from 'antd';

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
  const navigate = useNavigate();

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

  const returnList = () => {
    navigate("/");
  }

  const dueDateChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
  };

  const invoiceDateChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
  };

  const startDateChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
  };

  const endDateChange: DatePickerProps['onChange'] = (date, dateString) => {
    console.log(date, dateString);
  };

  return(
    <div>
      <Alert key='success' variant='success' hidden={!showSuccess} >Expense registered!</Alert>
      <Alert key='warning' variant='warning' hidden={!showError}>Something wrong happened, please try again later.</Alert>

      <Card>
        <Card.Header as="h5">
          Expense Form Registration
          <button 
            type="button" 
            className="close" 
            aria-label="Close"
            onClick={returnList}>
            <span aria-hidden="true">&times;</span>
          </button>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={submitForm} >
            <Row>
              <Col xs={12} md={8}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label htmlFor="title">Title</Form.Label>
                  <Form.Control
                    id="title"
                    type="text"
                    placeholder="[COPEL] - Conta de Eletricidade"
                    value={title}
                    onChange={e => setTitle(e.target.value)}/>
                </Form.Group>
              </Col>
              <Col xs={12} md={2}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label htmlFor="cost">Cost</Form.Label>
                  <Form.Control
                    id="cost"
                    type="text" 
                    placeholder="220.90"
                    value={cost} 
                    onChange={e => setCost(e.target.value)} />
                </Form.Group>
              </Col>
              <Col xs={12} md={2}>
                <Form.Label htmlFor="status">Status</Form.Label>
                <Alert 
                  key='warning'
                  variant='warning'
                  style={{marginTop:'20px'}}>Waiting Payment</Alert>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label htmlFor="description">Description</Form.Label>
                  <Form.Control
                    id="description" 
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
                  <Form.Label htmlFor="dueDate">Due Date</Form.Label>
                  <DatePicker
                    id='dueDate'
                    className='form-control'
                    onChange={dueDateChange}/>
                </Form.Group>
              </Col>
              <Col xs={12} md={3}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label htmlFor="invoiceDate">Invoice Date</Form.Label>
                  <DatePicker
                    id='invoiceDate'
                    className='form-control'
                    onChange={invoiceDateChange}/>
                </Form.Group>
              </Col>
              <Col xs={12} md={3}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label htmlFor="periodStart">Period Start</Form.Label>
                  <DatePicker
                    id='periodStart'
                    className='form-control'
                    onChange={startDateChange}/>
                </Form.Group>
              </Col>
              <Col xs={12} md={3}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label htmlFor="periodEnd">Period End</Form.Label>
                  <DatePicker
                    id='endDate'
                    className='form-control'
                    onChange={endDateChange}/>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col xs={12} md={6}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label htmlFor="periodicity">Periodicity</Form.Label>
                  <Form.Select
                    id="periodicity" 
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
                  <Form.Label htmlFor="paymentMethod">Payment Method</Form.Label>
                  <Form.Select
                    id="paymentMethod" 
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
                  <Form.Label htmlFor='typableLine'>Typable Line</Form.Label>
                  <Form.Control
                    id="typableLine"
                    type="text" 
                    placeholder="84660000000-0 00000000002-2 20000000000-6 00248334881-5"
                    value={typableLine}
                    onChange={e => setTypableLine(e.target.value)}/>
                </Form.Group>
              </Col>
            </Row>
            
            <Row>
              <Col style={{textAlign: 'center'}}>
                <Form.Group>
                  <Button type="submit" variant="primary" style={{width:'100%'}}>Save</Button>
                </Form.Group>
              </Col>
            </Row>
          </Form>
        </Card.Body>
      </Card>
    </div>
  )
}

export default ExpenseForm;