import React, { useContext } from 'react'
import { Modal, Button } from 'react-bootstrap'
import { PersonContext } from '../context/PersonContext'
import EditForm from './EditForm'


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

          {/* it allows us to edit the list item that we chose by clicking the edit button on the right */}
          <EditForm />

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
