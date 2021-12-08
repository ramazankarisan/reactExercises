import React, { useContext } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { PersonContext } from '../context/PersonContext'
import PersonForm from './PersonForm'

function EditModal() {
  const { showEdit, handleCloseEdit } = useContext(PersonContext)
  return (
    <>
      <Modal
        show={showEdit}
        onHide={handleCloseEdit}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Edit Person</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <PersonForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseEdit}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>
    </>
  )
}

export default EditModal
