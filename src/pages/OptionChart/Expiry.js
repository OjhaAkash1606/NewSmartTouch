import React, { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { expDate, gridStrike2,selectedStrikePrice,filterDataPost, defExpDate,assetToken} from '../../redux/action/action';

export const ExpiryDate = () => {

  let currentSymbol = useSelector((state) => state.optionReducer.currentSymbol)
  let currentExpiryDate = useSelector((state) => state.optionReducer.curExpDate)
  let defaultExpiryDate = useSelector((state) => state.optionReducer.defExpDate)
  const selectedData = useSelector((state) => state.optionReducer.allDate)
  const selectedSymbolData = useSelector((state) => state.optionReducer.selectedSymbol)
  
  const dispatch = useDispatch()

// console.log(selectedData)
 
    const [dateArr, setDateArr] = useState()

  function dataBasedOnDate() {
    
    const ascending= selectedData?.sort((a, b) => new Date(b).getTime() - new Date(a).getTime()).reverse()
    // console.log(ascending)

    const dateAr=[] 
      
    ascending?.map((item) => {
     const cnvrtDate=new Date(item)
        dateAr.push(`${String(cnvrtDate.getDate()).padStart(2, '0')} ${new Intl.DateTimeFormat('en-US', {
            month: 'short'
          }).format(cnvrtDate)} ${cnvrtDate.getFullYear()}`)
    })    

    setDateArr(dateAr)
    if(currentExpiryDate!==true ) dispatch(defExpDate(dateAr[0]))
  }
  useMemo(() => { dataBasedOnDate(); }, [currentSymbol])

const dataBasedOnTime = () => {
  let selectAssetToken;
        const selectDataBasedOnTime=[]
        selectedSymbolData?.map((item,id) => {
            const date = new Date(item[2]);
            const recDate=String(date.getDate()).padStart(2, '0')
            const recMonth = new Intl.DateTimeFormat('en-US', {
            month: 'short'
            }).format(date)
            
            const recYear = date.getFullYear()
          const recTime = `${recDate} ${recMonth} ${recYear}`
          

           if(currentExpiryDate===undefined && recTime===defaultExpiryDate) selectDataBasedOnTime.push(item);
          else if (recTime === currentExpiryDate) selectDataBasedOnTime.push(item);

        })
        selectAssetToken = selectDataBasedOnTime[0]?.[1]
        dispatch(assetToken(selectAssetToken))
      const strkPrc = []
      const filterOptionData={}
      
      selectDataBasedOnTime?.map((item, i) => {
        strkPrc.push(item[7])
        
        if (item[8] === "CE") {
          filterOptionData[item[7]] = { ...filterOptionData[item[7]],  "CallToken": item[6],"LTP1":"00.00","delta":"00.00","gamma":"00.00","vegga":"00.00","theta":"00.00"};
                } else if (item[8] === "PE") {
                    filterOptionData[item[7]] = { ...filterOptionData[item[7]], "PutToken": item[6], "LTP2":"00.00","putSideDelta":"00.00","putSideGamma":"00.00","putSideTheta":"00.00","putSideVegga":"00.00"} ;
                }
      })
      
    
      const strkPrc1= [...new Set(strkPrc)].sort((a, b) => a - b)
      
      dispatch(selectedStrikePrice(strkPrc1))
      dispatch(gridStrike2(selectDataBasedOnTime))
      dispatch(filterDataPost(filterOptionData))
        
    } 

  useMemo(() => { dataBasedOnTime() }, [currentExpiryDate,defaultExpiryDate,currentSymbol])

 
                        return (
                                <>
                                        <select  className='form-select form-select-sm small-sel' defaultValue={dateArr?.[0]} onChange={(e)=>dispatch(expDate(e.target.value))}>
                                           
                                            {dateArr?.map((item, i) =>
                                                <option key={i+1}  value={item}>{item}</option>
                                            )}
                                        </select> 
        </>
    )
}
