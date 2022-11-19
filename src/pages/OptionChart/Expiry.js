import React, { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { expDate, gridStrike2,selectedStrikePrice,filterDataPost } from '../../redux/action/action';

export const ExpiryDate = () => {

  let currentStrike = useSelector((state) => state.optionReducer.currentSymbol)
  let currentExpiryDate = useSelector((state) => state.optionReducer.curExpDate)
  const selectedData = useSelector((state) => state.optionReducer.allDate)
  const selectedSymbolData = useSelector((state) => state.optionReducer.selectedSymbol)
  
  const dispatch = useDispatch()

console.log(selectedData)
 
    const [dateArr, setDateArr] = useState()

  function dataBasedOnDate() {
    
    const ascending= selectedData?.sort((a, b) => new Date(b).getTime() - new Date(a).getTime()).reverse()
    console.log(ascending)

    const dateArr=[] 
      
    ascending?.map((item) => {
     const cnvrtDate=new Date(item)
        dateArr.push(`${String(cnvrtDate.getDate()).padStart(2, '0')} ${new Intl.DateTimeFormat('en-US', {
            month: 'short'
          }).format(cnvrtDate)} ${cnvrtDate.getFullYear()}`)
    })    

    setDateArr(dateArr)
  }
  useMemo(() => { dataBasedOnDate(); }, [currentStrike])

const dataBasedOnTime = () => {
    
        const selectDataBasedOnTime=[]
        selectedSymbolData?.map((item,id) => {
            const date = new Date(item[2]);
            const recDate=String(date.getDate()).padStart(2, '0')
            const recMonth = new Intl.DateTimeFormat('en-US', {
            month: 'short'
          }).format(date)
            const recYear = date.getFullYear()
            const recTime = `${recDate} ${recMonth} ${recYear}`
            console.log( currentExpiryDate===recTime)
          if (recTime === currentExpiryDate) selectDataBasedOnTime.push(item);
        })
      const strkPrc = []
      const filterOptionData={}
      
      selectDataBasedOnTime?.map((item, i) => {
        strkPrc.push(item[7])
        
        if (item[8] === "CE") {
          filterOptionData[item[7]] = { ...filterOptionData[item[7]],  "CallToken": item[6],"LTP1":"00.00"};
                } else if (item[8] === "PE") {
                    filterOptionData[item[7]] = { ...filterOptionData[item[7]], "PutToken": item[6], "LTP2":"00.00" } ;
                }
      })
      
      console.log(filterOptionData)
      const strkPrc1= [...new Set(strkPrc)].sort((a, b) => a - b)
      console.log(strkPrc1)
        dispatch(selectedStrikePrice(strkPrc1))
      dispatch(gridStrike2(selectDataBasedOnTime))
      dispatch(filterDataPost(filterOptionData))
        
    } 

  useMemo(() => { dataBasedOnTime(); }, [currentExpiryDate])


                        return (
                                <>
                                        <select  className='form-select form-select-sm small-sel' onChange={(e)=>dispatch(expDate(e.target.value))}>
                                            <option key={0}>Select Exp Date</option>
                                            {dateArr?.map((item, i) =>
                                                <option key={i+1}  value={item}>{item}</option>
                                            )}
                                        </select> 
        </>
    )
}
