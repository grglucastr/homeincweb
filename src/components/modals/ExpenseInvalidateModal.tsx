import React, { useState } from 'react';
import { Button, Modal, Alert } from "react-bootstrap";
import IExpense from '../../models/IExpense';
import ExpenseService from "../../services/ExpenseService";


type Props = {
  showModal: boolean;
  expense: IExpense;
  handleClose: (expense: IExpense) => void;
}

const ExpenseInvalidateModal: React.FC<Props> = ({showModal, expense, handleClose}) => {

  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [showFail, setShowFail] = useState<boolean>(false);
  const [deleted, setDeleted] = useState<boolean>(false);
  const [expenseDeleted, setExpenseDeleted] = useState<IExpense>(expense);

  const confirm = (id: number) => {
    ExpenseService.invalidateExpense(id)
      .then((result: any) => {
        if(result.status === 204) {
          setDeleted(true);
          setShowSuccess(true);
          setShowFail(false);

          setExpenseDeleted({
            ...expense,
            isActive: false
          });

        }
      })
      .catch((error: any) => {
        console.error(error);
        setDeleted(false);
        setShowSuccess(false);
        setShowFail(true);
      });
  }

  return (
    <>
      <Modal show={showModal} onHide={() => handleClose(expenseDeleted)}>
        <Modal.Header>
          <Modal.Title>Confirm Delete</Modal.Title>
          <button 
            type="button" 
            className="close" 
            aria-label="Close"
            onClick={() => handleClose(expenseDeleted)}>
            <span aria-hidden="true">&times;</span>
          </button>
        </Modal.Header>
        <Modal.Body>

          <Alert 
            variant='success' 
            hidden={!showSuccess}>
              Expense deleted.
          </Alert>

          <Alert 
            variant='warning'
            hidden={!showFail}>
              Something wrong happened, please try again later.
          </Alert>

          <h5>R$ {expense.cost}</h5>
          <h6><strong>{expense.title}</strong></h6>
          <div><span>Due Date: {expense.dueDate}</span></div>
          <div><span>Payment Method: {expense.paymentMethod}</span></div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose(expenseDeleted)}>
            Close
          </Button>
          <Button
            hidden={deleted} 
            variant="danger"
            onClick={() => confirm(expense.id)}>
            Confirm Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ExpenseInvalidateModal;