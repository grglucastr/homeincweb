import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Row, Col, Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import './expenseFilter.css';


import IExpenseFilter from "../../models/IExpenseFilter";
import ExpenseService from "../../services/ExpenseService";

const ExpenseFilter = ({onSearchFilter}: any) => {

  const [id, setId] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [month, setMonth] = useState<string>("");
  const [paid, setPaid] = useState<boolean>(false);
  const [years, setYears] = useState<Array<number>>([]);
  const [months, setMonths] = useState<Array<number>>([]);

  useEffect(() => {
    ExpenseService.getExpensesYears()
      .then((response: any) => {
        setYears(response.data);
      })
      .catch((err: any) => {
        console.error('Could not fetch the years corretly.', err);
      });
  }, []);


  const onYearChange = (selectedYear: string) => {
    setYear(selectedYear);
    ExpenseService.getExpenseMonths(parseInt(selectedYear))
      .then((response:any) => {
        setMonths(response.data);
      })
      .catch((err:any) => {
        console.error('Could not fetch the months for the selected year.', err);
      })
  }

  /*
  const months = [
    {label: '1', value:'1'},
    {label: '2', value:'2'},
    {label: '3', value:'3'},
    {label: '4', value:'4'},
    {label: '5', value:'5'},
    {label: '6', value:'6'}
  ]*/


  const formSubmit = (e: any) => {
    e.preventDefault();

    const idNumber = parseInt(id);

    const filterOptions: IExpenseFilter = {
      id:idNumber, title, year, month, paid
    };

    onSearchFilter(filterOptions);
  }

  return(
    <div>
      <Form onSubmit={formSubmit}>
        <Row>
          <Col>
            <Form.Group>
              <Form.Label htmlFor="id">ID:</Form.Label>
              <Form.Control id="id" type="text" value={id} onChange={e => setId(e.target.value) }/>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label htmlFor="title">Title:</Form.Label>
              <Form.Control id="title" type="text" value={title} onChange={e => setTitle(e.target.value) }/>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label htmlFor="">&nbsp;</Form.Label>
              <Form.Select
                className="form-control"  
                aria-label="Year"
                value={year}
                onChange={e => onYearChange(e.target.value)}>
                <option>Select Year</option>
                {
                  years.map((year:number) => (
                    <option key={year} value={year}>{year}</option>
                  ))
                }
              </Form.Select>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label htmlFor="">&nbsp;</Form.Label>
              <Form.Select
                className="form-control" 
                aria-label="Month"
                value={month}
                onChange={e => setMonth(e.target.value)}>
                <option>Month</option>
                {
                  months.map((month:number) => (
                    <option key={month} value={month}>{month}</option>
                  ))
                }
              </Form.Select>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label htmlFor="">&nbsp;</Form.Label>
              <Form.Check 
                checked={paid}
                type="checkbox"
                id="check-paid"
                label="Paid"
                onChange={()=> setPaid(!paid)}>
              </Form.Check>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label htmlFor="">&nbsp;</Form.Label>
              <div>
                <Button type="submit" variant="primary">Search</Button>
              </div>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group>
              <Form.Label htmlFor="">&nbsp;</Form.Label>
              <div style={{textAlign: 'right'}}>
                <Link to="/form">
                  <Button type="submit" variant="secondary">Add New</Button>
                </Link>
              </div>
            </Form.Group>
          </Col>
        </Row>      
      </Form>
    </div>
  )
}

export default ExpenseFilter;