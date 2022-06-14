import React, {useState, useEffect} from 'react'
import { Button, Modal } from "react-bootstrap";

type Props = {
  showModal: boolean;
  handleClose: () => void;
}

const ExpensePaymentModal: React.FC<Props> = ({showModal, handleClose}) => {

  return(
    <>
      <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading - Noturnall</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal! It is time to wake up wake up</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ExpensePaymentModal;