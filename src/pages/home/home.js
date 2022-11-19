import React from 'react';

import { Form, Row, Col, Table, Breadcrumb, Tooltip } from 'react-bootstrap';

export default function Home() {

  return (
    <>
      <div className='container homepage'>
        <div className='row'>
          <div className='col-12 pt-3 pb-3'>
            <h1 className='text-start' >Welcome to <span className='text-uppercase' > SMART  TOUCH </span></h1>
            <h4 className='text-start'>India's biggest option trading platform</h4>
          </div>
        </div>
        <div className='box mb-4 mb-xl-5  homepageboxes pt-3 pb-3 pt-md-4 pb-md-4 pb-xl-5'>
          <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 g-lg-4 customgap'>
            <div className='col text-start d-flex flex-column'>
              <h2 className='d-flex align-items-center'> <span className='d-flex align-items-center' ><img src='./assets/img/easy-trade.png' alt="" /> </span>
              <div>
              Easiest way to trade options </div></h2>
              <p>Just guess up or down, and get Option
                Strategies</p>
              <button className='btn  greybgbtn mt-auto'>Easy Options</button>
            </div>
            <div className='col text-start d-flex flex-column'>
              <h2 className='d-flex align-items-center'><span className='d-flex align-items-center'><img src='./assets/img/get-ready.png' alt="" /> </span>Get ready-made strategies</h2>
              <p>Predict the index or a stock, and get the
                best Option Strategies</p>
              <button className='btn  greybgbtn mt-auto'>Strategy Wizard</button>
            </div>
            <div className='col text-start d-flex flex-column'>
              <h2 className='d-flex align-items-center'><span className='d-flex align-items-center'><img src='./assets/img/own-strategy.png' alt="" /> </span>Create your own
                strategies</h2>
              <p>Create and analyse your own custom
                Options Strategies</p>
              <button className='btn  greybgbtn mt-auto'>Strategy Builder</button>
            </div>
            <div className='col text-start d-flex flex-column'>
              <h2 className='d-flex align-items-center'><span className='d-flex align-items-center'><img src='./assets/img/trade.png' alt="" /> </span>Trade without real money</h2>
              <p>Learn to trade futures and options without
                real money</p>
              <button className='btn  greybgbtn mt-auto'>Virtual Trade</button>
            </div>
            <div className='col text-start d-flex flex-column'>
              <h2 className='d-flex align-items-center'><span className='d-flex align-items-center'><img src='./assets/img/get-trade.png' alt="" /> </span>Get trades from top traders</h2>
              <p>Trade recommendations from SEBI
                registered analysts</p>
              <button className='btn  greybgbtn mt-auto'>Trade Right</button>
            </div>
            <div className='col text-start d-flex flex-column'>
              <h2 className='d-flex align-items-center'><span className='d-flex align-items-center'><img src='./assets/img/learning-option.png' alt="" /> </span>Learn option trading</h2>
              <p>Learn market prediction, option strategies,
                greeks, and much more for free</p>
              <button className='btn  greybgbtn mt-auto'>Learn Options</button>
            </div>

          </div>
        </div>

        <div className='box p-3 advance-tool-sec'>
          <div className='row'>
            <div className='col'>
              <h2 className='text-start'>Advanced Tools</h2>
              <h4 className='text-start pt-3 pb-3'>Tools to guess the direction</h4>
            </div>
          </div>
          <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 g-lg-4 '>
            <div className='col advance-tool-detail'>
              <div className='card shadow-sm'>
                <div className='img-container'>
                  <img src='./assets/img/advance-1.png' alt="" className='img-fluid' />
                </div>

                <div className='card-body'>
                  <h5> Option Chain </h5>
                  <p>All options data in one place. Indentify supports and resistances.</p>
                </div>
              </div>
            </div>
            <div className='col advance-tool-detail'>
              <div className='card shadow-sm'>
                <div className='img-container'>
                  <img src='./assets/img/advance-2.png' alt="" className='img-fluid' />
                </div>

                <div className='card-body'>
                  <h5> Option Interest Analysis </h5>
                  <p>Get clues on the diresction with Intraday changes in open interest.</p>
                </div>
              </div>
            </div>
            <div className='col advance-tool-detail'>
              <div className='card shadow-sm'>
                <div className='img-container'>
                  <img src='./assets/img/advance-3.png' alt="" className='img-fluid' />
                </div>

                <div className='card-body'>
                  <h5> Multi Strike OI </h5>
                  <p>Graph of OI buildup in each strike. See the battle between calls
                    and puts.</p>
                </div>
              </div>
            </div>
            <div className='col advance-tool-detail'>
              <div className='card shadow-sm'>
                <div className='img-container'>
                  <img src='./assets/img/advance-3.png' alt="" className='img-fluid' />
                </div>

                <div className='card-body'>
                  <h5> FII DII Data </h5>
                  <p>know what the big guys are doing with Institutional Buy Sell data.</p>
                </div>
              </div>
            </div>
            <div className='col advance-tool-detail'>
              <div className='card shadow-sm'>
                <div className='img-container'>
                  <img src='./assets/img/advance-3.png' alt="" className='img-fluid' />
                </div>

                <div className='card-body'>
                  <h5>Stock Data </h5>
                  <p>All key derivatives data of a stock summarized in one page.</p>
                </div>
              </div>
            </div>
          </div>
          <h4 className='text-start pt-4 pb-3'>Find great trades</h4>

          <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 g-lg-4 '>
            <div className='col advance-tool-detail'>
              <div className='card shadow-sm'>
                <div className='img-container'>
                  <img src='./assets/img/advance-1.png' alt="" className='img-fluid' />
                </div>

                <div className='card-body'>
                  <h5> Screener </h5>
                  <p>Find great trading oppurtunities with ther screener.</p>
                </div>
              </div>
            </div>
            <div className='col advance-tool-detail'>
              <div className='card shadow-sm'>
                <div className='img-container'>
                  <img src='./assets/img/advance-2.png' alt="" className='img-fluid' />
                </div>

                <div className='card-body'>
                  <h5> Technical Signals</h5>
                  <p>A simple place to see candlestick patterns and moving
                    average crossovers.</p>
                </div>
              </div>
            </div>



          </div>

          <h4 className='text-start pt-4 pb-3'>Others</h4>

          <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3 g-lg-4 '>
            <div className='col advance-tool-detail'>
              <div className='card shadow-sm'>
                <div className='img-container'>
                  <img src='./assets/img/other-img-1.png' alt="" className='img-fluid' />
                </div>

                <div className='card-body'>
                  <h5> Call vs Put </h5>
                  <p>Compare buying and selling call and put.</p>
                </div>
              </div>
            </div>
            <div className='col advance-tool-detail'>
              <div className='card shadow-sm'>
                <div className='img-container'>
                  <img src='./assets/img/other-img-2.png' alt="" className='img-fluid' />
                </div>

                <div className='card-body'>
                  <h5> IV Chart</h5>
                  <p>Implied Volatility charts of Indices and stocks.</p>
                </div>
              </div>
            </div>
            <div className='col advance-tool-detail'>
              <div className='card shadow-sm'>
                <div className='img-container'>
                  <img src='./assets/img/other-img-3.png' alt="" className='img-fluid' />
                </div>

                <div className='card-body'>
                  <h5> Events Calendar</h5>
                  <p>Find big trading oppotunities with stock results calendar.</p>
                </div>
              </div>
            </div>



          </div>

        </div>




      </div>
    </>

  )
}
