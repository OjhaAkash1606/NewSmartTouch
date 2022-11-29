import { faDivide } from '@fortawesome/free-solid-svg-icons';
import React, { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import { selectedSymbolData,selectedStrikePrice ,allSelectedDate,currentSymbol,gridStrike,strikeBasedToken, defaultSymbol} from '../../redux/action/action';

function AutoSearchBar() {

  // console.log(bSocket)
  const symbolDispatch=useDispatch()
  const dispatch=useDispatch()
  const items=useSelector((state)=>state.optionReducer.uniqueOptionSymbol)
  const selectedSymbol=useSelector((state)=>state.optionReducer.selectSymbol)
  const bSocket = useSelector((state) => state.socketConnection.brcst_socket)
  const getStrikePrice = useSelector((state) => state.optionReducer.selectedStrike)
  let selectedData = useSelector((state) => state.optionReducer.selectedSymbol)
  const getCurrentSymbol = useSelector((state) => state.optionReducer.currentSymbol)
  const getExpDate = useSelector((state) => state.optionReducer.curExpDate)
   const getOptionData = useSelector((state) => state.optionReducer.apiData)

  const [curExpDate,setCurExpDate]=useState()
  // const main = useSelector((state) => state.optionReducer)

  //  

  const tokenArray=[]
  
// console.log(getExpDate)

  const sendSocket = (token, symbol) => {
  const d = new Date()
  const date = `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()} ${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`
            bSocket.send(`24$${date}$31$0#VIVEK$8#NSEFO#NSEFO#${token}#${symbol}#100`)
        }

  const getAllToken = () => {
    console.log("getAllToken")
    const currentStrike = []
    const token={}
    getStrikePrice?.map((item,id) => {
      
      selectedData = selectedData ? selectedData:"NIFTY"
      
      const callToken = selectedData[item]?.call[6]
      const expDate = selectedData[item]?.call[2]
      const putToken = selectedData[item]?.put[6]

      console.log(expDate)


     
      currentStrike.push({ "Strike": item, id,"CallToken":callToken,"PutToken":putToken,"LTP1":"00.00","LTP2":"00.00",expDate});
     

      token[callToken]=item
      token[putToken]=item
      
      tokenArray.push(callToken)
      tokenArray.push(putToken)
      })

      dispatch(strikeBasedToken(token))
      dispatch(gridStrike(currentStrike))
      tokenArray?.map((item) => {
      sendSocket(item,getCurrentSymbol)
      })
    
  }

 /*  window.onload = () => {
    handleOnSelect("NIFTY");
  }  
 */
  useMemo(() => getAllToken(), [getCurrentSymbol])
 

  useMemo(()=>setCurExpDate(getExpDate),[getExpDate])
  
const handleOnSearch = (string, results) => {
   
  }

  const handleOnHover = (result) => {
   
  }

  
  const handleOnSelect = (item) => {
     
    const symbol = item.name ?  item.name : item;
    // const defaultSymbol = !item.name ?  item : null;
    // const symbol = item.name ;
    const selectedDataOnSearch = []
    console.log(symbol)
    const selectDate = []
    getOptionData?.NSE_OPTIDX?.map((items) => {
      const spltData = items.split(",");
      if (symbol === spltData[0]) {
        selectedDataOnSearch.push(spltData)
        selectDate.push(spltData[2])
      }
    })

    getOptionData?.NSE_OPTSTK?.map((items) => {
      const spltData = items.split(",");
      if (symbol === spltData[0]) {
        selectedDataOnSearch.push(spltData)
         selectDate.push(spltData[2])
      }
    })
    console.log(selectedDataOnSearch)
    
    //  const expiryDate = selectedDataOnSearch.filter((v, i, a) => a.indexOf(v) === i);
     
       const expiryDate = selectDate.filter((v, i, a) => a.indexOf(v) === i);

        dispatch(allSelectedDate(expiryDate))
        // dispatch(defaultSymbol())
        dispatch(currentSymbol(symbol))
    symbolDispatch(selectedSymbolData(selectedDataOnSearch))

  }

  useMemo(() => handleOnSelect("NIFTY"), [])
  
  /* window.onpage = () => {
    console.log("onPageLoad")
    handleOnSelect("NIFTY");
  }  */ 


  const handleOnFocus = () => {
  }

  const formatResult = (item) => {
    return (
      <>
          <span style={{ display: 'block', textAlign: 'left' }}>{item.name}</span> 
      </>
    )
  }

  return (
    <div className='d-flex align-items-center autoselect-input'>
    <div className='datalist-container' style={{ width: 300, zIndex:1 }}>
        <ReactSearchAutocomplete
          items={items}
          onSearch={handleOnSearch}
           onHover={handleOnHover}
          onSelect={handleOnSelect}
          //  onFocus={handleOnFocus}
          fuseOptions={{ keys: ["name"] }}
            resultStringKeyName="name" 
          formatResult={formatResult}
          inputSearchString={"NIFTY"}
          />
    </div>
    </div>
  );
}

export default AutoSearchBar;
