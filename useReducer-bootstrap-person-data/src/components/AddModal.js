import React, { useContext } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { PersonContext } from '../context/PersonContext'
import PersonForm from './PersonForm'

function AddModal() {
  const { show, handleClose } = useContext(PersonContext)
  return (
    <>

      {/* component,  when it is shown, we will see a form, which enables to add a new person info */}
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Person</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          {/* this form will let us submit some new data and we will see it in PersonList component */}
          <PersonForm />

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>
    </>
  )
}

export default AddModal
