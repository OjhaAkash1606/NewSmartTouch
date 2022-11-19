import './App.css';
import { BrowserRouter as Router, Route ,Link, Routes} from "react-router-dom";
import Header from './Component/Header/Header';
import React from 'react';
import  { useEffect} from 'react';
import Main from './Layout/Main';
import OptionChart from '../src/pages/OptionChart/OptionChart';
import MarketWatch from '../src/pages/market-watch/market-watch';
import Orderbook from '../src/pages/order-book/order-book';
import Orderwindow from '../src/pages/order-window/order-window';
import RearrangeOrder from '../src/pages/rearrange-order/rearrange-order';
import Positions from '../src/pages/positions/positions';
import StrategyBuilder from '../src/pages/strategy-builder/strategy-builder'
import Home from '../src/pages/home/home';
import Dashboard from '../src/pages/dashboard/dashboard';
import Screener from '../src/pages/screener/screener';
import Niftyheatmap from '../src/pages/niftyheatmap/niftyheatmap';
import FetchApi from './pages/OptionChart/fetchApi';
import { fetchApi,getBrdSocket} from '../src/redux/action/action';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';


function App() {
  const dispatch = useDispatch();
  const apiData = useSelector((state) => state);
  console.log(apiData)


  useEffect(() => {
    dispatch(getBrdSocket())
    dispatch(fetchApi());
  }, []);

  const d = new Date()/* 
  const date = d.getDate()
  const month = d.getMonth() + 1
  const year = d.getFullYear()
  const hour=d.getHours()
  const minut=d.getMinutes()
  const second=d.getSeconds() */
  console.log(d)
  return (
    <>  
  
  <div className="App">
  <FetchApi  />
        <Header />
      <Router>
        <Routes>
          <Route  path="/" element={<Main/>} />
          <Route  path="OptionChart" element={<OptionChart/>} />
          <Route  path="MarketWatch" element={<MarketWatch/>} />
          <Route  path="Orderbook" element={<Orderbook/>} />
          <Route  path="Orderwindow" element={<Orderwindow/>} />
          <Route  path="RearrangeOrder" element={<RearrangeOrder/>} />
          <Route  path="positions" element={<Positions/>} />          
          <Route path="home" element={<Home/>} />
          <Route  path="StrategyBuilder" element={<StrategyBuilder/>} />
          <Route  path="dashboard" element={<Dashboard/>} />
          <Route  path="Screener" element={<Screener/>} />
          <Route  path="Niftyheatmap" element={<Niftyheatmap/>} />

        </Routes>
 
      </Router>
      
    </div>


    </>
  );
}

export default App;
