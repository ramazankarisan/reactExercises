import React, { useContext } from 'react'
import { Table } from 'react-bootstrap'
import { PersonContext } from '../context/PersonContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faUserEdit } from '@fortawesome/free-solid-svg-icons';
import EditModal from './EditModal';

function PersonList() {
  const { state, dispatch } = useContext(PersonContext);
  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>

            <th> Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Actions</th>

          </tr>
        </thead>
        <tbody>
          {state.map((item, index) => {
            return (
              <tr key={index}  >
                <th>{item.name}</th>
                <th>{item.email}</th>
                <th>{item.phone}</th>
                <th style={{ width: '150px' }}>

                  {/* edit button, it shows us EditModal an inside of it we have EditForm */}
                  <button style={{ margin: '0 30px', border: '0px' }} onClick={() => dispatch({ type: 'edit', data: item, index: index })}>
                    <FontAwesomeIcon style={{ color: 'darkgreen' }} icon={faUserEdit} />
                  </button>
                  <EditModal />

                  {/* delete button */}
                  <button style={{ border: '0px' }} onClick={() => dispatch({ type: 'delete', data: index })}> <FontAwesomeIcon icon={faTrashAlt} style={{ color: 'red' }} />
                  </button>
                </th>
              </tr>
            )
          })}
        </tbody>
      </Table>
    </>
  )
}

export default PersonList
