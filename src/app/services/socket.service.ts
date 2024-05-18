import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private socket: Socket;
  public room: string;
  public messages: Array<any> = [];

  constructor() {
    this.socket = io('http://localhost:5000');
  }

  joinRoom(room: string) {
    this.socket.emit('joinRoom', room);
  }

  on(eventName: string, callback: (...args: any[]) => void) {
    this.socket.on(eventName, callback);
  }

  emit(eventName: string, data: any) {
    this.socket.emit(eventName, data);
  }

  emitToRoom(room: string, eventName: string, data: any) {
    this.socket.emit(eventName, { room, message: data });
  }
}
