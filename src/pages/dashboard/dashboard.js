
import React, { Component } from 'react'
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import * as agCharts from 'ag-charts-community';
import { AgChartsReact } from 'ag-charts-react';

function getData() {
  return [
    { type: 'CHOLAFIN', earnings: 954 },
    { type: 'POWERGRID', earnings: 844 },
    { type: 'DEEPAKNTR', earnings: 699 },
    { type: 'HINDCOPPER', earnings: 503 },
    { type: 'APOLLOHOSP', earnings: 501 },
    
    
  ];
}

function getData1() {
  return [
    { type: 'CHOLAFIN', total: 2.9, regular: 3.2 },
    { type: 'POWERGRID', total: 3.7, regular: 4.2 },
    { type: 'DEEPAKNTR', total: 3.3, regular: 3.4 },
    { type: 'HINDCOPPER', total: 3.2, regular: 3.6 },
    { type: 'APOLLOHOSP', total: 2.7, regular: 3.2 },
    
  
  ];
}

function getData3() {
  return [
    { type: 'CHOLAFIN', total: -2.9, regular: 3.2 },
    { type: 'POWERGRID', total: -3.7, regular: 4.2 },
    { type: 'DEEPAKNTR', total: -3.3, regular: 3.4 },
    { type: 'HINDCOPPER', total: -3.2, regular: 3.6 },
    { type: 'APOLLOHOSP', total: -2.7, regular: 3.2 },
    
  
  ];
}

function getData2() {
  return [
    
    { type: 'APOLLOHOSP', total: -2.7, regular: 3.2 },
    
  
  ];
}


export default class dashboard extends Component {

  
  constructor(props) {
    super(props);

    this.state = {
      options: {
        autoSize: true,
        data: getData(),
        theme: {
          palette: {
            fills: ['rgba(0, 130, 0, 1)'],
            strokes: ['rgba(0, 130, 0, 1)'],
          },
          overrides: {
            bar: {
              series: {
                strokeWidth: 0,
              },
            },
          },
        },
        title: {
          text: 'Top Price Gainers',
          fontSize: 14,
        },
        subtitle: {
          text: ' ',
          enabled: false
        },
        series: [
          {
            type: 'bar',
            xKey: 'type',
            yKey: 'earnings',
          },
        ],
        axes: [
          {
            type: 'category',
            position: 'left',
          },
          {
            type: 'number',
            position: 'bottom',
            title: {
              enabled: true,
              text: '% Price Change',
            },
          },
        ],
        legend: {
          enabled: false,
        },
      },
    };

    this.state1 = {
      options: {
        autoSize: true,
        data: getData(),
        theme: {
          palette: {
            fills: ['rgba(255, 0, 0, 1)'],
            strokes: ['rgba(255, 0, 0, 1)'],
          },
          overrides: {
            bar: {
              series: {
                strokeWidth: 0,
              },
            },
          },
        },
        title: {
          text: 'Top Price Losers',
          fontSize: 14,
        },
        subtitle: {
          text: ' ',
          enabled: false
        },
        series: [
          {
            type: 'bar',
            xKey: 'type',
            yKey: 'earnings',
          },
        ],
        axes: [
          {
            type: 'category',
            position: 'left',
          },
          {
            type: 'number',
            position: 'bottom',
            title: {
              enabled: true,
              text: '% Price Change',
            },
          },
        ],
        legend: {
          enabled: false,
        },
      },
    };

    this.state2 = {
      options: {
        autoSize: true,
        data: getData(),
        theme: {
          palette: {
            fills: ['rgba(1, 205, 209, 1)'],
            strokes: ['rgba(1, 205, 209, 1)'],
          },
          overrides: {
            bar: {
              series: {
                strokeWidth: 0,
              },
            },
          },
        },
        title: {
          text: 'Top OI Gainers',
          fontSize: 14,
        },
        subtitle: {
          text: ' ',
          enabled: false
        },
        series: [
          {
            type: 'bar',
            xKey: 'type',
            yKey: 'earnings',
          },
        ],
        axes: [
          {
            type: 'category',
            position: 'left',
          },
          {
            type: 'number',
            position: 'bottom',
            title: {
              enabled: true,
              text: '% Price Change',
            },
          },
        ],
        legend: {
          enabled: false,
        },
      },
    };

    this.state3 = {
      options: {
        autoSize: true,
        data: getData(),
        theme: {
          palette: {
            fills: ['rgba(255, 19, 147, 1)'],
            strokes: ['rgba(255, 19, 147, 1)'],
          },
          overrides: {
            bar: {
              series: {
                strokeWidth: 0,
              },
            },
          },
        },
        title: {
          text: 'Top OI Losers',
          fontSize: 14,
        },
        subtitle: {
          text: ' ',
          enabled: false
        },
        series: [
          {
            type: 'bar',
            xKey: 'type',
            yKey: 'earnings',
          },
        ],
        axes: [
          {
            type: 'category',
            position: 'left',
          },
          {
            type: 'number',
            position: 'bottom',
            title: {
              enabled: true,
              text: '% Price Change',
            },
          },
        ],
        legend: {
          enabled: false,
        },
      },
    };

    this.state4 = {
      
        options: {
          autoSize: true,
          data: getData1(),
          theme: {
            palette: {
              fills: ['rgba(0, 130, 0, 1)', 'rgba(1, 206, 209, 1)'],
              strokes: ['rgba(0, 130, 0, 1)', 'rgba(1, 206, 209, 1)'],
            },
            overrides: {
              bar: {
                series: {
                  strokeWidth: 0,
                  highlightStyle: {
                    series: {
                      strokeWidth: 1,
                      dimOpacity: 0.2,
                    },
                  },
                },
              },
            },
          },
          title: {
            text: 'Top Long Buildup',
            fontSize: 18,
          },
          subtitle: {
            text: ' ',
            enabled : false
          },
          series: [
            {
              type: 'bar',
              xKey: 'type',
              yKey: 'total',
              yName: 'Annual growth in total pay',
            },
            {
              type: 'bar',
              xKey: 'type',
              yKey: 'regular',
              yName: 'Annual growth in regular pay',
            },
          ],
          axes: [
            {
              type: 'category',
              position: 'left',
            },
            {
              type: 'number',
              position: 'bottom',
              title: {
                enabled: true,
                text: '%',
              },
            },
          ],
          legend: {
            position: 'bottom',
          },
        },
    
  }

  this.state5 = {
      
    options: {
      autoSize: true,
      data: getData2(),
      theme: {
        palette: {
          fills: ['rgba(255, 20, 148, 1)', 'rgba(0, 130, 0, 1)'],
          strokes: ['rgba(255, 20, 148, 1)', 'rgba(0, 130, 0, 1)'],
        },
        overrides: {
          bar: {
            series: {
              strokeWidth: 0,
              highlightStyle: {
                series: {
                  strokeWidth: 1,
                  dimOpacity: 0.2,
                },
              },
            },
          },
        },
      },
      title: {
        text: 'Top Short Covering',
        fontSize: 18,
      },
      subtitle: {
        text: ' ',
        enabled : false
      },
      series: [
        {
          type: 'bar',
          xKey: 'type',
          yKey: 'total',
          yName: 'Annual growth in total pay',
        },
        {
          type: 'bar',
          xKey: 'type',
          yKey: 'regular',
          yName: 'Annual growth in regular pay',
        },
      ],
      axes: [
        {
          type: 'category',
          position: 'left',
        },
        {
          type: 'number',
          position: 'bottom',
          title: {
            enabled: true,
            text: '%',
          },
        },
      ],
      legend: {
        position: 'bottom',
      },
    },

}

this.state6 = {
      
  options: {
    autoSize: true,
    data: getData3(),
    theme: {
      palette: {
        fills: ['rgba(255, 0, 0, 1)', 'rgba(1, 206, 209, 1)'],
        strokes: ['rgba(255, 0, 0, 1)', 'rgba(1, 206, 209, 1)'],
      },
      overrides: {
        bar: {
          series: {
            strokeWidth: 0,
            highlightStyle: {
              series: {
                strokeWidth: 1,
                dimOpacity: 0.2,
              },
            },
          },
        },
      },
    },
    title: {
      text: 'Top Short Buildup',
      fontSize: 18,
    },
    subtitle: {
      text: ' ',
      enabled : false
    },
    series: [
      {
        type: 'bar',
        xKey: 'type',
        yKey: 'total',
        yName: 'Annual growth in total pay',
      },
      {
        type: 'bar',
        xKey: 'type',
        yKey: 'regular',
        yName: 'Annual growth in regular pay',
      },
    ],
    axes: [
      {
        type: 'category',
        position: 'left',
      },
      {
        type: 'number',
        position: 'bottom',
        title: {
          enabled: true,
          text: '%',
        },
      },
    ],
    legend: {
      position: 'bottom',
    },
  },

}

this.state7 = {
      
  options: {
    autoSize: true,
    data: getData(),
    theme: {
      palette: {
        fills: ['rgba(72, 61, 138, 1)'],
        strokes: ['rgba(72, 61, 138, 1)'],
      },
      overrides: {
        bar: {
          series: {
            strokeWidth: 0,
          },
        },
      },
    },
    title: {
      text: 'Top Volume Buzzers',
      fontSize: 14,
    },
    subtitle: {
      text: ' ',
      enabled: false
    },
    series: [
      {
        type: 'bar',
        xKey: 'type',
        yKey: 'earnings',
      },
    ],
    axes: [
      {
        type: 'category',
        position: 'left',
      },
      {
        type: 'number',
        position: 'bottom',
        title: {
          enabled: true,
          text: '% Price Change',
        },
      },
    ],
    legend: {
      enabled: false,
    },
  },

}

this.state8 = {
      
  options: {
    autoSize: true,
    data: getData(),
    theme: {
      palette: {
        fills: ['rgba(153, 251, 152, 1)'],
        strokes: ['rgba(153, 251, 152, 1)'],
      },
      overrides: {
        bar: {
          series: {
            strokeWidth: 0,
          },
        },
      },
    },
    title: {
      text: 'Top IV Gainers',
      fontSize: 14,
    },
    subtitle: {
      text: ' ',
      enabled: false
    },
    series: [
      {
        type: 'bar',
        xKey: 'type',
        yKey: 'earnings',
      },
    ],
    axes: [
      {
        type: 'category',
        position: 'left',
      },
      {
        type: 'number',
        position: 'bottom',
        title: {
          enabled: true,
          text: '% Price Change',
        },
      },
    ],
    legend: {
      enabled: false,
    },
  },

}

this.state9 = {
      
  options: {
    autoSize: true,
    data: getData(),
    theme: {
      palette: {
        fills: ['rgba(250, 128, 113, 1)'],
        strokes: ['rgba(250, 128, 113, 1)'],
      },
      overrides: {
        bar: {
          series: {
            strokeWidth: 0,
          },
        },
      },
    },
    title: {
      text: 'Top IV Gainers',
      fontSize: 14,
    },
    subtitle: {
      text: ' ',
      enabled: false
    },
    series: [
      {
        type: 'bar',
        xKey: 'type',
        yKey: 'earnings',
      },
    ],
    axes: [
      {
        type: 'category',
        position: 'left',
      },
      {
        type: 'number',
        position: 'bottom',
        title: {
          enabled: true,
          text: '% Price Change',
        },
      },
    ],
    legend: {
      enabled: false,
    },
  },

}
  }

  componentDidMount() {}
  render() {
    return (
      <>
     <div className='container-fluid'>
                <div className='row lesspadding'>
                    <div className='col-12 mt-3'>
                        <Breadcrumb>
                            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>

                            <Breadcrumb.Item active>Dashboard</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                </div>
                </div>

                <div className='container'>
                  <div className='row row-cols-sm-2 row-cols-md-3 row-cols-xl-4 lesspadding'>
                    <div className='col mb-3'>                      
                <AgChartsReact options={this.state.options} />
                </div>
                <div className='col mb-3'>                      
                <AgChartsReact options={this.state1.options} />
                </div>
                <div className='col mb-3'>                      
                <AgChartsReact options={this.state2.options} />
                </div>
                <div className='col mb-3'>                      
                <AgChartsReact options={this.state3.options} />
                </div>
                <div className='col mb-3'>                      
                <AgChartsReact options={this.state4.options} />
                </div>
                <div className='col mb-3'>                      
                <AgChartsReact options={this.state5.options} />
                </div>
                <div className='col mb-3'>                      
                <AgChartsReact options={this.state6.options} />
                </div>
                <div className='col'>
                  <div className='box'>
                  <h4>Top Long Unwinding</h4></div>
                </div>
                </div>
                <div className='row row-cols-sm-2 row-cols-md-3  lesspadding'>
                <div className='col mb-3'> 
                <AgChartsReact options={this.state7.options} />
                </div>
                <div className='col mb-3'> 
                <AgChartsReact options={this.state8.options} />
                </div>

                <div className='col mb-3'> 
                <AgChartsReact options={this.state9.options} />
                </div>

                  </div>
                </div>

                
                
                </>
    )
  }
}





