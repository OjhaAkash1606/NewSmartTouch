import './App.css';
import { Route, Link, Routes } from 'react-router-dom';
import Header from './Component/Header/Header';
import React from 'react';
import { useEffect } from 'react';
import Main from './Layout/Main';
import OptionChain from './pages/OptionChart/OptionChain';
import MarketWatch from '../src/pages/market-watch/market-watch';
import Orderbook from '../src/pages/order-book/order-book';
import Orderwindow from '../src/pages/order-window/order-window';
import RearrangeOrder from '../src/pages/rearrange-order/rearrange-order';
import Positions from '../src/pages/positions/positions';
import StrategyBuilder from '../src/pages/strategy-builder/strategy-builder';
import Home from '../src/pages/home/home';
import Dashboard from '../src/pages/dashboard/dashboard';
import Screener from '../src/pages/screener/screener';
import Niftyheatmap from '../src/pages/niftyheatmap/niftyheatmap';
import FetchApi from './pages/OptionChart/fetchApi';
import { fetchApi, getBrdSocket } from '../src/redux/action/action';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
// import { createContext } from 'react';

// export const BroadCastSocket = createContext();

function App() {
  const dispatch = useDispatch();
  // const bSocket = useSelector(state => state.socketConnection.brcst_socket);

  useEffect(() => {
    dispatch(getBrdSocket());
    dispatch(fetchApi());
  }, []);

  return (
    // <BroadCastSocket.Provider value={bSocket}>
    <div className="App">
      <FetchApi />
      <Header />

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/OptionChart" element={<OptionChain />} />
        <Route path="MarketWatch" element={<MarketWatch />} />
        <Route path="Orderbook" element={<Orderbook />} />
        <Route path="Orderwindow" element={<Orderwindow />} />
        <Route path="RearrangeOrder" element={<RearrangeOrder />} />
        <Route path="positions" element={<Positions />} />
        <Route path="home" element={<Home />} />
        <Route path="StrategyBuilder" element={<StrategyBuilder />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="Screener" element={<Screener />} />
        <Route path="Niftyheatmap" element={<Niftyheatmap />} />
      </Routes>
    </div>
    // </BroadCastSocket.Provider>
  );
}

export default App;
