import React, {useState, useEffect} from "react";
import ExpenseService from '../services/ExpenseService';
import IExpense from "../models/IExpense";

import ExpenseListItem from "./ExpenseListItem";
import ExpenseFilter from "./expenseFilter/ExpenseFilter";
import IExpenseFilter from "../models/IExpenseFilter";

import { Alert, Table } from "react-bootstrap";

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

  const updateExpenseItem = (expense: IExpense) => {
    const updatedExpenses:Array<IExpense> = expenses
      .filter(exp => exp.id !== expense.id && exp.paid !== expense.paid);
    
    setExpenses(updatedExpenses);
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

      <div className="card" style={{marginTop: '20px'}}>

        <Alert variant="secondary" hidden={expenses.length > 0} >
          0 Results. The search criteria has not found any result.
        </Alert>

        <Table striped={true} hidden={expenses.length === 0} >
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Cost</th>
              <th>Due Date</th>
              <th>Paid</th>
              <th>Payment Method</th>
            </tr>
          </thead>
          <tbody>
            {
              expenses.map((e, index) => (
                <ExpenseListItem
                  onItemUpdate={(expense) => updateExpenseItem(expense)} 
                  key={index} 
                  expense={e} />
              ))
            }
          </tbody>
          <tfoot>
            <tr>
              <td></td>
              <td><strong>Total</strong></td>
              <td>
                <strong>
                { expenses.reduce((acc, element) => acc + element.cost, 0) }
                </strong>
              </td>
              <td colSpan={3}></td>
            </tr>
          </tfoot>
        </Table>
      </div>      
    </div>
  );


}

export default ExpenseList;