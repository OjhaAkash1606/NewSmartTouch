import React, { useState } from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Select from 'react-select';
import { Tab, Tabs, Table, button, Button,  Modal, ToggleButtonGroup, ToggleButton, InputGroup, Form } from 'react-bootstrap';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

function MarketWatch() {

    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

    return (
        <>
            <div className='container-fluid'>
                <div className='row lesspadding'>
                    <div className='col-12 mt-3'>
                        <Breadcrumb>
                            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>

                            <Breadcrumb.Item active>Option Chart</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-8 offset-md-2 market-watch'>
                        <div className='blue-bg position-relative'>

                            <button className='btn btn-primary plusicon' onClick={handleShow} ><i class="fa-solid fa-plus"></i></button>
                        
                            <Tabs
                                defaultActiveKey="Market Watch 1"
                                id="uncontrolled-tab-example"
                                className="market-watch-tablist"
                            >
                                 

                                <Tab eventKey="Market Watch 1" title="Market Watch 1" className='p-3' >

                                    <Table hover responsive size="sm" className='border mar-watch-tb' >
                                        <thead>
                                            <tr>
                                                <th colSpan={2} className="text-start" >Name</th>
                                                <th className='border-start text-start' >LTP (Change %)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td width="20%" className='text-start align-middle' >NIFTY</td>
                                                <td className='align-middle'>
                                                    <div className='d-flex gap-2'>
                                                        <button className='btn btn-sm font-semi-bold blue-bg buy-b'>B</button>
                                                        <button className='btn btn-sm font-semi-bold red-bg sell-b'>S</button>
                                                        <button className='btn btn-sm '><img src='./assets/img/graph-bl.png' /></button>
                                                        <button className='btn btn-sm '><img src='./assets/img/barimg.png' /></button>
                                                        <button className='btn btn-sm '><img src='./assets/img/bell.png' /></button>
                                                        <button className='btn btn-sm '><img src='./assets/img/delete.png' /></button>
                                                        <button className='btn btn-sm'><img src='./assets/img/dot.png' /></button>
                                                    </div>

                                                </td>
                                                <td className='align-middle text-start'>17620.70 <span className='gn-text font-medium'> +0.5% </span></td>
                                            </tr>
                                            <tr>
                                                <td className='text-start align-middle' >NIFTY</td>
                                                <td className='align-middle'>
                                                    <div className='d-flex gap-2'>
                                                        <button className='btn btn-sm font-semi-bold blue-bg buy-b'>B</button>
                                                        <button className='btn btn-sm font-semi-bold red-bg sell-b'>S</button>
                                                        <button className='btn btn-sm '><img src='./assets/img/graph-bl.png' /></button>
                                                        <button className='btn btn-sm '><img src='./assets/img/barimg.png' /></button>
                                                        <button className='btn btn-sm '><img src='./assets/img/bell.png' /></button>
                                                        <button className='btn btn-sm '><img src='./assets/img/delete.png' /></button>
                                                        <button className='btn btn-sm'><img src='./assets/img/dot.png' /></button>
                                                    </div>

                                                </td>
                                                <td className='align-middle text-start'>17620.70 <span className='gn-text font-medium'> +0.5% </span></td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Tab>
                                <Tab eventKey="Market Watch 2" title="Market Watch 2" className='p-3' >

                                    <Table hover responsive size="sm" className='border mar-watch-tb' >
                                        <thead>
                                            <tr>
                                                <th colSpan={2} className="text-start" >Name</th>
                                                <th className='border-start text-start' >LTP (Change %)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td width="20%" className='text-start align-middle' >NIFTY</td>
                                                <td className='align-middle'>
                                                    <div className='d-flex gap-2'>
                                                        <button className='btn btn-sm font-semi-bold blue-bg buy-b'>B</button>
                                                        <button className='btn btn-sm font-semi-bold red-bg sell-b'>S</button>
                                                        <button className='btn btn-sm '><img src='./assets/img/graph-bl.png' /></button>
                                                        <button className='btn btn-sm '><img src='./assets/img/barimg.png' /></button>
                                                        <button className='btn btn-sm '><img src='./assets/img/bell.png' /></button>
                                                        <button className='btn btn-sm '><img src='./assets/img/delete.png' /></button>
                                                        <button className='btn btn-sm'><img src='./assets/img/dot.png' /></button>
                                                    </div>

                                                </td>
                                                <td className='align-middle text-start'>17620.70 <span className='gn-text font-medium'> +0.5% </span></td>
                                            </tr>
                                            <tr>
                                                <td className='text-start align-middle' >NIFTY</td>
                                                <td className='align-middle'>
                                                    <div className='d-flex gap-2'>
                                                        <button className='btn btn-sm font-semi-bold blue-bg buy-b'>B</button>
                                                        <button className='btn btn-sm font-semi-bold red-bg sell-b'>S</button>
                                                        <button className='btn btn-sm '><img src='./assets/img/graph-bl.png' /></button>
                                                        <button className='btn btn-sm '><img src='./assets/img/barimg.png' /></button>
                                                        <button className='btn btn-sm '><img src='./assets/img/bell.png' /></button>
                                                        <button className='btn btn-sm '><img src='./assets/img/delete.png' /></button>
                                                        <button className='btn btn-sm'><img src='./assets/img/dot.png' /></button>
                                                    </div>

                                                </td>
                                                <td className='align-middle text-start'>17620.70 <span className='gn-text font-medium'> +0.5% </span></td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Tab>
                                <Tab eventKey="Market Watch 3" title="Market Watch 3" className='p-3' >

                                    <Table hover responsive size="sm" className='border mar-watch-tb' >
                                        <thead>
                                            <tr>
                                                <th colSpan={2} className="text-start" >Name</th>
                                                <th className='border-start text-start' >LTP (Change %)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td width="20%" className='text-start align-middle' >NIFTY</td>
                                                <td className='align-middle'>
                                                    <div className='d-flex gap-2'>
                                                        <button className='btn btn-sm font-semi-bold blue-bg buy-b'>B</button>
                                                        <button className='btn btn-sm font-semi-bold red-bg sell-b'>S</button>
                                                        <button className='btn btn-sm '><img src='./assets/img/graph-bl.png' /></button>
                                                        <button className='btn btn-sm '><img src='./assets/img/barimg.png' /></button>
                                                        <button className='btn btn-sm '><img src='./assets/img/bell.png' /></button>
                                                        <button className='btn btn-sm '><img src='./assets/img/delete.png' /></button>
                                                        <button className='btn btn-sm'><img src='./assets/img/dot.png' /></button>
                                                    </div>

                                                </td>
                                                <td className='align-middle text-start'>17620.70 <span className='gn-text font-medium'> +0.5% </span></td>
                                            </tr>
                                            <tr>
                                                <td className='text-start align-middle' >NIFTY</td>
                                                <td className='align-middle'>
                                                    <div className='d-flex gap-2'>
                                                        <button className='btn btn-sm font-semi-bold blue-bg buy-b'>B</button>
                                                        <button className='btn btn-sm font-semi-bold red-bg sell-b'>S</button>
                                                        <button className='btn btn-sm '><img src='./assets/img/graph-bl.png' /></button>
                                                        <button className='btn btn-sm '><img src='./assets/img/barimg.png' /></button>
                                                        <button className='btn btn-sm '><img src='./assets/img/bell.png' /></button>
                                                        <button className='btn btn-sm '><img src='./assets/img/delete.png' /></button>
                                                        <button className='btn btn-sm'><img src='./assets/img/dot.png' /></button>
                                                    </div>

                                                </td>
                                                <td className='align-middle text-start'>17620.70 <span className='gn-text font-medium'> +0.5% </span></td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Tab>
                                <Tab eventKey="Market Watch 4" title="Market Watch 4" className='p-3' >

                                    <Table hover responsive size="sm" className='border mar-watch-tb' >
                                        <thead>
                                            <tr>
                                                <th colSpan={2} className="text-start" >Name</th>
                                                <th className='border-start text-start' >LTP (Change %)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td width="20%" className='text-start align-middle' >NIFTY</td>
                                                <td className='align-middle'>
                                                    <div className='d-flex gap-2'>
                                                        <button className='btn btn-sm font-semi-bold blue-bg buy-b'>B</button>
                                                        <button className='btn btn-sm font-semi-bold red-bg sell-b'>S</button>
                                                        <button className='btn btn-sm '><img src='./assets/img/graph-bl.png' /></button>
                                                        <button className='btn btn-sm '><img src='./assets/img/barimg.png' /></button>
                                                        <button className='btn btn-sm '><img src='./assets/img/bell.png' /></button>
                                                        <button className='btn btn-sm '><img src='./assets/img/delete.png' /></button>
                                                        <button className='btn btn-sm'><img src='./assets/img/dot.png' /></button>
                                                    </div>

                                                </td>
                                                <td className='align-middle text-start'>17620.70 <span className='gn-text font-medium'> +0.5% </span></td>
                                            </tr>
                                            <tr>
                                                <td className='text-start align-middle' >NIFTY</td>
                                                <td className='align-middle'>
                                                    <div className='d-flex gap-2'>
                                                        <button className='btn btn-sm font-semi-bold blue-bg buy-b'>B</button>
                                                        <button className='btn btn-sm font-semi-bold red-bg sell-b'>S</button>
                                                        <button className='btn btn-sm '><img src='./assets/img/graph-bl.png' /></button>
                                                        <button className='btn btn-sm '><img src='./assets/img/barimg.png' /></button>
                                                        <button className='btn btn-sm '><img src='./assets/img/bell.png' /></button>
                                                        <button className='btn btn-sm '><img src='./assets/img/delete.png' /></button>
                                                        <button className='btn btn-sm'><img src='./assets/img/dot.png' /></button>
                                                    </div>

                                                </td>
                                                <td className='align-middle text-start'>17620.70 <span className='gn-text font-medium'> +0.5% </span></td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Tab>
                                <Tab eventKey="Market Watch 5" title="Market Watch 5" className='p-3' >

                                    <Table hover responsive size="sm" className='border mar-watch-tb' >
                                        <thead>
                                            <tr>
                                                <th colSpan={2} className="text-start" >Name</th>
                                                <th className='border-start text-start' >LTP (Change %)</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td width="20%" className='text-start align-middle' >NIFTY</td>
                                                <td className='align-middle'>
                                                    <div className='d-flex gap-2'>
                                                        <button className='btn btn-sm font-semi-bold blue-bg buy-b'>B</button>
                                                        <button className='btn btn-sm font-semi-bold red-bg sell-b'>S</button>
                                                        <button className='btn btn-sm '><img src='./assets/img/graph-bl.png' /></button>
                                                        <button className='btn btn-sm '><img src='./assets/img/barimg.png' /></button>
                                                        <button className='btn btn-sm '><img src='./assets/img/bell.png' /></button>
                                                        <button className='btn btn-sm '><img src='./assets/img/delete.png' /></button>
                                                        <button className='btn btn-sm'><img src='./assets/img/dot.png' /></button>
                                                    </div>

                                                </td>
                                                <td className='align-middle text-start'>17620.70 <span className='gn-text font-medium'> +0.5% </span></td>
                                            </tr>
                                            <tr>
                                                <td className='text-start align-middle' >NIFTY</td>
                                                <td className='align-middle'>
                                                    <div className='d-flex gap-2'>
                                                        <button className='btn btn-sm font-semi-bold blue-bg buy-b'>B</button>
                                                        <button className='btn btn-sm font-semi-bold red-bg sell-b'>S</button>
                                                        <button className='btn btn-sm '><img src='./assets/img/graph-bl.png' /></button>
                                                        <button className='btn btn-sm '><img src='./assets/img/barimg.png' /></button>
                                                        <button className='btn btn-sm '><img src='./assets/img/bell.png' /></button>
                                                        <button className='btn btn-sm '><img src='./assets/img/delete.png' /></button>
                                                        <button className='btn btn-sm'><img src='./assets/img/dot.png' /></button>
                                                    </div>

                                                </td>
                                                <td className='align-middle text-start'>17620.70 <span className='gn-text font-medium'> +0.5% </span></td>
                                            </tr>
                                        </tbody>
                                    </Table>
                                </Tab>
                            </Tabs>

                        </div>


                    </div>
                </div>
            </div>
           
           

      <Modal  size="lg" className='popupcl'  show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add to market watch</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
        <div className='row'>
            <div className='col-lg-4'>
            <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1" className="bg-transparent" ><i className="fa-solid fa-magnifying-glass me-2 searchicon grey-text "></i></InputGroup.Text>
       
         <Form.Control className='border-start-0'
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
        /> 
        
        

      </InputGroup>
            </div>
        </div>
       

        <p className='mb-1 font-semi-bold'>Contracts</p>
<div className='buttongpcl mb-3'>
    
        <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                                        <ToggleButton id="tbg-radio-1" value={1}>
                                        Equity
                                        </ToggleButton>
                                        <ToggleButton id="tbg-radio-2" value={2}>
                                        Future
                                        </ToggleButton>
                                        <ToggleButton id="tbg-radio-3" value={3}>
                                        Call
                                        </ToggleButton>
                                        <ToggleButton id="tbg-radio-4" value={4}>
                                        Put
                                        </ToggleButton>
                                    </ToggleButtonGroup> </div>

                                    <p className='mb-1 font-semi-bold '>Strike</p>
                                   
                                   <div className='row'>
                                    <div className='col-auto'>
                                    <select class="form-select form-select-sm mb-3" >
  <option selected>Open this select menu</option>
  <option value="1">One</option>
  <option value="2">Two</option>
  <option value="3">Three</option>
</select>
                                    </div>
                                   </div>
                                        
                                    

                                  

                                    <p className='mb-1 font-semi-bold'>Expiry</p>
<div className='buttongpcl gridbtns'>
    
        <ToggleButtonGroup type="radio" name="options11" defaultValue={11}  >
                                        <ToggleButton id="tbg-radio-11" value={11}>
                                        08 Sep
                                        </ToggleButton>
                                        <ToggleButton id="tbg-radio-22" value={22}>
                                        15 Sep
                                        </ToggleButton>
                                        <ToggleButton id="tbg-radio-33" value={33}>
                                        22 Sep
                                        </ToggleButton>
                                        <ToggleButton id="tbg-radio-44" value={44}>
                                        29 Sep
                                        </ToggleButton>
                                        <ToggleButton id="tbg-radio-55" value={55}>
                                        27 Oct
                                        </ToggleButton>
                                        <ToggleButton id="tbg-radio-66" value={66}>
                                        24 Nov
                                        </ToggleButton>
                                        <ToggleButton id="tbg-radio-77" value={77}>
                                        29 Dec
                                        </ToggleButton>
                                        <ToggleButton id="tbg-radio-88" value={88}>
                                        30 Mar
                                        </ToggleButton>
                                        <ToggleButton id="tbg-radio-99" value={99}>
                                        29 June
                                        </ToggleButton>
                                    </ToggleButtonGroup> </div>

        </Modal.Body>
        <Modal.Footer>
        <button className='btn btn-outline-secondary greybdrbtn rounded-5 minwd' >Cancel</button>
                    <button className='btn btn-primary rounded-gn-btn  rounded-5 minwd'>Add</button>
                    
          
        </Modal.Footer>
      </Modal>
        </>
    )
}

export default MarketWatch