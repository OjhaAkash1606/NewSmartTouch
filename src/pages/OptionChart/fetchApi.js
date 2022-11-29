import React, {  useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { filterDataPost, unqSymbolAction } from '../../redux/action/action';


function FetchApi() {
    const dispatch = useDispatch()
    const getOptionData = useSelector((state) => state.optionReducer.apiData)
    const bSocket = useSelector((state) => state.socketConnection.brcst_socket)
    const selectedData = useSelector((state) => state.optionReducer.selectedSymbol)
    const [filterData,setFilterData]=useState({})
    
  useMemo(() =>{ bSocket.onopen = (e) => {
    console.log("message socket connect")
             console.count(e)
  };
  bSocket.onerror=(e)=>{console.log(e)}
  }
    
    , [])
    
    const filterApiData = () => {

     
        
        bSocket.onclose = e => console.count(e)
        const optionSymbol = []
        const unqSymbolObj = []
        
        let filterOptionData = {};
        // let aloneSymbol=[]
        
                
           getOptionData?.NSE_OPTIDX?.map((item, i) => {
                const spltData = item.split(",");
                optionSymbol.push(spltData[0]);
                const symbol=spltData[0]
              //  aloneSymbol.push(spltData)
            }); 
            
        
              getOptionData?.NSE_OPTSTK?.map((item) => {
                const spltData = item.split(",");
                optionSymbol.push(spltData[0]);
                  // aloneSymbol.push(spltData)
            });  
        
        const unqSymbol = [...new Set(optionSymbol)]
        
        unqSymbol.map((items) => {
            unqSymbolObj.push({id:items,name:items,selectedData})
        })
        
        dispatch(unqSymbolAction(unqSymbolObj))
        dispatch(filterDataPost(filterOptionData))
    }
    
    useEffect(()=>{filterApiData()},[getOptionData])


  return (
      <>
          
      </>
  )
}

export default FetchApi