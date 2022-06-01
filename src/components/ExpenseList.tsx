import React, {useState, useEffect} from "react";
import ExpenseService from '../services/ExpenseService';
import IExpense from "../models/IExpense";

import ExpenseListItem from "./ExpenseListItem";
import ExpenseFilter from "./expenseFilter/ExpenseFilter";
import IExpenseFilter from "../models/IExpenseFilter";

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


      <table style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Cost</th>
            <th>Due Date</th>
            <th>Paid?</th>
            <th>Payment Method</th>
          </tr>
        </thead>
        <tbody>
          {
            expenses && expenses.map((exp, index) => (
              <ExpenseListItem key={index} expense={exp}  />
            ))
          }
        </tbody>
      </table>            
    </div>
  );


}

export default ExpenseList;