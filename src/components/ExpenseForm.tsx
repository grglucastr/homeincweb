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
    setDueDate(dateString)
  };

  const invoiceDateChange: DatePickerProps['onChange'] = (date, dateString) => {
    setInvoiceDate(dateString);
  };

  const startDateChange: DatePickerProps['onChange'] = (date, dateString) => {
    setPeriodStart(dateString);
  };

  const endDateChange: DatePickerProps['onChange'] = (date, dateString) => {
    setPeriodEnd(dateString);
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
                <Form.Group className="mb-3" controlId="title">
                  <Form.Label>Title</Form.Label>
                  <Form.Control
                    type="text"
                    value={title}
                    onChange={e => setTitle(e.target.value)}/>
                </Form.Group>
              </Col>
              <Col xs={12} md={2}>
                <Form.Group className="mb-3" controlId="cost">
                  <Form.Label>Cost</Form.Label>
                  <Form.Control
                    type="text" 
                    value={cost} 
                    onChange={e => setCost(e.target.value)} />
                </Form.Group>
              </Col>
              <Col xs={12} md={2}>
                <Form.Label htmlFor="status">Status</Form.Label>
                <Alert 
                  key='warning'
                  variant='warning'>Waiting Payment</Alert>
              </Col>
            </Row>

            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="description">
                  <Form.Label>Description</Form.Label>
                  <Form.Control
                    type="text" 
                    value={description}
                    onChange={e => setDescription(e.target.value)}/>
                  </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col xs={12} md={3}>
                <Form.Group className="mb-3" controlId="dueDate">
                  <Form.Label>Due Date</Form.Label>
                  <DatePicker
                    className='form-control'
                    onChange={dueDateChange}/>
                </Form.Group>
              </Col>
              <Col xs={12} md={3}>
                <Form.Group className="mb-3" controlId="invoiceDate">
                  <Form.Label>Invoice Date</Form.Label>
                  <DatePicker
                    className='form-control'
                    onChange={invoiceDateChange}/>
                </Form.Group>
              </Col>
              <Col xs={12} md={3}>
                <Form.Group className="mb-3" controlId="periodStart">
                  <Form.Label>Period Start</Form.Label>
                  <DatePicker
                    className='form-control'
                    onChange={startDateChange}/>
                </Form.Group>
              </Col>
              <Col xs={12} md={3}>
                <Form.Group className="mb-3" controlId="endDate">
                  <Form.Label>Period End</Form.Label>
                  <DatePicker
                    className='form-control'
                    onChange={endDateChange}/>
                </Form.Group>
              </Col>
            </Row>

            <Row>
              <Col xs={12} md={6}>
                <Form.Group className="mb-3" controlId="periodicity">
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
                <Form.Group className="mb-3" controlId="paymentMethod">
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
                <Form.Group className="mb-3" controlId="typableLine">
                  <Form.Label>Typable Line</Form.Label>
                  <Form.Control
                    type="text" 
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