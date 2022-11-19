import React from 'react'
import { Breadcrumb, ToggleButton, ToggleButtonGroup, InputGroup, Form } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
export default function Screener() {
    return (
        <>
            <div className='container-fluid screenerpage'>
                <div className='row lesspadding'>
                    <div className='col-12 mt-3'>
                        <Breadcrumb>
                            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                            <Breadcrumb.Item href="#">Dashboard</Breadcrumb.Item>
                            <Breadcrumb.Item active>Screener</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-12 '>
                        <div className='row'>
                            <div className='col-12 col-md-auto d-flex align-items-center mb-3 mb-md-0'>
                                <h4 className='heading'>Options Dashboard</h4>
                            </div>
                            <div className='col-12 col-md-auto ms-auto mb-3 mb-md-0'>
                                <div className='row lesspadding align-items-baseline'>
                                    <div className='col-12 col-sm mb-3 mb-sm-0'>
                                        <InputGroup >
                                            <InputGroup.Text id="basic-addon1" className="bg-white" ><i className="fa-solid fa-magnifying-glass me-2 searchicon grey-text "></i></InputGroup.Text>

                                            <Form.Control className='border-start-0'
                                                placeholder="Search Underlyings..."
                                                aria-label="Username"
                                                aria-describedby="basic-addon1"
                                            />
                                        </InputGroup>
                                    </div>
                                    <div className='col-12 col-sm-auto'>
                                        <button className='btn btn-sm btn-primary blue-bg border-0' >INFORMATION</button>
                                    </div>
                                </div>

                            </div>
                        </div>




                    </div>
                    <div className='col-12'><p class="text-end brown-text font-semi-bold mt-2">15 minutes updates only under FREE Plan</p></div>
                </div>

                <div className='border-top border-bottom pt-3 pb-3'>
                    <div className='row'>
                        <div className='col-auto d-flex align-items-center'>
                            <label className='heading grey-text'>Filter By:</label>
                        </div>
                        <div className='col-auto togglebtnscl'>
                            <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
                                <ToggleButton variant="light" id="tbg-radio-1" value={1}>
                                    HIGH IVP
                                </ToggleButton>
                                <ToggleButton variant="light" id="tbg-radio-2" value={2}>
                                    EARNINGS
                                </ToggleButton>
                                <ToggleButton variant="light" id="tbg-radio-3" value={3}>
                                    LIQUIDITY
                                </ToggleButton>
                            </ToggleButtonGroup>

                        </div>
                    </div>
                </div>

                <div className='row justify-content-between pt-3 pb-3'>
                    <div className='col-12 col-sm'><p className='mb-3 mb-sm-0 d-flex align-items-center'>Last Updated At: 03:33 PM - 20-01-2022 | *IV/IVPs shift to next month expiry in the last week of front month expiry</p></div>
                    <div className='col-12 col-sm-auto'> <button type="button" class="btn btn-light black-btn">Refresh</button></div>               </div>



                <Table responsive hover size="sm" className='order-book-tb border bg-white'>
                    <thead>
                        <tr>
                            <th>Result</th>
                            <th>Liquidity</th>
                            <th>Ticker</th>
                            <th>Price</th>
                            <th>Change%</th>
                            <th>Straddle</th>
                            <th>CallIV</th>
                            <th>PutIV</th>
                            <th>IV</th>
                            <th>IV Change</th>
                            <th>IVR</th>
                            <th>IVP</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><i class="fa-solid fa-bell gn-text"></i> <i class="fa-solid fa-bell grey-text"></i></td>
                            <td><i class="fa-solid fa-star grey-text"></i> <i class="fa-solid fa-star yellow-text"></i></td>
                            <td className='font-semi-bold' >NIFTY</td>
                            <td className='font-semi-bold'>17808</td>
                            <td className='red-text font-semi-bold'>-0.92%</td>
                            <td className='font-semi-bold'>1.7%</td>
                            <td className='font-semi-bold'>16.08%</td>
                            <td className='font-semi-bold'>17.5</td>
                            <td className='font-semi-bold'>16.79</td>
                            <td className='gn-text font-semi-bold'>+7.15%</td>
                            <td className='font-semi-bold'>35.74</td>
                            <td className='font-semi-bold'>58.63</td>
                        </tr>
                        <tr>
                            <td><i class="fa-solid fa-bell gn-text"></i> <i class="fa-solid fa-bell grey-text"></i></td>
                            <td><i class="fa-solid fa-star grey-text"></i> <i class="fa-solid fa-star yellow-text"></i></td>
                            <td className='font-semi-bold' >NIFTY</td>
                            <td className='font-semi-bold'>17808</td>
                            <td className='red-text font-semi-bold'>-0.92%</td>
                            <td className='font-semi-bold'>1.7%</td>
                            <td className='font-semi-bold'>16.08%</td>
                            <td className='font-semi-bold'>17.5</td>
                            <td className='font-semi-bold'>16.79</td>
                            <td className='gn-text font-semi-bold'>+7.15%</td>
                            <td className='font-semi-bold'>35.74</td>
                            <td className='font-semi-bold'>58.63</td>
                        </tr>
                        <tr>
                            <td><i class="fa-solid fa-bell gn-text"></i> <i class="fa-solid fa-bell grey-text"></i></td>
                            <td><i class="fa-solid fa-star grey-text"></i> <i class="fa-solid fa-star yellow-text"></i></td>
                            <td className='font-semi-bold' >NIFTY</td>
                            <td className='font-semi-bold'>17808</td>
                            <td className='red-text font-semi-bold'>-0.92%</td>
                            <td className='font-semi-bold'>1.7%</td>
                            <td className='font-semi-bold'>16.08%</td>
                            <td className='font-semi-bold'>17.5</td>
                            <td className='font-semi-bold'>16.79</td>
                            <td className='gn-text font-semi-bold'>+7.15%</td>
                            <td className='font-semi-bold'>35.74</td>
                            <td className='font-semi-bold'>58.63</td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </>
    )
}
