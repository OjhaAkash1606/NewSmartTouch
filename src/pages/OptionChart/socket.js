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
