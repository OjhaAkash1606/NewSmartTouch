import React from 'react';
import { Breadcrumb, Accordion, Badge, Table, Form, Dropdown } from 'react-bootstrap';

export default function Positions() {
    return (
        <>
            <div className='container-fluid position-page'>

                <div className='row'>
                    <div className='col-12 mt-3'>
                        <Breadcrumb>
                            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>

                            <Breadcrumb.Item active>Positions</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                </div>
                <div className='row lesspadding'>

                    <div className='col-12 col-xl-auto sidebar custom-chk'>

                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Positions</Accordion.Header>
                                <Accordion.Body>
                                    <Table responsive borderless hover size="sm" className='th-grey' >
                                        <thead>
                                            <tr>
                                                <th>Total P&L</th>
                                                <th>Total decay</th>
                                                <th>Unused Margin</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>
                                                    +1,112
                                                </td>
                                                <td>
                                                    Upgrade
                                                </td>
                                                <td>
                                                    17,355
                                                </td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                    <Dropdown align="end" className="order-2 order-lg-4 float-end settingbtn">
            <Dropdown.Toggle id="dropdown-basic">
            <i class="fa-solid fa-gear me-1"></i> 
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

                                   
                                    <Accordion defaultActiveKey="0" className='showing-all-pos clearfix'  >
                                        <Accordion.Item eventKey="0">
                                            <Accordion.Header>Showing All Positions</Accordion.Header>
                                            <Accordion.Body className='p-0'>
                                                <ul class="list-group">
                                                    <li class="list-group-item mb-3">
                                                        <div className='row align-items-center'>
                                                            <div className='col-auto'>
                                                                <Form.Group controlId="formBasicCheckbox">
                                                                    <Form.Check type="checkbox" />
                                                                </Form.Group>
                                                            </div>
                                                            <div className='col-auto'>
                                                                DRREDDY 4295.00    <span className='red-text font-medium'>-2.4%</span>

                                                                <p className='grey-text text-start mb-0'>3 Positions</p>
                                                            </div>
                                                            <div className='col-auto ms-auto'>
                                                                <span className='red-text font-medium gn-text' >
                                                                    -3,486
                                                                </span>
                                                            </div>

                                                        </div>




                                                    </li>
                                                    <li class="list-group-item mb-3">
                                                        <div className='row align-items-center'>
                                                            <div className='col-auto'>
                                                                <Form.Group controlId="formBasicCheckbox">
                                                                    <Form.Check type="checkbox" />
                                                                </Form.Group>
                                                            </div>
                                                            <div className='col-auto'>
                                                                DRREDDY 4295.00    <span className='red-text font-medium'>-2.4%</span>

                                                                <p className='grey-text text-start mb-0'>3 Positions</p>
                                                            </div>
                                                            <div className='col-auto ms-auto'>
                                                                <span className='red-text font-medium' >
                                                                    -3,486
                                                                </span>
                                                            </div>

                                                        </div>




                                                    </li>
                                                    <li class="list-group-item mb-3">
                                                        <div className='row align-items-center'>
                                                            <div className='col-auto'>
                                                                <Form.Group controlId="formBasicCheckbox">
                                                                    <Form.Check type="checkbox" />
                                                                </Form.Group>
                                                            </div>
                                                            <div className='col-auto'>
                                                                DRREDDY 4295.00    <span className='red-text font-medium'>-2.4%</span>

                                                                <p className='grey-text text-start mb-0'>3 Positions</p>
                                                            </div>
                                                            <div className='col-auto ms-auto'>
                                                                <span className='red-text font-medium' >
                                                                    -3,486
                                                                </span>
                                                            </div>

                                                        </div>




                                                    </li>
                                                </ul>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>

                                </Accordion.Body>
                            </Accordion.Item>

                        </Accordion>
                    </div>

                    <div className='col-xl'>

                        <div className='box position-div'>


                            <div className='row'>
                                <div className='col-lg'>
                                    <h3 className='text-start'>
                                        <span> <span className='font-reg'  > NIFTY </span>  1714.85 <span className="red-text" > +1.8% </span> </span> <img src="./assets/img/graph.png" class="me-3" /><img src="./assets/img/infoimg.png" class="me-3" />
                                    </h3>

                                    <div className='row justify-content-md-between mt-3 mb-3'>
                                        <div className='col col-md-auto'>
                                            <span className='grey-text'> Breakeven: </span>  Upgrade
                                        </div>
                                        <div className='col col-md-auto'>
                                            <span className='grey-text'> Warning: </span> <i class="fa-solid fa-arrow-up me-2"></i> Delivery
                                        </div>
                                    </div>

                                    <div className='row mt-3 mb-3'>
                                        <div className='col d-flex flex-column border-end'>
                                            <span className='grey-text' >Total P&L </span>
                                            <span className='red-text' > -3,486 </span>
                                        </div>
                                        <div className='col d-flex flex-column border-end'>
                                            <span className='grey-text' >Decay P&L </span>
                                            <span> Upgrade </span>
                                        </div>
                                        <div className='col d-flex flex-column border-end'>
                                            <span className='grey-text' >Max Profit </span>
                                            <span> Upgrade</span>
                                        </div>
                                        <div className='col d-flex flex-column'>
                                            <span className='grey-text' >Max Loss </span>
                                            <span> Upgrade</span>
                                        </div>
                                    </div>
                                    <div className='row lesspadding mt-4 mb-3'>
                                        <div className='col-auto'>
                                            <button className='btn btn-outline-primary btn-sm rounded-bl-btn posbtn'>Show All</button>
                                        </div>
                                        <div className='col-auto'>
                                            <button className='btn btn-outline-secondary btn-sm  greybdrbtn posbtn'>24 FEB</button>
                                        </div>
                                    </div>


                                    <Table hover size="sm" responsive className='custom-chk' >
                                        <thead>
                                            <tr><th><Form.Group controlId="formBasicCheckbox">
                                                <Form.Check type="checkbox" />
                                            </Form.Group></th> <th>Name</th> <th></th><th>Qty</th><th>Avg</th><th>LTP</th><th>P/L</th></tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>  <Form.Group controlId="formBasicCheckbox">
                                                    <Form.Check type="checkbox" />
                                                </Form.Group></td>
                                                <td><Badge bg="info">NRML</Badge></td>
                                                <td>24th Feb 4200 PE </td>
                                                <td>125</td>
                                                <td>81.24</td>
                                                <td>119.004</td>
                                                <td className='gn-text' >+4,720</td>
                                            </tr>
                                            <tr>
                                                <td>  <Form.Group controlId="formBasicCheckbox">
                                                    <Form.Check type="checkbox" />
                                                </Form.Group></td>
                                                <td><Badge pill bg="success">NRML</Badge></td>
                                                <td>24th Feb 4200 PE </td>
                                                <td>125</td>
                                                <td>81.24</td>
                                                <td>119.004</td>
                                                <td className='red-text' >+4,720</td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </div>

                                <div className='col-lg-3 border-start'>
                                    <p className='grey-text text-start mb-2' >Actions</p>
                                    <ul className='list-group list-group-flush'>
                                        <li className='list-group-item text-start border-0 ps-0 pe-0'><img src="./assets/img/lock.png" className='me-2' /> Analyse (3)</li>
                                        <li className='list-group-item text-start border-0 ps-0 pe-0'  ><img src="./assets/img/lock.png" className='me-2' /> Set P&L  Alert </li>
                                        <li className='list-group-item text-start border-0 ps-0 pe-0'><img src="./assets/img/exit.png" className='me-2' /> Exit Positions (3) (3)</li>
                                        <li className='list-group-item text-start border-0 ps-0 pe-0'><img src="./assets/img/lock.png" className='me-2' /> Add to Group</li>
                                        <li className='list-group-item text-start border-0 ps-0 pe-0'><img src="./assets/img/lock.png" className='me-2' /> Virtual Trade</li>
                                    </ul>

                                    <ul className='list-group list-group-flush'>
                                        <li className='list-group-item text-start border-0 d-flex justify-content-between ps-0 pe-0'>
                                            <span className='grey-text' > Delta </span> <span> Upgrade </span>
                                        </li>
                                        <li className='list-group-item text-start border-0 d-flex justify-content-between ps-0 pe-0' >
                                            <span className='grey-text' > Gamma </span> <span> Upgrade </span>
                                        </li>
                                        <li className='list-group-item text-start border-0 d-flex justify-content-between ps-0 pe-0'>
                                            <span className='grey-text' > Vega</span> <span> Upgrade </span></li>
                                        <li className='list-group-item text-start border-0 d-flex justify-content-between ps-0 pe-0'>  <span className='grey-text' > Theta </span> <span> Upgrade </span></li>

                                    </ul>
                                </div>

                            </div>
                        </div>



                    </div>


                </div>
            </div>


        </>
    )
}
