import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import ExpenseList from './components/ExpenseList';

import { Panel } from 'primereact/panel';

function App() {
  return (
    <div className="App">
      <Panel>
        <h1>Home inc WEB</h1>
        <ExpenseList />
      </Panel>
    </div>
  );
}

export default App;
