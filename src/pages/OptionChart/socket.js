let url = 'ws://www.tradingcampus.net';

const server_socket = {
  interactive_socket: `${url}:17001`,
  brodcast_socket: `${url}:17002`,
  strategt_socket: `${url}:17003`
};

export const socket = {
  intr_socket: new WebSocket(server_socket.interactive_socket),
  brcst_socket: new WebSocket(server_socket.brodcast_socket),
  strategy_socket: new WebSocket(server_socket.strategt_socket),
  brcst_data: []
};

export const resetDefaultColumn = [
  { call: 'volume', put: 'putSide-volume', checked: 'volumeRef' },
  { call: 'oi', put: 'putSide-oi', checked: 'oiRef' },
  { call: 'oi-change%', put: 'putSide-oi-change%', checked: 'oiChangeRef' },
  { call: 'iv', put: 'putSide-iv', checked: 'ivRef' },
  { call: 'bid-offer', put: 'putSide-bid-offer', checked: 'bidOfferRef' },
  { call: 'delta', put: 'putSide-delta', checked: 'deltaRef' },
  { call: 'gamma', put: 'putSide-gamma', checked: 'gammaRef' },
  { call: 'theta', put: 'putSide-theta', checked: 'thetaRef' },
  { call: 'vegga', put: 'putSide-vegga', checked: 'veggaRef' }
];
