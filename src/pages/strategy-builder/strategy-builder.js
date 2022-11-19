import React, { Component } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Slider from 'react-rangeslider';
/* import '../../node_modules/react-rangeslider/lib/index.css';  */
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Table from 'react-bootstrap/Table';
import ReactApexChart from 'react-apexcharts';
import { Modal, ToggleButtonGroup, ToggleButton } from "react-bootstrap";


export default class StrategyBuilder extends Component {

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

                <div className='container-fluid strategy-builder'>
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
                            <div className='row lesspadding align-items-center mb-3 flex-sm-nowrap'>
                                <div className='col-12 col-sm mb-3 mb-sm-0'>
                                    <div className='inputbdr d-flex align-items-center'>
                                        <i className="fa-solid fa-magnifying-glass me-4 searchicon"></i>
                                        <input className='form-control border-0 me-4 ' onClick={this.openModal} />
                                        <img src='./assets/img/graph.png' className='me-3' />
                                        <img src='./assets/img/infoimg.png' className='me-3' />

                                    </div>

                                </div>
                                <div className=' col-auto  d-flex flex-nowrap'><button className='btn  btn-outline-secondary greybdrbtn rounded-5 me-2 minwid-80' >Cancel</button>
                                    <button className='btn btn-primary rounded-gn-btn  rounded-5 minwid-80'>Done</button></div>
                                <div className='ms-auto col-auto'>
                                    <img src='./assets/img/settingimg.png' />
                                </div>
                            </div>

                            <div className='row lesspadding'>
                                <div className='col-auto mb-3  buttongpcl'>
                                    <ToggleButtonGroup type="radio" name="options5" defaultValue={1111}>
                                        <ToggleButton id="tbg-1111" value={1111}>
                                            OPT (2)
                                        </ToggleButton>
                                        <ToggleButton id="tbg-2222" value={2222}>
                                            FUT
                                        </ToggleButton>

                                    </ToggleButtonGroup>


                                </div>
                                <div className='col-auto mb-3'>
                                    <select className='form-select'>
                                        <option>27 Jan</option>
                                    </select>
                                </div>
                            </div>

                            <div className='row lesspadding'>
                                <div className='col-12 mb-3 buttongpcl d-flex'>

                                    <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                                        <ToggleButton id="tbg-radio-1" value={1}>
                                            LTP
                                        </ToggleButton>
                                        <ToggleButton id="tbg-radio-2" value={2}>
                                            OI
                                        </ToggleButton>
                                        <ToggleButton id="tbg-radio-3" value={2}>
                                            Greeks
                                        </ToggleButton>

                                    </ToggleButtonGroup>
                                </div>
                            </div>

                            <div className='notrade-div d-flex flex-column align-items-center mb-3'>
                                <h3 className='mb-3 mb-xl-4' >Initial Page – When no positions are available.</h3>
                                <img src='./assets/img/no-trade.png' alt="" className='img-fluid mb-3 mb-xl-4' />

                                <button className='btn btn-primary rounded-gn-btn  rounded-5 btn-lg font-semi-bold ps-xl-4 pe-xl-4' >Build A New Custom Strategy</button>
                            </div>

                            <div className='box strike-container'>
                                <div className='row d-flex justify-content-between align-items-center'>
                                    <div className='col-auto'>
                                        <span className='font-semi-bold big-font' > Calls LTP </span>
                                        <div className='stdiv'>
                                            <span className='red-bg bar'></span> <span className='red-text' > Call OI</span>
                                        </div>
                                    </div>
                                    <div className='col-auto font-semi-bold big-font'>Strike</div>
                                    <div className='col-auto'>
                                        <span className='font-semi-bold big-font' >Put LTP </span>
                                        <div className='stdiv'>
                                            <span className='gn-text' > Put OI</span> <span className='gn-bg bar'></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
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


            </>
        )
    }
}
