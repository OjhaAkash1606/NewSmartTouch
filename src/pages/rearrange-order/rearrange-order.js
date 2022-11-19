import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import { Form, Row, Col, Table, Breadcrumb, Tooltip } from 'react-bootstrap';

export default function RearrangeOrder() {
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Simple tooltip
    </Tooltip>
  );
  return (
    <>
      <div className='container-fluid'>
        <div className='row lesspadding align-items-center mt-4'>
          <div className='col-12 col-md'>
            <Breadcrumb>
              <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
              <Breadcrumb.Item active>Rearrange Orders</Breadcrumb.Item>
            </Breadcrumb>
          </div>
          <div className='col-12 col-md-auto ms-auto text-end'>
            <button className='btn  btn-outline-primary  rounded-bl-btn' ><i class="fa-solid fa-arrows-rotate me-1"></i>
              Reset to default order
            </button>
            <OverlayTrigger
              placement="left"
              delay={{ show: 250, hide: 400 }}
              overlay={renderTooltip}
            ><i className="fa-regular fa-circle-question ms-1"></i>

            </OverlayTrigger>
          </div>
        </div>
        <div className='row rearrange-op-win mt-4'>

          <div className='col-12'>

            <div className='box position-relative pt-4 mt-3 mb-5'>

              <h1 className='title-cl blue-bg text-uppercase'>ORDER 1</h1>

              <div className='row'>
                <div className='col-12'>

                  <div className='row lesspd align-items-center'>
                    <div className='col text-start text-lg-center poscl zindex-1'>
                      <h3 className='pt-2 pb-2'>
                        <span className='buytext me-2 rounded-2'>BUY </span>  <span className='font-semi-bold' > NIFTY 16550 PUT 27 JAN </span> </h3>
                    </div>
                    <div className='ms-auto col-auto zindex-2'>
                      <button className='btn btn-outline-secondary up-down-arrow'><i class="fa-solid fa-arrow-up"></i></button>
                    </div>
                    <div className='col-auto zindex-2'>
                      <button className='btn btn-outline-secondary up-down-arrow'><i class="fa-solid fa-arrow-down"></i></button>
                    </div>
                    <div className='col-auto zindex-2'>
                      <img src='./assets/img/img-rearrange.png' alt="" />
                    </div>
                  </div>

                </div>
              </div>
              <div className='row'>
                <div className='col-xl-6'> <Table responsive borderless hover size="sm" className='order-book-tb bg-white'>
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


              </div>

              <div className='border-top pt-3 pb-3'>
                <div className='row'>
                  <div className='col-auto'>
                    <Form className='d-flex align-items-center flex-wrap' >
                      {['radio'].map((type) => (
                        <div key={`inline-${type}`} className="mb-3 mb-lg-0 mt5">
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

                        <Form.Control size="sm" type="text" /> <i class="fa-solid fa-arrows-rotate ms-2 me-2"></i>

                      </Form.Group>

                      <Form.Group className="mb-3 mb-lg-0 d-flex align-items-center" controlId="formPlaintextPassword">
                        <Form.Label className='mb-0 me-2'>
                          Qty
                        </Form.Label>

                        <Form.Control type="text" size="sm" />

                      </Form.Group>

                    </Form>

                  </div>


                </div>
              </div>


            </div>
          </div></div>
      </div>
    </>

  )
}
