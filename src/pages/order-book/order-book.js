import React from 'react';
import Table from 'react-bootstrap/Table';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Badge } from 'react-bootstrap';
export default function Orderbook() {
  return (
    <>
      <div className='container-fluid'>
        <div className='row lesspadding'>
          <div className='col-12 mt-3'>
            <Breadcrumb>
              <Breadcrumb.Item href="#">Home</Breadcrumb.Item>

              <Breadcrumb.Item active>Orderbook</Breadcrumb.Item>
            </Breadcrumb>
          </div>
        </div>
        <div className='row'>
          <div className='col-12'>
            <Table responsive hover size="sm" className='order-book-tb border bg-white'>
              <thead>
                <tr>
                  <th className='text-start' >Time</th>
                  <th>Type</th>
                  <th className='text-start'>Instrument</th>
                  <th>Qty</th>
                  <th>Avg.Price</th>
                  <th>Stutus</th>

                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='text-start'>14:44:43 IST</td>
                  <td><span className='selltext' >SELL</span></td>
                  <td className='text-start'>DRREDDY24FEB224400PE</td>
                  <td>125/125</td>
                  <td>158.00</td>
                  <td> <Badge pill bg="success">Success</Badge> </td>
                </tr>
                <tr>
                  <td className='text-start'>14:44:43 IST</td>
                  <td><span className='buytext' >SELL</span></td>
                  <td className='text-start'>DRREDDY24FEB224400PE</td>
                  <td>125/125</td>
                  <td>158.00</td>
                  <td> <Badge pill bg="danger">Danger</Badge> </td>
                </tr>
                <tr>
                  <td className='text-start'>14:44:43 IST</td>
                  <td>SELL</td>
                  <td className='text-start'>DRREDDY24FEB224400PE</td>
                  <td>125/125</td>
                  <td>158.00</td>
                  <td> <Badge pill bg="secondary">Cancelled</Badge> </td>
                </tr>
                <tr>
                  <td className='text-start'>14:44:43 IST</td>
                  <td>SELL</td>
                  <td className='text-start'>DRREDDY24FEB224400PE</td>
                  <td>125/125</td>
                  <td>158.00</td>
                  <td> <Badge pill bg="success">Success</Badge> </td>
                </tr>
              </tbody>
            </Table>
          </div>
        </div>
      </div>

    </>
  )
}
