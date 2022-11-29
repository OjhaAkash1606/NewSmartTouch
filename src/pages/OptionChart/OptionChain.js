import React, { useCallback, useEffect, useMemo, useState,useRef} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import AutoSearchBar from '../SearchBar/AutoSearchBar';
import Form from 'react-bootstrap/Form';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import hotkeys from "hotkeys-js";
/* import { AgGridReact } from 'ag-grid-react'; */
import { AgGridReact, AgGridColumn } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import DatalistInput, { useComboboxControls } from 'react-datalist-input';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { expDate, gridStrike, gridStrike2, liveData } from '../../redux/action/action';
import Expiry, { ExpiryDate } from './Expiry';
import { render } from 'react-dom';
import { ModuleRegistry } from '@ag-grid-community/core';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import BtnCellRenderer from '../BtnCellRenderer/BtnCellRenderer';
import { resetDefaultColumn } from './socket';

export default function OptionChain() {
    const getStrikePrice=useSelector((state)=>state.optionReducer.selectedStrike)
    const getCurrentSymbol=useSelector((state)=>state.optionReducer.currentSymbol)
    const bSocket = useSelector((state) => state.socketConnection.brcst_socket)
    const selectedData = useSelector((state) => state.optionReducer.selectedSymbol)
    const { setValue, value } = useComboboxControls({ initialValue: 'Nifty' });
/* 
    hotkeys("f5", (e) => {
    e.preventDefault();
  }); */
    

    
    window.onkeydown = (e) => { 
    console.log(e)
    if ((e.which || e.keyCode) === 116 || ((e.which || e.keyCode) === 82 && e.ctrlKey)) {
        // Pressing F5 or Ctrl+R
        e.preventDefault();
    } 
};

    return (
        <>
            {/* {console.log(getStrikePrice)} */}
            <div className='container-fluid'>
                <div className='row lesspadding'>
                    <div className='col-12 mt-3'>
                        <Breadcrumb>
                            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                            <Breadcrumb.Item active>Option Chart</Breadcrumb.Item>
                        </Breadcrumb>
                    </div>
                </div>
                <div className='bg-white p-2 option-chart-det'>
                    <div className='row lesspd'>
                        <div className='col-auto border-end'>
                            <div className='d-flex align-items-center'>
                                <AutoSearchBar  />
                               
                                <img src='./assets/img/graph.png' className='me-2' />
                                <img src='./assets/img/infoimg.png' className='me-2' />
                            </div>
                        </div>
                        <div className='col-auto border-end'>
                            <label>Expiry</label>
                    <ExpiryDate/>            
                        </div>
                       
                        <div className='col-auto border-end d-flex align-items-center'>ATM IV 26.8  <span className='gn-text d-flex align-items-center'> +10.6 </span></div>
                        <div className='col-auto border-end d-flex align-items-center'>IV Chart</div>
                        <div className='col-auto border-end d-flex align-items-center'>Analyze OI</div>
                        <div className='col-auto border-end d-flex align-items-center'>
                            <Form>
                                <Form.Check
                                    label="Per lot"
                                    type="switch"
                                    id="custom-switch"
                                />
                            </Form>
                        </div>
                        
                    </div>
                </div>
                <AgGrid />
                {/* <GridExample/> */}
            </div>
        </>
    )
}


  const AgGrid = () => {

    // let currentStrike = useSelector((state) => state.optionReducer.Strike)
    // let currentStrike2 = useSelector((state) => state.optionReducer.Strike2)
    let selectedStrike = useSelector((state) => state.optionReducer.selectedStrike)
    let currentExpiryDate = useSelector((state) => state.optionReducer.curExpDate)
    const bSocket = useSelector((state) => state.socketConnection.brcst_socket)
    const getCurrentSymbol = useSelector((state) => state.optionReducer.currentSymbol)
    const selectData = useSelector((state) => state.optionReducer.selectSymbol)
    const apiData = useSelector(state => state);
    const [rowData, setRowData] = useState()
    
    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);
    const [hideColumn, setHideColumn] = useState({
        "volume": true, "putSide-volume": true,volumeRef:undefined,
        oi: true, "putSide-oi": true,oiRef:undefined,
        "oi-change%": true, "putSide-oi-change%": true,oiChangeRef:undefined,
        iv: true, "putSide-iv": true,ivRef:undefined,
        "bid-offer": true,"putSide-bid-offer":true,bidOfferRef:undefined,
        delta: true,"putSide-delta":true,deltaRef:undefined,
        theta: true,"putSide-theta":true,thetaRef:undefined,
        gamma: true, "putSide-gamma": true,gammaRef:undefined,
        vegga: true, "putSide-vegga": true,veggaRef:undefined,
    }) 

      
      console.log(apiData)
    const volumeRef = useRef(false)
    const oiRef = useRef(false)
    const oiChangeRef = useRef(false)
    const ivRef = useRef(false)
    const bidOfferRef = useRef(false)
    const deltaRef = useRef(false)
    const gammaRef = useRef(false)
    const thetaRef = useRef(false) 
    const veggaRef = useRef(false)  

    const ref=[volumeRef,oiRef,oiChangeRef,ivRef,bidOfferRef,deltaRef,gammaRef,thetaRef,veggaRef]
    
    const gridRef = useRef();

    // const dispatch=useDispatch()
    // const socketLive=useSelector((state)=>state.optionReducer.socketData)
    const containerStyle = useMemo(() => ({ width: 'calc(100vw-40)', height: '80vh' }), []);
    const gridStyle = useMemo(() => ({ height: '80vh', width: 'calc(100vw-50)' }), []);
    
    // console.log(socketLive)
    

    const [columnDefs, setColumnDefs] = useState([
        {
            headerName: 'CALL',
            children: [
                {headerName:"ID",field:"id",maxWidth: 140},
                {headerName:"NGE%",field:"nge%",maxWidth: 140},
                {headerName:"OI-LAKH",field:"oi-lakh",   cellRenderer: BtnCellRenderer,
                cellRendererParams: {
                    clicked: function(field) {
                      alert(`${field} was clicked`);
                    },
                  }, maxWidth: 160 },
                
                //  {headerName:"LTP(CHG%)",field:"ltp(chg%)",minWidth: 140}, 
                {headerName:"LTP(CHG%)",field:"LTP1",maxWidth: 140},
                {headerName:"CALL-TOKEN",field:"CallToken",maxWidth: 140},
                {headerName:"VOLUME",field:"volume", hide:true,maxWidth: 140},
                {headerName:"OI",field:"oi", hide:true,maxWidth: 140},
                {headerName:"OI-CHANGE%",field:"oi-change%", hide:true,maxWidth: 140},
                {headerName:"DELTA",field:"delta", hide:true,maxWidth: 140},
                {headerName:"GAMMA",field:"gamma", hide:true,maxWidth: 140},
                {headerName:"VEGGA",field:"vegga", hide:true,maxWidth: 140},
                {headerName:"THETA",field:"theta", hide:true,maxWidth: 140},
                {headerName:"IV",field:"iv", hide:true,maxWidth: 140},
                {headerName:"BID-OFFER",field:"bid-offer", hide:true,maxWidth: 140},
            //    {headerName:"CALL-TOKEN",field:"callSide-token",minWidth: 155}, 
                //  {headerName:"STRIKE",field:"strike",minWidth: 160}, 
            ],
        },
        {
            headerName: 'PUT',
            children: [
               {headerName:"STRIKE",field:"Strike",maxWidth: 150},
               {headerName:"LTP(CHG%)",field:"LTP2",maxWidth: 140},
               {headerName:"PUT-TOKEN",field:"PutToken",maxWidth: 140},
                {headerName:"NGE%",field:"nge%",maxWidth: 140},
                {headerName:"OI-LAKH",field:"oi-lakh", cellRenderer:  BtnCellRenderer,
                cellRendererParams: {
                    clicked: function(field) {
                      alert(`${field} was clicked`);
                    },
                  }, maxWidth: 160 },
               
                {headerName:"VOLUME",field:"putSide-volume", hide:true,maxWidth: 140},
                {headerName:"OI",field:"putSide-oi", hide:true,minWidth: 140},
                {headerName:"OI-CHANGE%",field:"putSide-oi-change%", hide:true,maxWidth: 140},
                {headerName:"DELTA",field:"putSide-delta", hide:true,maxWidth: 140},
                {headerName:"GAMMA",field:"putSide-gamma", hide:true,maxWidth: 140},
                {headerName:"VEGGA",field:"putSide-vegga", hide:true,maxWidth: 140},
                {headerName:"THETA",field:"putSide-theta", hide:true,maxWidth: 140},
                {headerName:"IV",field:"putSide-iv", hide:true,maxWidth: 140},
                {headerName:"BID-OFFER",field:"putSide-bid-offer", hide:true,maxWidth: 140},   
            ],
        },
    ]);

    const defaultColDef = useMemo(() => {
        return {
            flex: 1,
            enableValue: true,
            enableRowGroup: true,
            minWidth: 200,
            sortable: true,
            resizable: true,
            editable: true, 
        //      filter: true, 
        };
    }, []);
    
    
    function onGridReady(params) {
        setGridApi(params.api);
        setGridColumnApi(params.columnApi);
   }  

    //     --- function for on/off button --- 

    const toggleColumn = (callSide, putSide) => {
         gridColumnApi.setColumnVisible(callSide,hideColumn[callSide])
        gridColumnApi.setColumnVisible(putSide,hideColumn[callSide])  
        setHideColumn((pre)=>({...pre,[callSide]:!hideColumn[callSide]}))  
        gridApi.sizeColumnsToFit() 
      } 

      
//   --- function for reset default on/off button --- 

  const reset =()=>{
      resetDefaultColumn?.map((item, i) => {
      
      ref[i].current.checked=false
      gridColumnApi.setColumnVisible(item.call,false)
      gridColumnApi.setColumnVisible(item.put,false)
      setHideColumn((pre)=>({...pre,
        [item.call]: true, [item.put]: true}))
      gridApi.sizeColumnsToFit()
        })
    }
    
    ModuleRegistry.registerModules([ClientSideRowModelModule]);

   const sendSocket = (token, symbol) => {
         console.log("request function")
   const d = new Date()
   const date = `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
             bSocket.send(`24$${date}$31$0#VIVEK$8#NSEFO#NSEFO#${token}#${symbol}#100`)
         }  

    const a = []
    
    function setGridData() {
        const tokenArray=[]
    

        selectedStrike?.map((item, i) => {
        const CallToken = selectData[item].CallToken
        const PutToken  = selectData[item].PutToken
        const LTP1=selectData[item].LTP1
        const LTP2 = selectData[item].LTP2
        const Strike=item
        const id = i
            tokenArray.push(CallToken,PutToken)
            a.push({ CallToken, PutToken, LTP1, LTP2, Strike, id })
        })
        

  tokenArray?.map((item) => {
           console.log(item)
            sendSocket(item,getCurrentSymbol)
      })

        
    }
    


    useMemo(()=>setGridData(),[currentExpiryDate,getCurrentSymbol])
    
    // console.log(a)
        useMemo(() => setRowData(a), [currentExpiryDate,getCurrentSymbol])
    
    useEffect(() => {
        bSocket.onmessage = (e) => {
            const socketData = e.data.split("#")
            console.log(socketData)
            if (socketData?.[0] === "57") {
            rowData?.find((item, id) => {
                    // console.log(item)
                    if (item.CallToken === socketData[3]) {
                        setCallToken(id,socketData[4])
                    } else if (item.PutToken === socketData[3]) {
                        setPutToken(id,socketData[4])
                    }
                }) 
            }
            // dispatch(liveData(socketData))
        } 
    }, [currentExpiryDate])

    const getRowId = useMemo(() => {
    return (params) => {
      return params.data.id;
    };
  }, []);
    
    const setPutToken = useCallback((id, ltp) => {
        var rowNode = gridRef.current.api.getRowNode(id);
        rowNode.setDataValue('LTP2', ltp); 
    }, []);

     const setCallToken = useCallback((id, ltp) => {
        var rowNode = gridRef.current.api.getRowNode(id);
        rowNode.setDataValue('LTP1', ltp); 
  }, []);

      const headerHeight = 40;
    
return (
    <>
        {console.log(hideColumn)}
    {/* //    <div className='col-auto ms-auto d-flex align-items-center'>   */}
          <div className='' style={{position:"absolute",top:"140px", marginLeft:"1100px"}}>
                            <Dropdown className="d-inline mx-2 settinglist" autoClose="outside" align="end">
                                <Dropdown.Toggle id="dropdown-autoclose-outside" className="setting-btn" >
                                    Setting
                                </Dropdown.Toggle>
                                <Dropdown.Menu className='dropmenucl p-3'>
                                    <div className='row'>
                                        <div className='col-12 text-end'>
                                            <button className='btn btn-sm btn-outline-primary ms-auto rounded-bl-btn' onClick={reset}> Reset to default</button>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="d-none d-lg-block  col-lg-auto">
                                            <p>No. Of strikes</p>
                                            <div className='border strikes-detail position-relative overflow-hidden '>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="388" className="svg-img" ><path d="M.5 145h15m-15 36h15m-15-3h15m-15-3h15m-15-3h15m-15-3h15m-15-3h15m-15-3h15m-15-3h15m-15-3h15m-15-3h15m-15-3h15m-15-3h15m-15-42h15m-15 36h15m-15-3h15m-15-3h15m-15-3h15m-15-3h15m-15-3h15m-15-3h15m-15-3h15m-15-3h15m-15-3h15m-15-3h15m-15-3h15M.5 246h15m-15 36h15m-15-3h15m-15-3h15m-15-3h15m-15-3h15m-15-3h15m-15-3h15m-15-3h15m-15-3h15m-15-3h15m-15-3h15m-15-3h15m-15-6h15m-15-3h15m-15-3h15m-15-3h15m-15-3h15m-15-3h15m-15-3h15m-15-3h15m-15-3h15m-15-3h15m-15-3h15m-15-3h15m-15 75h15m-15 36h15m-15-3h15m-15-3h15m-15-3h15m-15-3h15m-15-3h15m-15-3h15m-15-3h15m-15-3h15m-15-3h15m-15-3h15m-15-3h15m-15-6h15m-15 75h15m-15-3h15m-15-3h15m-15-3h15m-15-3h15m-15 27h15m-15-3h15m-15-3h15m-15-3h15m-15-3h15m-15 24h15m-15 3h15m-15-6h15m-15-3h15m-15-3h15m-15-33h15m-15-3h15m-15-3h15m-15-3h15m-15-3h15m-15-3h15m-15-3h15m-15-6h15M.5 103h15m-15-3h15m-15-3h15m-15-3h15m-15-3h15m-15-3h15m-15-3h15m-15-3h15m-15-3h15m-15-3h15m-15-3h15m-15-3h15m-15-3h15m-15-3h15m-15-3h15m-15-3h15m-15-3h15m-15-3h15m-15-3h15m-15-3h15m-15-3h15m-15-3h15m-15-3h15m-15-3h15m-15-3h15m-15-3h15m-15-3h15m-15-3h15m-15-3h15m-15-3h15m-15-3h15m-15-3h15M.5 7h15M.5 4h15M.5 1h15" stroke="#b3b3b3" fill="none" fillRule="evenodd" strokeLinecap="square" ></path></svg>
                                                <div className='d-flex flex-column button-div '>
                                                    <button className='btn btn-sm btn-outline-primary'>
                                                        40
                                                    </button>
                                                    <button className='btn btn-sm btn-outline-primary'>
                                                        30
                                                    </button>
                                                    <button className='btn btn-sm btn-outline-primary activecl'>
                                                        20
                                                    </button>
                                                    <button className='btn btn-sm btn-outline-primary'>
                                                        10
                                                    </button>
                                                </div>
                                                <div className='strike-seprator'>
                                                </div>
                                                <div className='d-flex flex-column  button-div'>
                                                    <button className='btn btn-sm btn-outline-primary'>
                                                        10
                                                    </button>
                                                    <button className='btn btn-sm btn-outline-primary'>
                                                        20
                                                    </button>
                                                    <button className='btn btn-sm btn-outline-primary'>
                                                        30
                                                    </button>
                                                    <button className='btn btn-sm btn-outline-primary'>
                                                        40
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-lg'>
                                            <Form>
                                                <Form.Check
                                                    className='mb-2'
                                                    label="Dark Theme"
                                                    type="switch"
                                                    id="custom-switch"
                                                />
                                                <Form.Check onClick={() => toggleColumn("volume","putSide-volume") }
                                                    className='mb-2'
                                                    label="Volume"
                                                    type="switch"
                                                    id="custom-switch"
                                                    ref={volumeRef}
                                                />
                                                
                                                  <Form.Check  onClick={()=> toggleColumn("oi","putSide-oi")} 
                                                    className='mb-2'
                                                    label="OI Change"
                                                    type="switch"
                                                    id="custom-switch"
                                                     ref={oiRef}
                                                />
                                                <Form.Check onClick={()=> toggleColumn('oi-change%',"putSide-oi-change%")} 
                                                    className='mb-2'
                                                    label="OI Change %"
                                                    type="switch"
                                                    id="custom-switch"
                                                      ref={oiChangeRef}
                                                />
                                               <Form.Check onClick={()=>toggleColumn("iv","putSide-iv")}
                                                    label="IV"
                                                    type="switch"
                                                    id="custom-switch"
                                                       ref={ivRef}
                                                />
                                                <Form.Check onClick={()=>toggleColumn("bid-offer","putSide-bid-offer")}
                                                    className='mb-2'
                                                    label="Bid Offer"
                                                    type="switch"
                                                    id="custom-switch"
                                                       ref={bidOfferRef}
                                                />
                                {
                                    getCurrentSymbol === "NIFTY" ? <Form.Check
                                                    className='mb-2'
                                                    label="Show 100 multiples only"
                                                    type="switch"
                                                    id="custom-switch"
                                    /> : null
                                }
                                                <p className='mt-2'>Greeks</p>
                                                <div className='row'>
                                                <div className='col-6' >  <Form.Check   onClick={()=>toggleColumn("delta","putSide-delta")}   
                                                        className='mb-2'
                                                        label="Delta"
                                                        type="switch"
                                                        id="custom-switch" 
                                                          ref={deltaRef}
                                                    />
                                                    </div>
                                                    <div className='col-6'>  <Form.Check   onClick={()=>toggleColumn("gamma","putSide-gamma")}  
                                                        className='mb-2'
                                                        label="Gamma"
                                                        type="switch"
                                                        id="custom-switch"
                                                          ref={gammaRef}
                                    />
                                    </div>
                                                </div>
                                                <div className='row'>
                                                    <div className='col-6'>  <Form.Check onClick={()=>toggleColumn("theta","putSide-theta")}  
                                                        className='mb-2'
                                                        label="Theta"
                                                        type="switch"
                                                        id="custom-switch"
                                                         ref={thetaRef}     
                                    />
                                    </div>
                                                    <div className='col-6'>  <Form.Check  onClick={()=>toggleColumn("vegga","putSide-vegga")} 
                                                        className='mb-2'
                                                        label="Vega"
                                                        type="switch"
                                                        id="custom-switch"
                                                          ref={veggaRef} 
                                    />
                                    </div>
                                                </div>
                                                <p className='mt-2'>Premium Features</p>
                                                <Form.Check
                                                    className='mb-2'
                                                    label="Per Strike PCR"
                                                    type="switch"
                                                    id="custom-switch"
                                                />
                                                <Form.Check
                                                    className='mb-2'
                                                    label="Intrinsic Value(spot)"
                                                    type="switch"
                                                    id="custom-switch"
                                                />
                                                <Form.Check
                                                    className='mb-2'
                                                    label="Intrinsic Value(futures)"
                                                    type="switch"
                                                    id="custom-switch"
                                                />
                                                <Form.Check
                                                    className='mb-2'
                                                    label="Time Value"
                                                    type="switch"
                                                    id="custom-switch"
                                                />
                                                <Form.Check
                                                    className='mb-2'
                                                    label="POP(Probability of Profit)"
                                                    type="switch"
                                                    id="custom-switch"
                                                />
                                            </Form>
                                        </div>
                                    </div>
                                </Dropdown.Menu>
                            </Dropdown>
        </div>
        
                    
        <div className='row lesspadding'>
            <div className='col-12'>
                <div style={containerStyle}>
                    <div style={gridStyle} className="ag-theme-alpine">
                    <AgGridReact
                     onGridReady={onGridReady} 
                     rowData={rowData}
                     columnDefs={columnDefs}
                     defaultColDef={defaultColDef} 
                     ref={gridRef} 
                     rowHeight={35} 
                     animateRows={true}
                     getRowId={getRowId}
                            headerHeight={headerHeight} 
                          
            
                />
                    </div>
                </div>
            </div>
        </div> 
        </>
    )
}