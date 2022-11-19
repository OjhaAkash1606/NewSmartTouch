import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';


export default function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar collapseOnSelect expand="lg" className='topheader' >
        <Container fluid>
          <Navbar.Brand href="#home" className='order-1 order-lg-1 logo ' ><img src="/assets/img/smarttouch-logo.png" /></Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" className=' order-3 order-lg-2' />
          <Navbar.Collapse id="responsive-navbar-nav" className=' order-3 order-lg-2'>
            <Nav className="me-auto ms-auto">
              <Nav.Link href="#features">Trade  </Nav.Link>
              <Nav.Link href="#pricing">Analyse</Nav.Link>
              <NavDropdown title="Watchlist" id="collasible-nav-dropdown">
                <NavDropdown.Item componentClass={Link} href="/OptionChart" to="/OptionChart">OptionChart</NavDropdown.Item>
                <NavDropdown.Item componentClass={Link} href="/MarketWatch" to="/MarketWatch">
                  Market Watch
                </NavDropdown.Item>
                <NavDropdown.Item componentClass={Link} href="/Orderbook" to="/Orderbook">
                  Orderbook
                </NavDropdown.Item>
                <NavDropdown.Item componentClass={Link} href="/Orderwindow" to="/Orderwindow">
                  Order Window
                </NavDropdown.Item>
                <NavDropdown.Item componentClass={Link} href="/RearrangeOrder" to="/RearrangeOrder">
                  RearrangeOrder
                </NavDropdown.Item>
                <NavDropdown.Item componentClass={Link} href="/positions" to="/positions">
                  positions
                </NavDropdown.Item>
                <NavDropdown.Item componentClass={Link} href="/StrategyBuilder" to="/StrategyBuilder">
                  StrategyBuilder
                </NavDropdown.Item>
                <NavDropdown.Item componentClass={Link} href="/dashboard" to="/dashboard">
                  Dashboard
                </NavDropdown.Item>
                <NavDropdown.Item componentClass={Link} href="/Screener" to="/Screener">
                  Screener
                </NavDropdown.Item>
                <NavDropdown.Item componentClass={Link} href="/Niftyheatmap" to="/Niftyheatmap">
                  Niftyheatmap
                </NavDropdown.Item>

              </NavDropdown>

              <Nav.Link href="#features">Positios</Nav.Link>
              <Nav.Link href="#features">Daily Market</Nav.Link>
              <Nav.Link onClick={handleShow}>Login</Nav.Link>
            </Nav>



          </Navbar.Collapse>

          <Dropdown align="end" className="usercl order-2 order-lg-4"  >
            <Dropdown.Toggle id="dropdown-basic">
              <img src='/assets/img/user.png' />
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

        </Container>
      </Navbar>
      <Modal show={show} onHide={handleClose} className="homepopup" >
        <Modal.Header closeButton>
          <Modal.Title className='d-flex flex-column align-items-center mx-auto'>
            <img src='./assets/img/login-logo.png' alt="" className='mt-3' />
            <h2>Login / Sign Up</h2>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='ps-4 pe-4 ps-xl-5 pe-xl-5 ' >

          <div className='form-container d-flex flex-column'>
            <Form.Control type="text" placeholder="LoginID/Email ID" className='mb-3' />
            <Form.Control type="text" placeholder="Password" className='mb-3' />
            <Button className='btn btn-primary rounded-gn-btn  rounded-5 mb-3 '  >
              Login
            </Button>

          </div>
          <p className='text-center mb-3'>
            <a href='#'> Forgot Password?</a>
          </p>




        </Modal.Body>
        <Modal.Footer className='border-top-0 justify-content-center'>
          <p className='text-center mb-0'>Don’t have an account? <a href='#'> Sign Up </a></p>
        </Modal.Footer>

      </Modal>
    </>
  )

}
