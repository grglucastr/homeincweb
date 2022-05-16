import React, {useState, useEffect, ChangeEvent} from "react";
import ExpenseService from '../services/ExpenseService';
import IExpense from "../models/IExpense";

const ExpenseList: React.FC = () => {

  const [expenses, setExpenses] = useState<Array<IExpense>>([]);

  useEffect(() => {
    retrieveExpenses();
  });


  const retrieveExpenses = () => {
    console.log('Fetching expenses...');
    ExpenseService.getAll()
    .then((response:any) => {
      setExpenses(response.data)
      console.log('Expenses: ', response.data);
    });
  }


  return (
    <div>
      <table style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>
        <thead>
          <tr>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {
            expenses && expenses.map((exp, index) => (
              <tr key={index}>
                <td>{exp.title}</td>
              </tr>
            ))
          }
        </tbody>
      </table>            
    </div>
  );


}

export default ExpenseList;