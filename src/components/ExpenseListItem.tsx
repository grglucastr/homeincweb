import React from "react";
import IExepense from '../models/IExpense';

type Props = {
  expense: IExepense;
}

const ExpenseListItem: React.FC<Props> = ({expense}) => {
  return(
    <tr>
      <td>{expense.id}</td>
      <td>{expense.title}</td>
      <td>{expense.cost}</td>
      <td>{expense.dueDate}</td>
      <td>{expense.paid ? 'true' : 'false'}</td>
      <td>{expense.paymentMethod}</td>
    </tr>
  )
}

export default ExpenseListItem;