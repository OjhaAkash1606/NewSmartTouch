import React, {  useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { filterDataPost, unqSymbolAction } from '../../redux/action/action';


function FetchApi() {
    // const [symbolData,setSymbolData]=useState()
    const dispatch = useDispatch()
    // const filterDispatch = useDispatch()
    const getOptionData = useSelector((state) => state.optionReducer.apiData)
    const bSocket = useSelector((state) => state.socketConnection.brcst_socket)
    const selectedData = useSelector((state) => state.optionReducer.selectedSymbol)
    const [filterData,setFilterData]=useState({})
    
    
    console.log(getOptionData)
    
    const filterApiData = () => {
        
         bSocket.onopen = (e) => {
                
            } 

        const optionSymbol = []
        const unqSymbolObj = []
        
        let filterOptionData = {};
        let aloneSymbol=[]
        
                
           getOptionData?.NSE_OPTIDX?.map((item, i) => {
                const spltData = item.split(",");
                optionSymbol.push(spltData[0]);
                const symbol=spltData[0]
               aloneSymbol.push(spltData)
              /*  unqSymbolObj[spltData[0]]={...unqSymbolObj[spltData[0]],"name":spltData[0]} */
                  
            }); 
            
        
              getOptionData?.NSE_OPTSTK?.map((item) => {
            
                const spltData = item.split(",");
                optionSymbol.push(spltData[0]);
                  aloneSymbol.push(spltData)
                  
                 /*  unqSymbolObj[spltData[0]]={...unqSymbolObj[spltData[0]],"name":spltData[0]} */
                /* if (spltData[8] === "CE") {
                    filterOptionData[spltData[0]] = { ...filterOptionData[spltData[0]], [spltData[7]]: { ...filterOptionData[spltData[0]]?.[spltData[7]], "call": spltData }};
                } else if (spltData[8] === "PE") {
                    filterOptionData[spltData[0]] = { ...filterOptionData[spltData[0]], [spltData[7]]: { ...filterOptionData[spltData[0]]?.[spltData[7]], "put": spltData }};
                }  */
            
            
            });  
        
            console.log( filterOptionData )
        const unqSymbol = [...new Set(optionSymbol)]
        
        unqSymbol.map((items) => {
            unqSymbolObj.push({id:items,name:items,selectedData})
        })
        
        dispatch(unqSymbolAction(unqSymbolObj))
        dispatch(filterDataPost(filterOptionData))
    }
    
    useEffect(()=>{filterApiData()},[getOptionData])

    // useMemo(()=> ,[])

  return (
      <>
          
      </>
  )
}

export default FetchApi