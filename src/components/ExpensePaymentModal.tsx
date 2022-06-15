import React from 'react'
import { Button, Modal } from "react-bootstrap";
import IExpense from '../models/IExpense';

type Props = {
  showModal: boolean;
  expense: IExpense;
  handleClose: () => void;
}

const ExpensePaymentModal: React.FC<Props> = ({showModal, expense, handleClose}) => {

  return(
    <>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Confirm Payment</Modal.Title>
          <button 
            type="button" 
            className="close" 
            aria-label="Close"
            onClick={handleClose}>
            <span aria-hidden="true">&times;</span>
          </button>
        </Modal.Header>
        <Modal.Body>
          <h5>R$ {expense.cost}</h5>
          <h6><strong>{expense.title}</strong></h6>
          <div><span>Due Date: {expense.dueDate}</span></div>
          <div><span>Payment Method: {expense.paymentMethod}</span></div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleClose}>
            Confirm Pay
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ExpensePaymentModal;