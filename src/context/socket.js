import socketio from 'socket.io-client';
import React from 'react'


const SOCKET_URL = 'https://jangle-api.herokuapp.com/';

export const socket = socketio.connect(SOCKET_URL);
export const socketContext = React.createContext();