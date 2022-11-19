import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Form from 'react-bootstrap/Form';
import HeatMap from "react-heatmap-grid";

export default function Niftyheatmap() {
    ;

    const xLabels = new Array(24).fill(0).map((_, i) => `${i}`);

    // Display only even labels
    const xLabelsVisibility = new Array(24)
        .fill(0)
        .map((_, i) => (i % 2 === 0 ? true : false));

    const yLabels = ["Sun", "Mon", "Tue"];
    const data = new Array(yLabels.length)
        .fill(0)
        .map(() =>
            new Array(xLabels.length).fill(0).map(() => Math.floor(Math.random() * 100))
        );

    return (
        <>
            <div className='container-fluid'>

                <div className='row lesspadding'>
                    <div className='col-12 mt-3'>
                        <Breadcrumb>
                            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>

                            <Breadcrumb.Item active>NIFTY Heatmap</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                </div>

                <div className='row lesspadding justify-content-between  '>
                    <div className='col-12 col-sm-auto mb-3'>
                        <button className='btn light-gn-btn me-3 mb-3'>NIFTY: 17808 (-0.92%)</button>
                        <button className='btn light-cream-btn mb-3'>BANKNIFTY: 37998 (-0.42%)</button>
                    </div>
                    <div className='col-12 col-sm-auto custom-radio mb-3 align-items-center d-flex'>
                        <Form>
                            {['radio'].map((type) => (
                                <div key={`inline-${type}`}>
                                    <Form.Check
                                        inline
                                        label="Equal Weighted"
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-1`}
                                    />
                                    <Form.Check
                                        inline
                                        label="Market Cap Weighted"
                                        name="group1"
                                        type={type}
                                        id={`inline-${type}-2`}
                                    />

                                </div>
                            ))}
                        </Form>
                    </div>
                </div>

                <div className='row'>
                    <div className='col-12'>
                        <div className='row  d-flex justify-content-center row-cols-2 row-cols-md-auto'>
                            <div className='col mb-3 mb-md-4'>
                            <img src='./assets/img/graph-1.png' /> <span>NIFTY50 STOCKS HEATMAP</span>
                            </div>
                            <div className='col mb-3 mb-md-4'>
                            <img src='./assets/img/graph-2.png' /> <span> BANKNIFTY STOCKS HEATMAP </span>
                            </div>
                            <div className='col mb-3 mb-md-4'>
                            <img src='./assets/img/graph-1.png' /><span> NIFTYNO STOCKS HEATMAP </span>
                            </div>
                            <div className='col mb-3 mb-md-4'>
                            <img src='./assets/img/graph-1.png' /> <span> NIFTYNO STOCKS HEATMAP </span>  <i class="fa-solid fa-arrows-rotate ms-3"></i>
                            </div>
                           

                        </div>
                        

                    </div>
                </div>


               

            </div>
            <div style={{ fontSize: "13px" }}>
                <HeatMap
                    xLabels={xLabels}
                    yLabels={yLabels}
                    xLabelsLocation={"bottom"}
                    xLabelsVisibility={xLabelsVisibility}
                    xLabelWidth={50}
                    data={data}
                    squares
                    onClick={(x, y) => alert(`Clicked ${x}, ${y}`)}
                    cellStyle={(background, value, min, max, data, x, y) => ({
                        background: `rgba(66, 86, 244, ${1 - (max - value) / (max - min)})`,
                        fontSize: "11px",
                    })}
                    cellRender={(value) => value && `${value}%`}
                    title={(value, unit) => `${value}`}
                />
            </div>
        </>
    )
}
