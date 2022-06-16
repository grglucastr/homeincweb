import React, {useState} from "react";
import { Button } from "react-bootstrap";
import IExpense from '../models/IExpense';
import ExpensePaymentModal from "./ExpensePaymentModal";

type Props = {
  expense: IExpense;
  onItemUpdate: (expense: IExpense) => void;
}

const ExpenseListItem: React.FC<Props> = ({expense, onItemUpdate}) => {

  const [showPaymentModal, setShowPaymentModal] = useState<boolean>(false);
  const [selectedExpense, setSelectedExpense] = useState<IExpense>({cost:0});


  const handleShowPaymentModal = (expense: IExpense) => {
    setSelectedExpense(expense);
    setShowPaymentModal(true);
  }

  const handleClosePaymentModal = (expense: IExpense) => {
    onItemUpdate(expense);
    setShowPaymentModal(false);
  }

  const isPaid = (isPaid: any):boolean => {
    if(isPaid !== undefined){
      return isPaid;
    }
    return false;
  }

  return(
    <>
      <ExpensePaymentModal 
        showModal={showPaymentModal}
        expense={selectedExpense}
        handleClose={(expense) => handleClosePaymentModal(expense)} />

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
              onClick={() => handleShowPaymentModal(expense)}>
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