import { useState, useEffect } from "react";
import { Row, Col, Button } from "react-bootstrap";
import IExpenseFilter from "../../models/IExpenseFilter";

import Form from 'react-bootstrap/Form';
import './expenseFilter.css';
import { Link } from "react-router-dom";

const ExpenseFilter = ({onSearchFilter}: any) => {

  const [id, setId] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [year, setYear] = useState<string>("");
  const [month, setMonth] = useState<string>("");
  const [paid, setPaid] = useState<boolean>(false);

  const years = [
    {label: '2020', value:'2020'},
    {label: '2021', value:'2021'},
    {label: '2022', value:'2022'},
  ];

  const months = [
    {label: '1', value:'1'},
    {label: '2', value:'2'},
    {label: '3', value:'3'},
    {label: '4', value:'4'},
    {label: '5', value:'5'},
    {label: '6', value:'6'}
  ]


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
                onChange={e => setYear(e.target.value)}>
                <option>Year</option>
                <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
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
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
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