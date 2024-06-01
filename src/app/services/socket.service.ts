import { Injectable } from '@angular/core';
import { io, Socket } from 'socket.io-client';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  private socket: Socket;
  public room: string;
  public userDetails: {userName: '', userId: 0, chatId: 0};
  public selectedChat: {chatName: '', chatId: 0};
  public messages: Array<any> = [];

  constructor() {
    this.socket = io('http://localhost:5000');
  }

  listen(eventName: string) {
    return new Observable((subscriber) => {
      this.socket.on(eventName, (data: any) => {
        subscriber.next(data);
      });
    });
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
