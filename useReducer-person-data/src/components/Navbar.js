import Button from '@restart/ui/esm/Button'
import React, { useContext } from 'react'
import { Navbar, Container } from 'react-bootstrap'
import { PersonContext } from '../context/PersonContext';
import AddModal from './AddModal';


const NavbarComp = () => {
  const { handleShow, setPerson } = useContext(PersonContext)

  return (
    <>
      <Navbar bg="primary" >
        <Container >
          <Navbar.Brand href="#home">Management</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>

              {/* button to add a new person */}
              <Button onClick={() => { handleShow(); setPerson({ name: '', email: '', phone: '' }) }} variant="success">Add Person</Button>

              {/* component, it will appear when the button is clicked and let us submit a new person info */}
              <AddModal />

            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarComp
