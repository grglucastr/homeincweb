import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import ExpenseList from './components/ExpenseList';
import { Container } from 'react-bootstrap';

function App() {
  return (
    <Container>
      <h1>Home Inc.</h1>
      <ExpenseList />
    </Container>
  );
}

export default App;
