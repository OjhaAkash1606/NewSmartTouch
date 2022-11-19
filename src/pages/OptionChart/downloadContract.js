import React, { useEffect, useState } from 'react';
import { uniqueData } from '../redux/action';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

function DownloadContract({fn}) {
  const result = useSelector((state) => state)
  console.log(result)
  console.log(fn)
  const dispatch=useDispatch()
  const [nseDerivative, setNseDerivative] = useState();
  const [optionData, setOptionData] = useState();
  const [uniqueOptionSymbol, setUniqueOptionSymbol] = useState();
  let nseDerivativeResData;
  const data = []
  const singleString = []
  const strPrc = []
  let unqStrPrc;
  const call=[]
  const put = []
  

  useEffect(() => {
    fetchApiData();
  },[]);
    
  
  const fetchApiData = () => {
    // const nseDerivativeResData = JSON.parse(localStorage.getItem("NSEDATA"))

    let derivativeData;

    axios(
      'https://scriptapi.option.local:6003/api/Script/GetNSEDerivativeScripts'
     ).then(nseDerivativeRes => {
      derivativeData=nseDerivativeRes.data
       fetchOptionData(nseDerivativeRes.data)
    }); 
  };
  

  const fetchOptionData = (data) => {

    const mergeOptionData = []
    const optionSymbol = []

    data.NSE_OPTIDX.map((item) => {
      const spltData = item.split(",")
      optionSymbol.push(spltData[0])
      mergeOptionData.push(spltData)
    // console.log(spltData)
  })
     
    data.NSE_OPTSTK.map((item) => {
      const spltData = item.split(",")
      optionSymbol.push(spltData[0])
      mergeOptionData.push(spltData)
})
    const uniqueOptionSymbol=[...new Set(optionSymbol)]
    dispatch(uniqueData(uniqueOptionSymbol))
}
  return (
    <>
    </>
    );
}

// export default DownloadContract;
