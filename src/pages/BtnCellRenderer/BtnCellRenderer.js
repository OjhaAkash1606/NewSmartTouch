import React, { Component } from 'react';
import { Dropdown, OverlayTrigger, Popover, Button, ButtonGroup, Table, ToggleButtonGroup, ToggleButton } from 'react-bootstrap';

const popover = (
    <Popover id="popover-basic" className="optionchain-pop">
        <Popover.Header>
            <div className='row flex-lg-nowrap'>
                <div className='col d-flex align-items-center'>NIFTY 15450 CALL 06 OCT</div>
                <div className='col-auto'>
                    
                <ToggleButtonGroup type="radio" name="options" defaultValue={1}>
        <ToggleButton id="tbg-radio-1" value={1}>
        Buy
        </ToggleButton>
        <ToggleButton id="tbg-radio-2" value={2}>
        Sell
        </ToggleButton>
    
      </ToggleButtonGroup>
</div>
            </div>
        </Popover.Header>
        <Popover.Body>
            <div className='row lesspadding mb-3'>
                <div className='col d-flex flex-column align-items-stretch'>
                    <button className='btn btn-outline-secondary text-nowrap'><i class="fa-regular fa-bookmark me-2"></i> Add to watchlist</button>
                </div>
                <div className='col d-flex flex-column align-items-stretch'>
                    <button className='btn btn-outline-secondary text-nowrap  text-start'><i class="fa-brands fa-whatsapp me-2"></i> Set Alerts</button>
                </div>
            </div>


            <div className='row mb-3'>
                <div className='col d-flex flex-column'><span>Open</span>                
                <span>0</span>
                </div>
                <div className='col d-flex flex-column'><span>High </span>
                <span>0 </span>
                </div>
                <div className='col d-flex flex-column'>
                <span>High </span>
                <span>0 </span>
                </div>
                <div className='col d-flex flex-column'><span>Close </span>
                <span>0 </span></div>
            </div>

            <Table responsive hover size="sm" className='order-book-tb border bg-white'>
                <thead>
                    <tr>
                        <th className='text-start'>BIDS</th>
                        <th>ORDERS</th>
                        <th className='text-start'>Qty</th>
                        <th>OFFERS</th>
                        <th>Orders</th>
                        <th>Qty</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>11</td>
                        <td>11</td>
                        <td>11</td>
                        <td>11</td>
                        <td>11</td>
                        <td>11</td>
                    </tr>

                </tbody>
            </Table>

        </Popover.Body>
    </Popover>
);

export default class BtnCellRenderer extends Component {
    constructor(props) {
        super(props);
        this.btnClickedHandler = this.btnClickedHandler.bind(this);
    }
    btnClickedHandler() {
        this.props.clicked(this.props.value);
    }
    render() {
        return (
            <>

                <button className='btn btn-sm buygreybtn' onClick={this.btnClickedHandler}>B</button>
                <button className='btn btn-sm buygreybtn ' onClick={this.btnClickedHandler}>S</button>

                <OverlayTrigger trigger="click" placement="bottom" overlay={popover}>
                    <button className='btn btn-sm buygreybtn'><i className="fa-solid fa-angle-down"></i></button>
                </OverlayTrigger>

            </>


        )
    }
}