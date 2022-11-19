import React, { Component } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
// import Header from '../Component/Header';
import Accordion from 'react-bootstrap/Accordion';
import Slider from 'react-rangeslider';
//import { Scrollbars } from 'react-custom-scrollbars';
import '../../node_modules/react-rangeslider/lib/index.css';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
//import ButtonGroup from 'react-bootstrap/ButtonGroup';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faCoffee, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

import Table from 'react-bootstrap/Table';
import { Modal, ToggleButtonGroup, ToggleButton } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import ReactApexChart from 'react-apexcharts';


export default class main extends Component {

    state = {
        isOpen: false
    };

    openModal = () => this.setState({ isOpen: true });
    closeModal = () => this.setState({ isOpen: false });

    constructor(props) {
        super(props);

        this.state = {

            series: [{
                name: 'Sales',
                data: [4, 3, 10, 9, 29, 19, 22, 9, 12, 7, 19, 5, 13, 9, 17, 2, 7, 5]
            }],
            options: {
                chart: {
                    height: 350,
                    type: 'line',
                },
                forecastDataPoints: {
                    count: 7
                },
                stroke: {
                    width: 5,
                    curve: 'smooth'
                },
                xaxis: {
                    type: 'datetime',
                    categories: ['1/11/2000', '2/11/2000', '3/11/2000', '4/11/2000', '5/11/2000', '6/11/2000', '7/11/2000', '8/11/2000', '9/11/2000', '10/11/2000', '11/11/2000', '12/11/2000', '1/11/2001', '2/11/2001', '3/11/2001', '4/11/2001', '5/11/2001', '6/11/2001'],
                    tickAmount: 10,
                    labels: {
                        formatter: function (value, timestamp, opts) {
                            return opts.dateFormatter(new Date(timestamp), 'dd MMM')
                        }
                    }
                },
                title: {
                    text: 'Forecast',
                    align: 'left',
                    style: {
                        fontSize: "16px",
                        color: '#666'
                    }
                },
                fill: {
                    type: 'gradient',
                    gradient: {
                        shade: 'dark',
                        gradientToColors: ['#FDD835'],
                        shadeIntensity: 1,
                        type: 'horizontal',
                        opacityFrom: 1,
                        opacityTo: 1,
                        stops: [0, 100, 100, 100]
                    },
                },
                yaxis: {
                    min: -10,
                    max: 40
                }
            },


        };
    }



    handleOnChange = (value) => {
        this.setState({
            volume: value
        })
    }
    render() {
        const renderTooltip = (props) => (
            <Tooltip id="button-tooltip" {...props}>
                Simple tooltip
            </Tooltip>
        );
        return (
            <>
                {/* <Header /> */}

                <div className='container-fluid'>
                    <div className='row'>
                        <div className='col-12 mt-3'>
                            <Breadcrumb>
                                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                                <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                                    Library
                                </Breadcrumb.Item>
                                <Breadcrumb.Item active>Data</Breadcrumb.Item>
                            </Breadcrumb>
                        </div>
                    </div>
                    <div className='row lesspadding'>

                        <div className='col-12 col-xl-auto sidebar custom-chk'>
                            <div className='row lesspadding align-items-center mb-3 flex-nowrap'>
                                <div className='col'>
                                    <div className='inputbdr d-flex align-items-center'>
                                        <i className="fa-solid fa-magnifying-glass me-4 searchicon"></i>
                                        <input className='form-control border-0 me-4 sminput' onClick={this.openModal} />
                                        <img src='./assets/img/graph.png' className='me-3' />
                                        <img src='./assets/img/infoimg.png' className='me-3' />
                                    </div>

                                </div>
                                <div className='col-auto'>
                                    <img src='./assets/img/settingimg.png' />
                                </div>
                            </div>
                            <div className='box mb-3'>
                                <div className='box-header d-flex justify-content-between'>
                                    <h3> New strategy                                       </h3>
                                    <a href='#' className='text-decoration-none font-semi-bold' > Clear new trades</a>
                                </div>
                                <div className='row mt-2 mb-2'>
                                    <div className='col-12 d-flex'>
                                        <button class="btn btn-sm btn-outline-primary ms-auto rounded-bl-btn ">Add new traders</button>
                                    </div>
                                </div>
                                <div className='row justify-content-between mt-2 mb-2'>
                                    <div className='col-auto'>
                                        <Form.Group controlId="formBasicCheckbox">
                                            <Form.Check type="checkbox" label="2 trades selected" />
                                        </Form.Group>
                                    </div>
                                    <div className='col-auto'>
                                        <a href="#" className='text-decoration-none font-semi-bold'> Reset Prices </a>
                                    </div>
                                </div>

                                <div className='box-body mobilescrollbar'>

                                    <Table hover size="sm" className='tablecl'>
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>B/S</th>
                                                <th>Expiry</th>
                                                <th>Strike</th>
                                                <th></th>
                                                <th>Lots</th>
                                                <th>Price
                                                    <OverlayTrigger
                                                        placement="right"
                                                        delay={{ show: 250, hide: 400 }}
                                                        overlay={renderTooltip}
                                                    ><i className="fa-regular fa-circle-question ms-1"></i>

                                                    </OverlayTrigger>
                                                </th>
                                                <th></th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>  <Form.Group controlId="formBasicCheckbox">
                                                    <Form.Check type="checkbox" />
                                                </Form.Group></td>
                                                <td><span className="buytext" >B</span></td>
                                                <td><select className="form-select form-select-sm" aria-label=".form-select-sm example">
                                                    <option >Open this select menu</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select></td>
                                                <td> <div className="input-group flex-nowrap inc-dec-gp w-auto ms-auto">
                                                    <div className="input-group-prepend">
                                                        <button className="btn btn-sm btn-outline-secondary leftbtn" type="button" >-</button>
                                                    </div>
                                                    <input type="text" className="form-control-sm increment-input" />
                                                    <div className="input-group-prepend">
                                                        <button className="btn btn-sm btn-outline-secondary rightbtn" type="button" >+</button>
                                                    </div>
                                                </div></td>
                                                <td>
                                                    <div className='sm-box'>CE</div>
                                                </td>
                                                <td><select className="form-select form-select-sm" aria-label=".form-select-sm example">
                                                    <option >Open this select menu</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select></td>
                                                <td>
                                                    <input className='form-control form-control-sm' />
                                                </td>
                                                <td><img src="./assets/img/barimg.png" /></td>
                                                <td><i className="fa-regular fa-trash-can red-text"></i></td>
                                            </tr>
                                            <tr>
                                                <td>  <Form.Group controlId="formBasicCheckbox">
                                                    <Form.Check type="checkbox" />
                                                </Form.Group></td>
                                                <td><span className="selltext" >S</span></td>
                                                <td><select className="form-select form-select-sm" aria-label=".form-select-sm example">
                                                    <option >Open this select menu</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select></td>
                                                <td> <div className="input-group flex-nowrap inc-dec-gp w-auto ms-auto">
                                                    <div className="input-group-prepend">
                                                        <button className="btn btn-sm btn-outline-secondary leftbtn" type="button" >-</button>
                                                    </div>
                                                    <input type="text" className="form-control-sm increment-input" />
                                                    <div className="input-group-prepend">
                                                        <button className="btn btn-sm btn-outline-secondary rightbtn" type="button" >+</button>
                                                    </div>
                                                </div></td>
                                                <td>
                                                    <div className='sm-box'>CE</div>
                                                </td>
                                                <td><select className="form-select form-select-sm" aria-label=".form-select-sm example">
                                                    <option >Open this select menu</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select></td>
                                                <td>
                                                    <input className='form-control form-control-sm' />
                                                </td>
                                                <td><img src="./assets/img/barimg.png" /></td>
                                                <td><i className="fa-regular fa-trash-can red-text "></i></td>
                                            </tr>

                                        </tbody>
                                    </Table>

                                    <div className='row'>
                                        <div className='col-lg-6 mb-3 d-flex align-items-center justify-content-center'>
                                            <span className='me-2' >Lot Multiplier</span>   <div className="input-group flex-nowrap inc-dec-gp w-auto">
                                                <div className="input-group-prepend">
                                                    <button className="btn btn-sm btn-outline-secondary leftbtn" type="button" >-</button>
                                                </div>
                                                <input type="text" className="form-control-sm increment-input" />
                                                <div className="input-group-prepend">
                                                    <button className="btn btn-sm btn-outline-secondary rightbtn" type="button" >+</button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-lg-6 mb-3 d-flex align-items-center'>
                                            Net premium <strong className='ms-2'> Pay 2,908 </strong>
                                        </div>

                                    </div>

                                </div>
                                <div className='box-footer d-flex justify-content-around align-items-center'>
                                    <button className='btn btn-outline-primary btn-sm rounded-btn'>
                                        Vitual Trade
                                    </button>
                                    <button className='btn btn-outline-primary btn-sm rounded-btn'>
                                        Trade All
                                    </button>
                                    <button className='btn btn-outline-primary btn-sm rounded-btn'>
                                        Add / Edit
                                    </button>
                                    <img src='./assets/img/grid-icon.png' alt="" />

                                </div>

                            </div>

                            <table hover size="sm" className="table bg-white positiontable">
                                <tbody>
                                    <tr>
                                        <td className='align-middle' >
                                            <Form.Group controlId="formBasicCheckbox">
                                                <Form.Check type="checkbox" />
                                            </Form.Group>
                                        </td>
                                        <td className='text-start'>
                                            <p className='mb-2'>
                                                <span className="buytext" >B</span> 24 JUN 33000 PE NRML
                                            </p>
                                            <div className='row gridrow lesspadding'>
                                                <div class="col-auto">
                                                    <span className='grey-text'> Lots:</span> <span>1 </span>
                                                </div>
                                                <div className='col-auto grey-text'>
                                                    |
                                                </div>
                                                <div className='col-auto'>
                                                    <span className='grey-text'>  Avg Price: </span> <span> 910.00 </span>
                                                </div>
                                                <div className='col-auto grey-text'>
                                                    |
                                                </div>
                                                <div className='col-auto text-end'>
                                                    <span className='grey-text'> LTP: </span> 58.55
                                                </div>
                                            </div>


                                        </td>
                                        <td>P&L</td>
                                        <td className='pricetext' >21,286</td>
                                    </tr>
                                    <tr>
                                        <td className='align-middle' >
                                            <Form.Group controlId="formBasicCheckbox">
                                                <Form.Check type="checkbox" />
                                            </Form.Group>
                                        </td>
                                        <td className='text-start'>
                                            <p className='mb-2'>
                                                <span className="buytext" >B</span> 24 JUN 33000 PE NRML
                                            </p>
                                            <div className='row gridrow lesspadding'>
                                                <div class="col-auto">
                                                    <span className='grey-text'> Lots:</span> <span>1 </span>
                                                </div>
                                                <div className='col-auto grey-text'>
                                                    |
                                                </div>
                                                <div className='col-auto'>
                                                    <span className='grey-text'>  Avg Price: </span> <span> 910.00 </span>
                                                </div>
                                                <div className='col-auto grey-text'>
                                                    |
                                                </div>
                                                <div className='col-auto text-end'>
                                                    <span className='grey-text'> LTP: </span> 58.55
                                                </div>
                                            </div>


                                        </td>
                                        <td>P&L</td>
                                        <td className='font-medium red-text' >21,286</td>
                                    </tr>
                                    <tr>
                                        <td className='align-middle' >
                                            <Form.Group controlId="formBasicCheckbox">
                                                <Form.Check type="checkbox" />
                                            </Form.Group>
                                        </td>
                                        <td className='text-start'>
                                            <p className='mb-2'>
                                                <span className="buytext" >B</span> 24 JUN 33000 PE NRML
                                            </p>
                                            <div className='row gridrow lesspadding'>
                                                <div class="col-auto">
                                                    <span className='grey-text'> Lots:</span> <span>1 </span>
                                                </div>
                                                <div className='col-auto grey-text'>
                                                    |
                                                </div>
                                                <div className='col-auto'>
                                                    <span className='grey-text'>  Avg Price: </span> <span> 910.00 </span>
                                                </div>
                                                <div className='col-auto grey-text'>
                                                    |
                                                </div>
                                                <div className='col-auto text-end'>
                                                    <span className='grey-text'> LTP: </span> 58.55
                                                </div>
                                            </div>


                                        </td>
                                        <td>P&L</td>
                                        <td className='font-medium gn-text' >21,286</td>
                                    </tr>

                                </tbody>
                            </table>

                            <Accordion defaultActiveKey="0">
                                <Accordion.Item eventKey="0">
                                    <Accordion.Header>Positions</Accordion.Header>
                                    <Accordion.Body>
                                        <p className='grey-text'>Please click on a stock  to load the positions</p>

                                        <ul className='accordianlisting'>
                                            <li className='d-flex justify-content-between text-uppercase' > <span> NIFTY 15811.85 +0.1% </span> <span> +1.15L% </span></li>
                                            <li className='d-flex justify-content-between text-uppercase'><span>BANKNIFTY 34950.60 <span className='red-text'> -0.3% </span></span>  <span className='red-text'> -4.139% </span></li>
                                        </ul>

                                    </Accordion.Body>
                                </Accordion.Item>

                            </Accordion>

                        </div>
                        <div className='col-12 col-xl'>
                            <div className='row lesspadding'>
                                <div className='col-md-4 mb-3'>
                                    <div className='box'>
                                        <ul className='box-list'>
                                            <li><span className="text-content">Max profit </span>  <span className="text-value text-success">2,005 (8%) </span></li>
                                            <li><span className="text-content">Max loss
                                                <OverlayTrigger
                                                    placement="right"
                                                    delay={{ show: 250, hide: 400 }}
                                                    overlay={renderTooltip}
                                                ><i className="fa-regular fa-circle-question ms-1"></i>

                                                </OverlayTrigger>
                                            </span>  <span className="red-text">2,005 (8%) </span></li>
                                            <li><span className="text-content">Risk / Reward </span>  <span className="text-value">1.5</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='col-md-4 mb-3'>
                                    <div className='box'>
                                        <ul className='box-list'>
                                            <li><span className="text-content">Breakeven
                                                <OverlayTrigger
                                                    placement="right"
                                                    delay={{ show: 250, hide: 400 }}
                                                    overlay={renderTooltip}
                                                ><i className="fa-regular fa-circle-question ms-1"></i>

                                                </OverlayTrigger>
                                            </span>  <span className="text-value text-success">2,005 (8%) </span></li>
                                            <li><span className="text-content">PDP
                                                <OverlayTrigger
                                                    placement="right"
                                                    delay={{ show: 250, hide: 400 }}
                                                    overlay={renderTooltip}
                                                ><i className="fa-regular fa-circle-question ms-1"></i>

                                                </OverlayTrigger>
                                            </span>  <span className="text-value red-text">2,005 (8%) </span></li>
                                            <li><span className="text-content">Projected return</span>  <span className="text-value">1.5</span></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className='col-md-4 mb-3'>
                                    <div className='box'>
                                        <ul className='box-list'>
                                            <li><span className="text-content">Funds needed
                                                <OverlayTrigger
                                                    placement="right"
                                                    delay={{ show: 250, hide: 400 }}
                                                    overlay={renderTooltip}
                                                ><i className="fa-regular fa-circle-question ms-1"></i>

                                                </OverlayTrigger> </span>  <span className="text-success text-value">2,005 (8%) </span></li>
                                            <li><span className="text-content">Margin needed
                                                <OverlayTrigger
                                                    placement="right"
                                                    delay={{ show: 250, hide: 400 }}
                                                    overlay={renderTooltip}
                                                ><i className="fa-regular fa-circle-question ms-1"></i>

                                                </OverlayTrigger>
                                            </span>  <span className="red-text text-value">2,005 (8%) </span></li>
                                            <li><span className="text-content">Risk / Reward </span>  <span className="text-value">1.5</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-12 chartsection'>
                                    <div className='box mb-3'>

                                        <Tabs
                                            defaultActiveKey="graph"
                                            id="uncontrolled-tab-example"
                                            className="mb-3"
                                        >
                                            <Tab eventKey="graph" title="Graph">
                                                <div id="chart">
                                                    <ReactApexChart options={this.state.options} series={this.state.series} type="line" height={350} />
                                                </div>
                                            </Tab>
                                            <Tab eventKey="pnl-table" title="P&L Table">

                                                <table className='table greybg-header' hover size="sm">

                                                    <thead>
                                                        <tr>
                                                            <th className='text-start'
                                                            >Instrument</th>
                                                            <th>Target P&L</th>
                                                            <th>Target Price</th>
                                                            <th>Entry Price</th>
                                                            <th>LTP</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td className='text-start'>
                                                                <p className="mb-2"><span className="buytext">B</span> 24 JUN 33000 PE NRML</p>
                                                            </td>
                                                            <td>
                                                                1,970
                                                            </td>
                                                            <td>
                                                                1,970
                                                            </td>
                                                            <td>
                                                                1,970
                                                            </td>
                                                            <td>
                                                                1,970
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className='text-start'>
                                                                <p class="mb-2"><span className="buytext">B</span> 24 JUN 33000 PE NRML</p>
                                                            </td>
                                                            <td>
                                                                1,970
                                                            </td>
                                                            <td>
                                                                1,970
                                                            </td>
                                                            <td>
                                                                1,970
                                                            </td>
                                                            <td>
                                                                1,970
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className='text-start'>
                                                                <p className="mb-2"><span className="buytext">B</span> 24 JUN 33000 PE NRML</p>
                                                            </td>
                                                            <td>
                                                                1,970
                                                            </td>
                                                            <td>
                                                                1,970
                                                            </td>
                                                            <td>
                                                                1,970
                                                            </td>
                                                            <td>
                                                                1,970
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className='text-start'> <span className='font-medium'>Total</span>
                                                                <span className='red-text font-medium' > Projected
                                                                    <OverlayTrigger
                                                                        placement="right"
                                                                        delay={{ show: 250, hide: 400 }}
                                                                        overlay={renderTooltip}
                                                                    ><i className="fa-regular fa-circle-question ms-1"></i>

                                                                    </OverlayTrigger>
                                                                </span></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                            <td></td>
                                                        </tr>
                                                    </tbody>

                                                </table>

                                            </Tab>
                                            <Tab eventKey="Greeks" title="Greeks">
                                                <table className='table greybg-header' hover size="sm">

                                                    <thead>
                                                        <tr>
                                                            <th className='text-start'
                                                            >Instrument</th>
                                                            <th>Delta</th>
                                                            <th>Theta</th>
                                                            <th>Decay</th>
                                                            <th>Gamma</th>
                                                            <th>Vega</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr>
                                                            <td className='text-start'>
                                                                <p className="mb-2"><span className="buytext">B</span> 24 JUN 33000 PE NRML</p>
                                                            </td>
                                                            <td>
                                                                1,970
                                                            </td>
                                                            <td>
                                                                1,970
                                                            </td>
                                                            <td>
                                                                1,970
                                                            </td>
                                                            <td>
                                                                1,970
                                                            </td>
                                                            <td>
                                                                1,970
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className='text-start'>
                                                                <p className="mb-2"><span className="buytext">B</span> 24 JUN 33000 PE NRML</p>
                                                            </td>
                                                            <td>
                                                                1,970
                                                            </td>
                                                            <td>
                                                                1,970
                                                            </td>
                                                            <td>
                                                                1,970
                                                            </td>
                                                            <td>
                                                                1,970
                                                            </td>
                                                            <td>
                                                                1,970
                                                            </td>
                                                        </tr>
                                                        <tr>
                                                            <td className='text-start'>
                                                                <p className="mb-2"><span className="buytext">B</span> 24 JUN 33000 PE NRML</p>
                                                            </td>
                                                            <td>
                                                                1,970
                                                            </td>
                                                            <td>
                                                                1,970
                                                            </td>
                                                            <td>
                                                                1,970
                                                            </td>
                                                            <td>
                                                                1,970
                                                            </td>
                                                            <td>
                                                                1,970
                                                            </td>
                                                        </tr>



                                                    </tbody>

                                                </table>
                                            </Tab>
                                            <Tab eventKey="Strategy Chart" title="Strategy Chart">
                                                Strategy Chart
                                            </Tab>

                                        </Tabs>

                                        <Slider
                                            value='55'

                                            onChange={this.handleOnChange}
                                        />



                                    </div>
                                </div>
                            </div>

                            <div className='row'>
                                <div className='col-12 belowchart'>
                                    <div className='box'>
                                        <div className='row'>
                                            <div className='col-md-4'>
                                                <div className='row'>
                                                    <div className='col-6'>
                                                        <h4> Strikewise IVs </h4>
                                                    </div>
                                                    <div className='col-6'>
                                                        <h4 className="text-end"> Reset IV </h4>
                                                    </div>
                                                </div>
                                                <div className='row mb-3'>
                                                    <div className='col-auto'>
                                                        Offset
                                                    </div>

                                                    <div className='col d-flex'>
                                                        <div className="input-group flex-nowrap inc-dec-gp w-auto ms-auto">
                                                            <div className="input-group-prepend">
                                                                <button className="btn btn-sm btn-outline-secondary leftbtn" type="button" >-</button>
                                                            </div>
                                                            <input type="text" className="form-control-sm increment-input" />
                                                            <div className="input-group-prepend">
                                                                <button className="btn btn-sm btn-outline-secondary rightbtn" type="button" >+</button>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className='row mb-3'>
                                                    <div className='col-auto'>
                                                        17700 <i className="fa-regular fa-circle-question grey-text"></i>
                                                    </div>
                                                    <div className='col-auto'>
                                                        01 Sep
                                                    </div>
                                                    <div className='col d-flex'>
                                                        <div className="input-group flex-nowrap inc-dec-gp w-auto ms-auto">
                                                            <div className="input-group-prepend">
                                                                <button className="btn btn-sm btn-outline-secondary leftbtn" type="button" >-</button>
                                                            </div>
                                                            <input type="text" className="form-control-sm increment-input" />
                                                            <div className="input-group-prepend">
                                                                <button className="btn btn-sm btn-outline-secondary rightbtn" type="button" >+</button>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>

                                                <div className='row mb-3'>
                                                    <div className='col-auto'>
                                                        17700 <i className="fa-regular fa-circle-question grey-text"></i>
                                                    </div>
                                                    <div className='col-auto'>
                                                        01 Sep
                                                    </div>
                                                    <div className='col d-flex'>
                                                        <div className="input-group flex-nowrap inc-dec-gp w-auto ms-auto">
                                                            <div className="input-group-prepend">
                                                                <button className="btn btn-sm btn-outline-secondary leftbtn" type="button" >-</button>
                                                            </div>
                                                            <input type="text" className="form-control-sm increment-input" />
                                                            <div className="input-group-prepend">
                                                                <button className="btn btn-sm btn-outline-secondary rightbtn" type="button" >+</button>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>


                                            </div>
                                            <div className='col-md-4'>
                                                <div className='row'>
                                                    <div className='col-6'>
                                                        <h4> Greeks </h4>
                                                    </div>
                                                    <div className='col-6'>
                                                        <h3 className='smallfont text-end'>Why zero greeks? <i className="fa-regular fa-circle-question grey-text ms-1"></i></h3>
                                                    </div>
                                                </div>
                                                <ul className='listitems d-flex flex-column'>
                                                    <li className='d-flex justify-content-between'><span className='grey-text' >Delta <i className="fa-regular fa-circle-question"></i></span> <span>50</span></li>
                                                    <li className='d-flex justify-content-between'><span className='grey-text'>Theta <i className="fa-regular fa-circle-question"></i></span> <span>-0</span></li>
                                                    <li className='d-flex justify-content-between'><span className='grey-text'>Decay <i className="fa-regular fa-circle-question"></i></span> <span>-0</span></li>
                                                    <li className='d-flex justify-content-between'><span className='grey-text'>Gamma <i className="fa-regular fa-circle-question"></i></span> <span>-0</span></li>
                                                    <li className='d-flex justify-content-between'><span className='grey-text'>Vega <i className="fa-regular fa-circle-question"></i></span> <span>-0</span></li>
                                                </ul>
                                            </div>
                                            <div className='col-md-4'>

                                                <div className='row'>
                                                    <div className='col-12'>
                                                        <h4> Projected Future Prices </h4>
                                                        <Table hover >
                                                            <thead>
                                                                <tr>
                                                                    <th></th>
                                                                    <th></th>
                                                                    <th></th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td className="grey-text">
                                                                        01 Sep
                                                                    </td>

                                                                    <td className="text-end">
                                                                        17759.30

                                                                    </td>
                                                                </tr>

                                                            </tbody>
                                                        </Table>
                                                        <h4>Standard Deviations<i className="fa-regular fa-circle-question grey-text ms-1"></i> </h4>
                                                        <Table hover >
                                                            <thead>
                                                                <tr>
                                                                    <th></th>
                                                                    <th></th>
                                                                    <th></th>
                                                                </tr>
                                                            </thead>
                                                            <tbody>
                                                                <tr>
                                                                    <td className="grey-text">
                                                                        1 SD
                                                                    </td>
                                                                    <td>
                                                                        368.7 (2.1%)
                                                                    </td>
                                                                    <td className="text-end">

                                                                        17390.6 <br />
                                                                        18128.0

                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="grey-text">
                                                                        1 SD
                                                                    </td>
                                                                    <td>
                                                                        368.7 (2.1%)
                                                                    </td>
                                                                    <td className="text-end">

                                                                        17390.6 <br />
                                                                        18128.0

                                                                    </td>
                                                                </tr>
                                                                <tr>
                                                                    <td className="grey-text">
                                                                        1 SD
                                                                    </td>
                                                                    <td>
                                                                        368.7 (2.1%)
                                                                    </td>
                                                                    <td className="text-end">

                                                                        17390.6 <br />
                                                                        18128.0

                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        </Table>




                                                    </div>

                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                <Modal className='popupcl' size="lg" show={this.state.isOpen} onHide={this.closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>NIFTY 1714.85 +1.8%  <img src='./assets/img/graph-wh.png' className='me-3' />

                            <img src='./assets/img/info-wh.png' className='me-3' />
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='row'>
                            <div className='col-12 d-flex justify-content-between pt-2 pb-2'>
                                <span>Volume & OI</span>
                                <span className='blue-text'>
                                    Open Screener ></span>
                            </div>
                        </div>
                        <div className='row mb-3'>
                            <div className='col-md-6 border-end pt-2 pb-2'>
                                <span>Fut OI change </span> <span> 8.4% -High</span>
                            </div>
                            <div className='col-md-6 pt-2 pb-2'>
                                <span>Volume </span> <span>-</span>
                            </div>

                        </div>
                        <div className='pt-3 pb-3 border-top border-bottom mb-3'>
                            <div className='row justify-content-between align-items-center'>
                                <div className='col-lg-auto'>
                                    <strong> Expiry: <br />
                                        6 days left </strong>
                                </div>
                                <div className='col-lg-auto buttongpcl'>

                                    <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                                        <ToggleButton id="tbg-radio-1" value={1}>
                                            08 Sep
                                        </ToggleButton>
                                        <ToggleButton id="tbg-radio-2" value={2}>
                                            29 Sep
                                        </ToggleButton>
                                        <ToggleButton id="tbg-radio-3" value={3}>
                                            27 Oct
                                        </ToggleButton>
                                    </ToggleButtonGroup>
                                </div>
                                <div className='col-lg-auto blue-text'>
                                    Option Chain <i class="fa-solid fa-angle-right"></i>
                                </div>


                            </div>
                        </div>

                        <div className='row'>
                            <div className='col-lg-6'>
                                <div className='row'>
                                    <div className='col-5 col-md-5 pt-2 pb-2 grey-text'>
                                        Future price
                                    </div>
                                    <div className='col-7 col-md-7 pt-2 pb-2'>
                                        17516.72
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-5 col-md-5 pt-2 pb-2 grey-text'>
                                        ATM strike <img src='./assets/img/info-grey.png' className='me-3' />
                                    </div>
                                    <div className='col-7 col-md-7 pt-2 pb-2'>
                                        17500
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-5 col-md-5 pt-2 pb-2 grey-text'>
                                        Lot size
                                    </div>
                                    <div className='col-7 col-md-7 pt-2 pb-2'>
                                        50
                                    </div>
                                </div>
                            </div>
                            <div className='col-lg-6 border-start'>
                                <div className='row'>
                                    <div className='col-5 col-md-4 pt-2 pb-2 grey-text'>
                                        ATM IV
                                    </div>
                                    <div className='col-7 col-md-8 pt-2 pb-2'>
                                        18.3  <span className='gn-text' > (+0.7)</span>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-5 col-md-4 pt-2 pb-2 grey-text'>
                                        IVP
                                    </div>
                                    <div className='col-7 col-md-8 pt-2 pb-2'>
                                        54
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-5 col-md-4 pt-2 pb-2 grey-text'>
                                        INDIAVIX <img src='./assets/img/info-grey.png' className='me-3' />
                                    </div>
                                    <div className='col-7 col-md-8 pt-2 pb-2'>
                                        19.85 - <span className="red-text"> 0.02</span>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-5 col-md-4 pt-2 pb-2 grey-text'>
                                        INDIAVIX <img src='./assets/img/info-grey.png' className='me-3' />
                                    </div>
                                    <div className='col-7 col-md-8 pt-2 pb-2'>
                                        19.85 - <span className="red-text"> 0.02</span>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-5 col-md-4 pt-2 pb-2 grey-text'>
                                        PCR
                                    </div>
                                    <div className='col-7 col-md-8 pt-2 pb-2'>
                                        Max pain - 17550 <span className="gn-text"> Bullish</span>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </Modal.Body>

                </Modal>

            </>
        )
    }
}
