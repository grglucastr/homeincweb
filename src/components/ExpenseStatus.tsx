import React from 'react';
import { Alert } from 'react-bootstrap';

type Props = {
  editing: boolean;
  paid: boolean;
}

const ExpenseStatus: React.FC<Props> = ({editing, paid}) => {
  return(
  <>
    {
      editing ? paid ? 
          <Alert key='success' variant='success'>Paid</Alert> :
          <Alert key='warning'variant='warning'>Waiting Payment</Alert>
        :
        <Alert key='primary' variant='primary'>New Expense</Alert>
    }
  </>);
}

export default ExpenseStatus;