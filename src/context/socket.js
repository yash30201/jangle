import socketio from 'socket.io-client';
import React from 'react'


const SOCKET_URL = 'http://localhost:5000/';

export const socket = socketio.connect(SOCKET_URL);
export const socketContext = React.createContext();