import React, {useState, useEffect} from "react";
import ExpenseService from '../services/ExpenseService';
import IExpense from "../models/IExpense";

import ExpenseListItem from "./ExpenseListItem";
import ExpenseFilter from "./expenseFilter/ExpenseFilter";
import IExpenseFilter from "../models/IExpenseFilter";

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const ExpenseList: React.FC = () => {

  const [expenses, setExpenses] = useState<Array<IExpense>>([]);

  useEffect(() => {
    loadInitialData();
  }, []);


  const loadInitialData = () => {
    ExpenseService.getAll()
    .then((response:any) => {
      setExpenses(response.data)
    });
  }

  const retrieveExpensesWithOptions = (filterOptions: IExpenseFilter) => {

    if(filterOptions.id > 0){
      ExpenseService.getExpenseById(filterOptions.id)
      .then((response: any) => {
        setExpenses([response.data]);
      }).catch(() => {
        console.log('nothing found');
      });

      return;
    }

    ExpenseService.getExpensesWithFilter(filterOptions)
    .then((response:any) => {      
      setExpenses([...response.data])
    });
  }


  return (
    <div>
      <ExpenseFilter onSearchFilter={(filterOptions:IExpenseFilter) => retrieveExpensesWithOptions(filterOptions)}/>
      <div className="card">
        <DataTable value={expenses}>
          <Column field="id" header="Id"></Column>
          <Column field="title" header="Title"></Column>
          <Column field="cost" header="Cost"></Column>
          <Column field="dueDate" header="Due Date"></Column>
          <Column field="paid" header="Paid"></Column>
          <Column field="paymentMethod" header="Payment Method"></Column>
        </DataTable> 
      </div>            
    </div>
  );


}

export default ExpenseList;