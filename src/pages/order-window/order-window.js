import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';

import { Form, Row, Col, Table, Breadcrumb, Tooltip } from 'react-bootstrap';
export default function Orderwindow() {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Simple tooltip
    </Tooltip>
  );
  return (

    <>
      <div className='container-fluid'>
        <div className='row lesspadding'>
          <div className='col-12 mt-3'>
            <Breadcrumb>
              <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
              <Breadcrumb.Item active>Order Window</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
        <div className='row lesspadding'>
          <div className='col-lg-auto align-self-center text-start mb-3'> NIFTY 17051.75 <span className='red-text' > -3.2% </span></div>
          <div className='col-lg-auto ms-auto'>

            <div className='row lesspd'>
              <div className='col-auto d-flex mb-3'>
                <select className="form-select form-select-sm minwd" aria-label=".form-select-sm example">
                  <option >Overnight</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>

                <OverlayTrigger
                  placement="right"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip}
                ><i className="fa-regular fa-circle-question ms-1 mt-2"></i>

                </OverlayTrigger>
              </div>
              <div className='col-auto d-flex mb-3'>
                <select className="form-select form-select-sm minwd" aria-label=".form-select-sm example">
                  <option >Market</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </select>

                <OverlayTrigger
                  placement="right"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip}
                ><i className="fa-regular fa-circle-question ms-1 mt-2"></i>

                </OverlayTrigger>
              </div>
              <div className='col-auto mb-3'>
                <button className="btn btn-sm btn-outline-primary ms-auto rounded-bl-btn"><i className="fa-solid fa-arrows-rotate me-1"></i> Update Prices </button>
              </div>

              <div className='col-auto mb-3'>
                <button className="btn btn-sm btn-outline-primary ms-auto rounded-bl-btn"><i className="fa-solid fa-gear me-1"></i> Settings </button>
              </div>

            </div>



          </div>
        </div>


        <div className='row optionwindow mt-4'>

          <div className='col-12'>

            <div className='box position-relative pt-4 mt-3 mb-5'>

              <h1 className='title-cl blue-bg text-uppercase'>ORDER 1</h1>

              <div className='row'>
                <div className='col-12'>

                  <h3 className='pt-2 pb-2'>
                    <span className='buytext me-2 rounded-2'>BUY </span>  <span className='font-semi-bold' > NIFTY 16550 PUT 27 JAN </span> </h3>
                </div>
              </div>
              <div className='row'>
                <div className='col-xl'> <Table responsive borderless hover size="sm" className='order-book-tb bg-white'>
                  <thead>
                    <tr>
                      <th className='text-start' >BIDS</th>
                      <th>ORDERS</th>
                      <th className='text-start'>QTY</th>
                      <th>OFFERS</th>
                      <th>ORDERS</th>
                      <th>QTY</th>

                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='text-start'>38.50</td>
                      <td><span>1</span></td>
                      <td className='blue-text'>50</td>
                      <td>38.70</td>
                      <td className='red-text'>3</td>
                      <td className='red-text' > 1650 </td>
                    </tr>

                    <tr>
                      <td className='text-start  blue-text font-semi-bold '>TOTAL</td>
                      <td><span>1</span></td>
                      <td className='blue-text font-semi-bold'>62850</td>
                      <td>38.70</td>
                      <td className='red-text font-semi-bold '>TOTAL</td>
                      <td className='red-text font-semi-bold' > 58550 </td>
                    </tr>

                  </tbody>
                </Table></div>
                <div className='col-sm-6 col-xl-2'><ul className='listitems d-flex flex-column'>
                  <li className='d-flex justify-content-between'><span className='grey-text' >Last Price </span> <span>50</span></li>
                  <li className='d-flex justify-content-between'><span className='grey-text' >  Open </span> <span>50</span></li>
                  <li className='d-flex justify-content-between'><span className='grey-text' >  High </span> <span>50</span></li>

                  <li className='d-flex justify-content-between'><span className='grey-text' >Low</span> <span>50</span></li>


                  <li className='d-flex justify-content-between'><span className='grey-text' >Close</span> <span>50</span></li>

                </ul></div>
                <div className='col-sm-6 col-xl-2'>
                  <ul className='listitems d-flex flex-column'>
                    <li className='d-flex justify-content-between'><span className='grey-text' >Volume </span> <span>50</span></li>
                    <li className='d-flex justify-content-between'><span className='grey-text' >  LTQ</span> <span>50</span></li>
                    <li className='d-flex justify-content-between'><span className='grey-text' >  Avg. Price </span> <span>50</span></li>

                    <li className='d-flex justify-content-between'><span className='grey-text' >LTT</span> <span>50</span></li>


                    <li className='d-flex justify-content-between'><span className='grey-text' >OI</span> <span>50</span></li>

                  </ul>

                </div>
              </div>

              <div className='border-top pt-3 pb-3'>
                <div className='row'>
                  <div className='col-auto custom-radio'>
                    <Form className='d-flex align-items-center flex-wrap' >
                      {['radio'].map((type) => (
                        <div key={`inline-${type}`} className="mb-3 mb-lg-0">
                          <Form.Check
                            inline
                            label="Market"
                            name="group1"
                            type={type}
                            id={`inline-${type}-1`}
                          />
                          <Form.Check
                            inline
                            label="Limit"
                            name="group1"
                            type={type}
                            id={`inline-${type}-2`}
                          />


                        </div>
                      ))}

                      <Form.Group className="mb-3 mb-lg-0 d-flex  align-items-center" controlId="formPlaintextPassword">
                        <Form.Label className='mb-0 me-2'  >
                          Price
                        </Form.Label>

                        <Form.Control size="sm" type="text" /> <i className="fa-solid fa-arrows-rotate ms-2 me-2"></i>

                      </Form.Group>

                      <Form.Group className="mb-3 mb-lg-0 d-flex align-items-center" controlId="formPlaintextPassword">
                        <Form.Label className='mb-0 me-2'>
                          Qty
                        </Form.Label>

                        <Form.Control type="text" size="sm" />

                      </Form.Group>

                    </Form>

                  </div>
                  <div className='col-auto ms-lg-auto gap-2 d-flex align-items-baseline'>
                    <button className='btn  btn-outline-secondary greybdrbtn rounded-5 minwd' >Cancel</button>
                    <button className='btn btn-primary rounded-gn-btn  rounded-5 minwd'>Place Order</button>
                  </div>

                </div>
              </div>


            </div>

            <div className='box position-relative pt-4 mt-4 mb-3'>

              <h1 className='title-cl red-bg'>ORDER 1</h1>

              <div className='row'>
                <div className='col-12'>

                  <h3 className='pt-2 pb-2'>
                    <span className='selltext me-2 rounded-2 text-uppercase'>Sell </span>  <span className='font-semi-bold' > NIFTY 16550 PUT 27 JAN </span> </h3>
                </div>
              </div>
              <div className='row'>
                <div className='col-xl'> <Table responsive borderless hover size="sm" className='order-book-tb bg-white'>
                  <thead>
                    <tr>
                      <th className='text-start' >BIDS</th>
                      <th>ORDERS</th>
                      <th className='text-start'>QTY</th>
                      <th>OFFERS</th>
                      <th>ORDERS</th>
                      <th>QTY</th>

                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className='text-start'>38.50</td>
                      <td><span>1</span></td>
                      <td className='blue-text'>50</td>
                      <td>38.70</td>
                      <td className='red-text'>3</td>
                      <td className='red-text' > 1650 </td>
                    </tr>

                    <tr>
                      <td className='text-start  blue-text font-semi-bold '>TOTAL</td>
                      <td><span>1</span></td>
                      <td className='blue-text font-semi-bold'>62850</td>
                      <td>38.70</td>
                      <td className='red-text font-semi-bold '>TOTAL</td>
                      <td className='red-text font-semi-bold' > 58550 </td>
                    </tr>

                  </tbody>
                </Table></div>
                <div className='col-sm-6 col-xl-2'><ul className='listitems d-flex flex-column'>
                  <li className='d-flex justify-content-between'><span className='grey-text' >Last Price </span> <span>50</span></li>
                  <li className='d-flex justify-content-between'><span className='grey-text' >  Open </span> <span>50</span></li>
                  <li className='d-flex justify-content-between'><span className='grey-text' >  High </span> <span>50</span></li>

                  <li className='d-flex justify-content-between'><span className='grey-text' >Low</span> <span>50</span></li>


                  <li className='d-flex justify-content-between'><span className='grey-text' >Close</span> <span>50</span></li>

                </ul></div>
                <div className='col-sm-6 col-xl-2'>
                  <ul className='listitems d-flex flex-column'>
                    <li className='d-flex justify-content-between'><span className='grey-text' >Volume </span> <span>50</span></li>
                    <li className='d-flex justify-content-between'><span className='grey-text' >  LTQ</span> <span>50</span></li>
                    <li className='d-flex justify-content-between'><span className='grey-text' >  Avg. Price </span> <span>50</span></li>

                    <li className='d-flex justify-content-between'><span className='grey-text' >LTT</span> <span>50</span></li>
                    <li className='d-flex justify-content-between'><span className='grey-text' >OI</span> <span>50</span></li>

                  </ul>

                </div>
              </div>

              <div className='border-top pt-3 pb-3'>
                <div className='row'>
                  <div className='col-auto custom-radio'>
                    <Form className='d-flex align-items-center flex-wrap' >
                      {['radio'].map((type) => (
                        <div key={`inline-${type}`} className="mb-3 mb-lg-0">
                          <Form.Check
                            inline
                            label="Market"
                            name="group1"
                            type={type}
                            id={`inline-${type}-1`}
                          />
                          <Form.Check
                            inline
                            label="Limit"
                            name="group1"
                            type={type}
                            id={`inline-${type}-2`}
                          />


                        </div>
                      ))}

                      <Form.Group className="mb-3 mb-lg-0 d-flex  align-items-center" controlId="formPlaintextPassword">
                        <Form.Label className='mb-0 me-2'  >
                          Price
                        </Form.Label>

                        <Form.Control size="sm" type="text" /> <i className="fa-solid fa-arrows-rotate ms-2 me-2"></i>

                      </Form.Group>

                      <Form.Group className="mb-3 mb-lg-0 d-flex align-items-center" controlId="formPlaintextPassword">
                        <Form.Label className='mb-0 me-2'>
                          Qty
                        </Form.Label>

                        <Form.Control type="text" size="sm" />

                      </Form.Group>

                    </Form>

                  </div>
                  <div className='col-auto ms-lg-auto gap-2 d-flex align-items-baseline'>
                    <button className='btn btn-outline-secondary greybdrbtn rounded-5 minwd' >Cancel</button>
                    <button className='btn btn-primary rounded-gn-btn  rounded-5 minwd'>Place Order</button>
                  </div>

                </div>
              </div>


            </div>

            <div className='row mb-4'>
              <div className='col-sm-6 col-md-auto mb-3 mb-md-0'>
                <div className='box d-flex flex-column smbox pt-3'>
                  <span className="sm-text text-nowrap">Margin Needed</span>

                  <span>41,818 <i className="fa-solid fa-circle-info"></i></span>

                </div>


              </div>
              <div className='col-sm-6 col-md-auto mb-3 mb-md-0'>
                <div className='box d-flex flex-column smbox pt-3'>
                  <span className="sm-text text-nowrap">Margin Available</span>
                  <span>
                    0  <i className="fa-solid fa-circle-info red-text"></i>
                  </span>

                </div>
              </div>

              <div className='col-12 col-md-auto ms-lg-auto gap-2 d-flex align-items-baseline'>
                <button className='btn  btn-outline-secondary greybdrbtn rounded-5 minwd' >Re-arrange orders</button>
                <button className='btn btn-primary rounded-gn-btn  rounded-5 minwd'>Place All at Market</button>
              </div>

            </div>

          </div>
        </div>

      </div>

    </>
  )
}
