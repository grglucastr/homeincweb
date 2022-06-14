import React, {useState} from "react";
import { Button } from "react-bootstrap";
import IExepense from '../models/IExpense';
import ExpensePaymentModal from "./ExpensePaymentModal";

type Props = {
  expense: IExepense;
}

const ExpenseListItem: React.FC<Props> = ({expense}) => {

  const [showPaymentModal, setShowPaymentModal] = useState<boolean>(false);

  const handleShowPaymentModal = (e: any) => setShowPaymentModal(true);
  const handleClosePaymentModal = () => setShowPaymentModal(false);

  const isPaid = (isPaid: any):boolean => {
    if(isPaid !== undefined){
      return isPaid;
    }
    return false;
  }

  return(
    <>
      <ExpensePaymentModal showModal={showPaymentModal} handleClose={handleClosePaymentModal} />
      <tr>
        <td>{expense.id}</td>
        <td>{expense.title}</td>
        <td>{expense.cost}</td>
        <td>{expense.dueDate}</td>
        <td>{isPaid(expense.paid) ? 'true':'false'}</td>
        <td>{expense.paymentMethod}</td>
        <td>{!isPaid(expense.paid) && 
            <Button 
              type="button" 
              variant="outline-success" 
              size="sm"
              onClick={handleShowPaymentModal}>
                Pay
            </Button> }
        </td>
        <td>
          <Button type="button" variant="outline-info" size="sm">Details</Button>
        </td>
      </tr>
    </>    
  )
}

export default ExpenseListItem;