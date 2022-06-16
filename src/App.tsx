import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import 'antd/dist/antd.css';
import ExpenseList from './components/ExpenseList';
import ExpenseForm from './components/ExpenseForm';

import { Container } from 'react-bootstrap';

import { 
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Container>
        <Link to="/">
          <h1>Home Inc.</h1>
        </Link>
        
        <Routes>
          <Route path="/" element={<ExpenseList />} />
          <Route path='/form' element={<ExpenseForm />} />
          <Route path='/form/:id' element={<ExpenseForm />} />
        </Routes>
    </Container>
    
  );
}

export default App;
