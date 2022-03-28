import { io } from "socket.io-client";

let socket = null;
export const getSocket =async () => {
  if (!socket) {
    // const token =await AsyncStorage.getItem(TOKEN_KEY);
    console.log('socket connecting....');
    const socket = io("localhost:3001");
    return socket;
  }

//   , {
//     //   extraHeaders: {
//     //     authorization: token ? `Bearer ${token}` : null,
//     //   },
//       // transports: ['websocket'],
//     }
  
};

export const destroySocket = () => {
  socket = null;
};
