import { types } from '../types';
import { server_socket } from '../../socket/socket';

const socket = {
  // intr_socket: new WebSocket(server_socket.interactive_socket),
  brcst_socket: new WebSocket(server_socket.brodcast_socket)
  // strategy_socket: new WebSocket(server_socket.strategt_socket),
  // brcst_data: []
};

export const optionReducer = (state = [], action) => {
  switch (action.type) {
    case types.Unique_Option_Symbol:
      return { ...state, uniqueOptionSymbol: action.uniqueOptionSymbol };
      break;

    case types.Post_Api:
      return { ...state, apiData: action.apiData };
      break;

    case types.Filter_Data_Post:
      return { ...state, selectSymbol: action.selectSymbol };
      break;

    case types.Selected_Symbol:
      return { ...state, selectedSymbol: action.selectedSymbol };
      break;

    case types.Selected_Strike_Price:
      return { ...state, selectedStrike: action.selectedStrike };
      break;

    case types.Current_Symbol:
      return { ...state, currentSymbol: action.currentSymbol };
      break;

    case types.Default_Symbol:
      return { ...state, defaultSymbol: action.defaultSymbol };
      break;

    case types.GRID_STRIKE_PRICE:
      return { ...state, Strike: action.Strike };
      break;

    case types.GRID_STRIKE_PRICE2:
      return { ...state, Strike2: action.Strike2 };
      break;

    case types.TOKEN_NUMBER:
      return { ...state, individualToken: action.individualToken };
      break;

    case types.LIVE_DATA:
      return { ...state, socketData: action.socketData };
      break;

    case types.EXP_DATE:
      return { ...state, curExpDate: action.curExpDate };
      break;

    case types.DEFAULT_EXP_DATE:
      return { ...state, defExpDate: action.defExpDate };
      break;

    case types.ALL_DATE:
      return { ...state, allDate: action.allDate };
      break;

    default:
      return state;
  }
};

export const socketConnection = (state = socket, action) => {
  switch (action.type) {
    case types.GET_BROADCAST_SOCKET:
      console.log(state.brcst_socket);
      return { ...state, brcst_socket: state.brcst_socket };
      break;

    default:
      return state;
  }
};
