import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import ExpenseList from './components/ExpenseList';

function App() {
  return (
    <div className="App">
      <h1>Home inc WEB</h1>
      <ExpenseList />
    </div>
  );
}

export default App;
