import React, { useCallback, useEffect, useMemo, useState,useRef} from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import AutoSearchBar from '../SearchBar/AutoSearchBar';
import Form from 'react-bootstrap/Form';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import DatalistInput, { useComboboxControls } from 'react-datalist-input';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { expDate, gridStrike, gridStrike2, liveData } from '../../redux/action/action';
import Expiry, { ExpiryDate } from '../OptionChart/Expiry';
import { render } from 'react-dom';
import { ModuleRegistry } from '@ag-grid-community/core';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import  BtnCellRenderer from '../../pages/BtnCellRenderer/BtnCellRenderer'; 

export default function OptionChart() {
    const getStrikePrice=useSelector((state)=>state.optionReducer.selectedStrike)
    const getCurrentSymbol=useSelector((state)=>state.optionReducer.currentSymbol)
    const bSocket = useSelector((state) => state.socketConnection.brcst_socket)
    const selectedData = useSelector((state) => state.optionReducer.selectedSymbol)
   
    const { setValue, value } = useComboboxControls({ initialValue: 'Nifty' });

    
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

    let currentStrike = useSelector((state) => state.optionReducer.Strike)
    let currentStrike2 = useSelector((state) => state.optionReducer.Strike2)
    let selectedStrike = useSelector((state) => state.optionReducer.selectedStrike)
    let currentExpiryDate = useSelector((state) => state.optionReducer.curExpDate)
    const bSocket = useSelector((state) => state.socketConnection.brcst_socket)
    const getCurrentSymbol = useSelector((state) => state.optionReducer.currentSymbol)
     const selectData = useSelector((state) => state.optionReducer.selectSymbol)
    const [InitialRowData, setInitialRowData] = useState(); //1
    const [rowData, setRowData] = useState()
    const [toggle, setToggle] = useState(false); //1

    const [gridApiVolume, setGridApiVolume] = useState(null);
    const [gridColumnApiVolume, setGridColumnApiVolume] = useState(null);
    const [hideColumnVolume,setHideColumnVolume]=useState(true) 

    const [gridApiOi, setGridApiOi] = useState(null);
    const [gridColumnApiOi, setGridColumnApiOi] = useState(null);
    const [hideColumnOi,setHideColumnOi]=useState(true) 

    const [gridApiOiper, setGridApiOiper] = useState(null);
    const [gridColumnApiOiper, setGridColumnApiOiper] = useState(null);
    const [hideColumnOiper,setHideColumnOiper]=useState(true)  

    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);
    const [hideColumn,setHideColumn]=useState(true) 

    const [gridApiGamma, setGridApiGamma] = useState(null);
    const [gridColumnApiGamma, setGridColumnApiGamma] = useState(null);
    const [hideColumnGamma,setHideColumnGamma]=useState(true) 

    const [gridApiTheta, setGridApiTheta] = useState(null);
    const [gridColumnApiTheta, setGridColumnApiTheta] = useState(null);
    const [hideColumnTheta,setHideColumnTheta]=useState(true) 

    const [gridApiVega, setGridApiVega] = useState(null);
    const [gridColumnApiVega, setGridColumnApiVega] = useState(null);
    const [hideColumnVega,setHideColumnVega]=useState(true)  

    const [gridApiIv, setGridApiIv] = useState(null);
    const [gridColumnApiIv, setGridColumnApiIv] = useState(null);
    const [hideColumnIv,setHideColumnIv]=useState(true) 

    const [gridApiBidOffer, setGridApiBidOffer] = useState(null);
    const [gridColumnApiBidOffer, setGridColumnApiBidOffer] = useState(null);
    const [hideColumnBidOffer,setHideColumnBidOffer]=useState(true)

   /*  ---- Reset default on/off hooks ---- */

    const [setDefault,setStateDefault] = useState()
    const [setOiDefault,setStateOiDefault] = useState()
    const [setOiChangeDefault,setStateOiChangeDefault] = useState() 
    const [setDefaultIv,setStateDefaultIv] = useState() 
    const [setDefaultBidOffer,setStateDefaultBidOffer] = useState()
    const [setDefaultDelta,setStateDefaultDelta] = useState()   
    const [setDefaultGamma,setStateDefaultGamma] = useState()
    const [setDefaultVega,setStateDefaultVega] = useState()
    const [setDefaultTheta,setStateDefaultTheta] = useState()
  
    const resetDefault = useRef(false)
    const resetDefaultOi = useRef(false)
    const resetDefaultOiChange = useRef(false)
    const resetDefaultIv = useRef(false)
    const resetDefaultBidOffer = useRef(false)
    const resetDefaultDelta = useRef(false)
    const resetDefaultGamma = useRef(false)
    const resetDefaultVega = useRef(false)
    const resetDefaultTheta = useRef(false)
    
    const gridRef = useRef();

    const dispatch=useDispatch()
    const socketLive=useSelector((state)=>state.optionReducer.socketData)    
    const containerStyle = useMemo(() => ({ width: 'calc(100vw-40)', height: '80vh' }), []);
    const gridStyle = useMemo(() => ({ height: '80vh', width: 'calc(100vw-50)' }), []);
    

    const [columnDefs, setColumnDefs] = useState([
        {
            headerName: 'CALL',
            children: [
                {headerName:"ID",field:"id",minWidth: 140},
                {headerName:"NGE%",field:"nge%",maxWidth: 140},
                {headerName:"OI-LAKH",field:"oi-lakh",   cellRenderer: BtnCellRenderer,
                cellRendererParams: {
                    clicked: function(field) {
                      alert(`${field} was clicked`);
                    },
                  }, maxWidth: 160 },
                
                /* {headerName:"LTP(CHG%)",field:"ltp(chg%)",minWidth: 140}, */
                {headerName:"LTP(CHG%)",field:"LTP1",minWidth: 140},
                {headerName:"CALL-TOKEN",field:"CallToken",minWidth: 140},
                {headerName:"VOLUME",field:"volume", hide:true,minWidth: 140},
                {headerName:"OI",field:"oi", hide:true,maxWidth: 140},
                {headerName:"OI-CHANGE%",field:"oi-change%", hide:true,minWidth: 140},
                {headerName:"DELTA",field:"delta", hide:true,minWidth: 140},
                {headerName:"GAMMA",field:"gamma", hide:true,minWidth: 140},
                {headerName:"VEGGA",field:"vegga", hide:true,minWidth: 140},
                {headerName:"THETA",field:"theta", hide:true,minWidth: 140},
                {headerName:"IV",field:"iv", hide:true,minWidth: 140},
                {headerName:"BID-OFFER",field:"bid-offer", hide:true,minWidth: 140},
               /*  {headerName:"CALL-TOKEN",field:"call-token",minWidth: 155}, */
                /* {headerName:"STRIKE",field:"strike",minWidth: 160}, */
            ],
        },
        {
            headerName: 'PUT',
            children: [
               {headerName:"STRIKE",field:"Strike",maxWidth: 150},
               {headerName:"LTP(CHG%)",field:"LTP2",minWidth: 140},
               {headerName:"PUT-TOKEN",field:"PutToken",minWidth: 140},
                {headerName:"NGE%",field:"nge%",maxWidth: 140},
                {headerName:"OI-LAKH",field:"oi-lakh", cellRenderer:  BtnCellRenderer,
                cellRendererParams: {
                    clicked: function(field) {
                      alert(`${field} was clicked`);
                    },
                  }, maxWidth: 160 },
               
                {headerName:"VOLUME",field:"put-volume", hide:true,minWidth: 140},
                {headerName:"OI",field:"put-oi", hide:true,minWidth: 140},
                {headerName:"OI-CHANGE%",field:"put-oi-change%", hide:true,minWidth: 140},
                {headerName:"DELTA",field:"put-delta", hide:true,minWidth: 140},
                {headerName:"GAMMA",field:"put-gamma", hide:true,minWidth: 140},
                {headerName:"VEGGA",field:"put-vegga", hide:true,minWidth: 140},
                {headerName:"THETA",field:"put-theta", hide:true,minWidth: 140},
                {headerName:"IV",field:"put-iv", hide:true,minWidth: 140},
                {headerName:"BID-OFFER",field:"put-bid-offer", hide:true,minWidth: 140},   
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
           /*  filter: true, */
        };
    }, []);
    function onGridReady(params) {
    
        setGridApi(params.api);
        setGridColumnApi(params.columnApi);
 
        setGridApiVolume(params.api);
        setGridColumnApiVolume(params.columnApi);

        setGridApiOi(params.api);
        setGridColumnApiOi(params.columnApi); 

        setGridApiOiper(params.api);
        setGridColumnApiOiper(params.columnApi); 

        setGridApiGamma(params.api);
        setGridColumnApiGamma(params.columnApi);

        setGridApiTheta(params.api);
        setGridColumnApiTheta(params.columnApi);

        setGridApiVega(params.api);
        setGridColumnApiVega(params.columnApi);

        setGridApiIv(params.api);
        setGridColumnApiIv(params.columnApi);

        setGridApiBidOffer(params.api);
        setGridColumnApiBidOffer(params.columnApi);
    
    }  
       /* --- function for on/off button --- */

      const showColumnVolume=()=>{
        console.log("showColumnVolume")
        gridColumnApiVolume.setColumnVisible('volume',hideColumnVolume) 
        gridColumnApiVolume.setColumnVisible('put-volume',hideColumnVolume)  
        setHideColumnVolume(!hideColumnVolume)  
        gridApiVolume.sizeColumnsToFit()
      } 

      const showColumnOi=()=>{
        gridColumnApiOi.setColumnVisible('oi',hideColumnOi) 
        gridColumnApiOi.setColumnVisible('put-oi',hideColumnOi) 
        setHideColumnOi(!hideColumnOi)  
        gridApiOi.sizeColumnsToFit()
      } 

      const showColumnOiper=()=>{
        gridColumnApiOiper.setColumnVisible('oi-change%',hideColumnOiper)
        gridColumnApiOiper.setColumnVisible('put-oi-change%',hideColumnOiper) 
        setHideColumnOiper(!hideColumnOiper)  
        gridApiOiper.sizeColumnsToFit()
      } 

      const showColumnIv=()=>{
        gridColumnApiIv.setColumnVisible('iv',hideColumnIv) 
        gridColumnApiIv.setColumnVisible('put-iv',hideColumnIv) 
        setHideColumnIv(!hideColumnIv)  
        gridApiIv.sizeColumnsToFit()
    
    } 
    const showColumnBidOffer=()=>{
        gridColumnApiBidOffer.setColumnVisible('bid-offer',hideColumnBidOffer) 
        gridColumnApiBidOffer.setColumnVisible('put-bid-offer',hideColumnBidOffer) 
        setHideColumnBidOffer(!hideColumnBidOffer)  
        gridApiBidOffer.sizeColumnsToFit()
    
    }   
      const showColumn=()=>{
        gridColumnApi.setColumnVisible('delta',hideColumn) 
        gridColumnApi.setColumnVisible('put-delta',hideColumn) 
        setHideColumn(!hideColumn)  
        gridApi.sizeColumnsToFit()
      } 

      const showColumnGamma=()=>{
        gridColumnApiGamma.setColumnVisible('gamma',hideColumnGamma)
        gridColumnApiGamma.setColumnVisible('put-gamma',hideColumnGamma) 
        setHideColumnGamma(!hideColumnGamma)  
        gridApiGamma.sizeColumnsToFit()
      } 

      const showColumnTheta=()=>{
        gridColumnApiTheta.setColumnVisible('theta',hideColumnTheta) 
        gridColumnApiTheta.setColumnVisible('put-theta',hideColumnTheta)
        setHideColumnTheta(!hideColumnTheta)  
        gridApiTheta.sizeColumnsToFit()
      } 

      const showColumnVega=()=>{
        gridColumnApiVega.setColumnVisible('vegga',hideColumnVega) 
        gridColumnApiVega.setColumnVisible('put-vegga',hideColumnVega) 
        setHideColumnVega(!hideColumnVega)  
        gridApiVega.sizeColumnsToFit()
  }  

  /* --- function for reset default on/off button --- */

  const reset =()=>{

    if(hideColumnVolume===false){
        console.log("Reset function call")
        resetDefault.current.checked=false
        gridColumnApiVolume.setColumnVisible('volume',hideColumnVolume) 
        gridColumnApiVolume.setColumnVisible('put-volume',hideColumnVolume)  
        setHideColumnVolume(true)  
        gridApiVolume.sizeColumnsToFit() 
        setStateDefault(true) 
    }

    if(hideColumnOi===false){
        console.log("Reset function call")
        resetDefaultOi.current.checked=false
        gridColumnApiOi.setColumnVisible('oi',hideColumnOi) 
        gridColumnApiOi.setColumnVisible('put-oi',hideColumnOi) 
        setHideColumnOi(true)  
        gridApiOi.sizeColumnsToFit() 
        setStateOiDefault(true) 
    }

    if(hideColumnOiper===false){
        console.log("Reset function call")
        resetDefaultOiChange.current.checked=false
        gridColumnApiOiper.setColumnVisible('oi-change%',hideColumnOiper)
        gridColumnApiOiper.setColumnVisible('put-oi-change%',hideColumnOiper)
        setHideColumnOiper(true)  
        gridApiOiper.sizeColumnsToFit()
        setStateOiChangeDefault(true) 
    }

    if(hideColumnIv===false){
        console.log("Reset function call")
        resetDefaultIv.current.checked=false
        gridColumnApiIv.setColumnVisible('iv',hideColumnIv) 
        gridColumnApiIv.setColumnVisible('put-iv',hideColumnIv) 
        setHideColumnIv(true)  
        gridApiIv.sizeColumnsToFit()
        setStateDefaultIv(true) 
    }

    if(hideColumnBidOffer===false){
        console.log("Reset function call")
        resetDefaultBidOffer.current.checked=false
        gridColumnApiBidOffer.setColumnVisible('bid-offer',hideColumnBidOffer) 
        gridColumnApiBidOffer.setColumnVisible('put-bid-offer',hideColumnBidOffer)   
        setHideColumnBidOffer(true)  
        gridApiBidOffer.sizeColumnsToFit()
        setStateDefaultBidOffer(true) 
    }

    if(hideColumn===false){
        console.log("Reset function call")
        resetDefaultDelta.current.checked=false
        gridColumnApi.setColumnVisible('delta',hideColumn) 
        gridColumnApi.setColumnVisible('put-delta',hideColumn)   
        setHideColumn(true)  
        gridApi.sizeColumnsToFit()
        setStateDefaultDelta(true) 
    }

    if(hideColumnGamma===false){
        console.log("Reset function call")
        resetDefaultGamma.current.checked=false
        gridColumnApiGamma.setColumnVisible('gamma',hideColumnGamma)
        gridColumnApiGamma.setColumnVisible('put-gamma',hideColumnGamma) 
        setHideColumnGamma(true)  
        gridApiGamma.sizeColumnsToFit()
        setStateDefaultGamma(true) 
    }

    if(hideColumnTheta===false){
        console.log("Reset function call")
        resetDefaultTheta.current.checked=false
        gridColumnApiTheta.setColumnVisible('theta',hideColumnTheta) 
        gridColumnApiTheta.setColumnVisible('put-theta',hideColumnTheta) 
        setHideColumnTheta(true)  
        gridApiTheta.sizeColumnsToFit()
        setStateDefaultTheta(true)
    }

    if(hideColumnVega===false){
        console.log("Reset function call")
        resetDefaultVega.current.checked=false
        gridColumnApiVega.setColumnVisible('vegga',hideColumnVega) 
        gridColumnApiVega.setColumnVisible('put-vegga',hideColumnVega) 
        setHideColumnVega(true)  
        gridApiVega.sizeColumnsToFit()
        setStateDefaultVega(true) 
    }
 }

     ModuleRegistry.registerModules([ClientSideRowModelModule]);
     const a=[]
    selectedStrike?.map((item, i) => {
         
        const CallToken = selectData[item].CallToken
        const PutToken  = selectData[item].PutToken
         const LTP1=selectData[item].LTP1
        const LTP2 = selectData[item].LTP2
        const Strike=item
         const id=i
        a.push({CallToken,PutToken,LTP1,LTP2,Strike,id})
    })
    
    console.log(a)
        useMemo(() => setRowData(a), [currentExpiryDate])
    
    useEffect(() => {
        bSocket.onmessage = (e) => {
            const socketData = e.data.split("#")
            dispatch(liveData(socketData))
        } 
    }, [getCurrentSymbol])

    useEffect(() => {
        if (socketLive?.[0] === "57") {
                currentStrike2?.find((item,id) => {
                    if (item.CallToken === socketLive[3]) {
                        setCallToken(id,socketLive[4])
                    } else if (item.PutToken === socketLive[3]) {
                        setPutToken(id,socketLive[4])
                    }
                }) 
            }
    }, [socketLive])

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
          {/* <div className='col-auto ms-auto d-flex align-items-center'> */}
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
                                                <Form.Check onClick={() => showColumnVolume()}
                                                    className='mb-2'
                                                    label="Volume"
                                                    type="switch"
                                                    id="custom-switch"
                                                    onChange={() => {
                                                        setStateDefault(resetDefault.current.checked)
                                                      }}
                                                      ref={resetDefault}
                                                />
                                                  <Form.Check  onClick={()=> showColumnOi()} 
                                                    className='mb-2'
                                                    label="OI Change"
                                                    type="switch"
                                                    id="custom-switch"
                                                    onChange={() => {
                                                        setStateOiDefault(resetDefaultOi.current.checked)
                                                      }}
                                                      ref={resetDefaultOi}
                                                />
                                                <Form.Check onClick={()=> showColumnOiper()} 
                                                    className='mb-2'
                                                    label="OI Change %"
                                                    type="switch"
                                                    id="custom-switch"
                                                    onChange={() => {
                                                        setStateOiChangeDefault(resetDefaultOiChange.current.checked)
                                              }}
                                                      ref={resetDefaultOiChange}
                                                />
                                               <Form.Check onClick={()=>showColumnIv()}
                                                    label="IV"
                                                    type="switch"
                                                    id="custom-switch"
                                                    onChange={() => {
                                                        setStateDefaultIv(resetDefaultIv.current.checked)
                                                      }}
                                                      ref={resetDefaultIv}
                                                />
                                                <Form.Check onClick={()=>showColumnBidOffer()}
                                                    className='mb-2'
                                                    label="Bid Offer"
                                                    type="switch"
                                                    id="custom-switch"
                                                    onChange={() => {
                                                        setStateDefaultBidOffer(resetDefaultBidOffer.current.checked)
                                                      }}
                                                      ref={resetDefaultBidOffer}
                                                />
                                                <Form.Check
                                                    className='mb-2'
                                                    label="Show 100 multiples only"
                                                    type="switch"
                                                    id="custom-switch"
                                                />
                                                <p className='mt-2'>Greeks</p>
                                                <div className='row'>
                                                <div className='col-6' >  <Form.Check  onClick={showColumn}  
                                                        className='mb-2'
                                                        label="Delta"
                                                        type="switch"
                                                        id="custom-switch" 
                                                        onChange={() => {
                                                            setStateDefaultDelta(resetDefaultDelta.current.checked)
                                                          }}
                                                          ref={resetDefaultDelta}
                                                    />
                                                    </div>
                                                    <div className='col-6'>  <Form.Check  onClick={showColumnGamma} 
                                                        className='mb-2'
                                                        label="Gamma"
                                                        type="switch"
                                                        id="custom-switch"
                                                        onChange={() => {
                                                            setStateDefaultGamma(resetDefaultGamma.current.checked)
                                                          }}
                                                          ref={resetDefaultGamma}
                                                    /></div>
                                                </div>
                                                <div className='row'>
                                                    <div className='col-6'>  <Form.Check onClick={showColumnTheta}  
                                                        className='mb-2'
                                                        label="Theta"
                                                        type="switch"
                                                        id="custom-switch"
                                                        onChange={() => {
                                                            setStateDefaultTheta(resetDefaultTheta.current.checked)   
                                                          }}
                                                          ref={resetDefaultTheta}      
                                                    /></div>
                                                    <div className='col-6'>  <Form.Check  onClick={showColumnVega}  
                                                        className='mb-2'
                                                        label="Vega"
                                                        type="switch"
                                                        id="custom-switch"
                                                        onChange={() => {
                                                            setStateDefaultVega(resetDefaultVega.current.checked)
                                                          }}
                                                          ref={resetDefaultVega}
                                                    /></div>
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
