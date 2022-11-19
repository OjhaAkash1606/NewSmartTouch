import { types } from '../types';

// Socket connectivity

/* export const getInrSocket = () => {
  return {
    type: types.GET_INTERACTIVE_SOCKET
  };
};


export const getStrategySocket = () => {
  return {
    type: types.GET_STRATEGY_SOCKET
  };
}; */

export const getBrdSocket = () => {
  return {
    type: types.GET_BROADCAST_SOCKET
  };
};

export const setoptionData = (data, loading) => {
  return {
    type: types.OPTION_DATA,
    payload: { data, loading }
  };
};

export const fetchApi = fetchApiData => {
  return { type: types.Fetch_Api };
};

export const unqSymbolAction = uniqueOptionSymbol => {
  return { type: types.Unique_Option_Symbol, uniqueOptionSymbol };
};

export const filterDataPost = selectSymbol => {
  return { type: types.Filter_Data_Post, selectSymbol };
};

export const selectedSymbolData = selectedSymbol => {
  return { type: types.Selected_Symbol, selectedSymbol };
};

export const selectedStrikePrice = selectedStrike => {
  return { type: types.Selected_Strike_Price, selectedStrike };
};

export const currentSymbol = currentSymbol => {
  return { type: types.Current_Symbol, currentSymbol };
};

export const gridStrike = Strike => {
  return { type: types.GRID_STRIKE_PRICE, Strike };
};

export const gridStrike2 = Strike2 => {
  return { type: types.GRID_STRIKE_PRICE2, Strike2 };
};

export const strikeBasedToken = individualToken => {
  return { type: types.TOKEN_NUMBER, individualToken };
};

export const liveData = socketData => {
  return { type: types.LIVE_DATA, socketData };
};

export const expDate = curExpDate => {
  return { type: types.EXP_DATE, curExpDate };
};

export const allSelectedDate = allDate => {
  return { type: types.ALL_DATE, allDate };
};
