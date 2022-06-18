import React, {useState} from 'react'
import { Button, Modal, Alert } from "react-bootstrap";
import IExpense from '../../models/IExpense';
import ExpenseService from "../../services/ExpenseService";

type Props = {
  showModal: boolean;
  expense: IExpense;
  handleClose: (expense: IExpense) => void;
}

const ExpensePaymentModal: React.FC<Props> = ({showModal, expense, handleClose}) => {

  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const [showFail, setShowFail] = useState<boolean>(false);
  const [showPayButton, setShowPayButton] = useState<boolean>(true);
  const [expenseObj, setExpenseObj] = useState<IExpense>(expense);


  const confirmPayment = (id: number) => {
    ExpenseService.payExpense(id).then((response:any) => {
      const updatedExpense:IExpense = {
        ...expense,
        paid:true
      };

      setExpenseObj(updatedExpense);
      setShowSuccess(true);
      setShowFail(false);
      setShowPayButton(false);
    }).catch((err:any) => {
      setShowFail(true);
      setShowSuccess(false);
      console.error(`Something wrong happened during registering payment.`);
      console.error(err);
    });
  }

  return(
    <>
      <Modal show={showModal} onHide={() => handleClose(expenseObj)}>
        <Modal.Header>
          <Modal.Title>Confirm Payment</Modal.Title>
          <button 
            type="button" 
            className="close" 
            aria-label="Close"
            onClick={() => handleClose(expenseObj)}>
            <span aria-hidden="true">&times;</span>
          </button>
        </Modal.Header>
        <Modal.Body>

          <Alert 
            variant='success' 
            hidden={!showSuccess}>
              Payment Successful!
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
          <Button variant="secondary" onClick={() => handleClose(expenseObj)}>
            Close
          </Button>
          <Button 
            variant="success"
            hidden={!showPayButton} 
            onClick={() => confirmPayment(expense.id)}>
            Confirm Pay
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ExpensePaymentModal;