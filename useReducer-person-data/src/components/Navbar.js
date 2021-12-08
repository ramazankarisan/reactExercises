import Button from '@restart/ui/esm/Button'
import React, { useContext } from 'react'
import { Navbar, Container } from 'react-bootstrap'
import { PersonContext } from '../context/PersonContext';
import AddModal from './AddModal';


const NavbarComp = () => {
  const { handleShow } = useContext(PersonContext)

  return (
    <>
      <Navbar bg="primary" >
        <Container >
          <Navbar.Brand href="#home">Management</Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Button onClick={handleShow} variant="success">Add Person</Button>
              <AddModal />
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default NavbarComp
