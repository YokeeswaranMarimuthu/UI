import { Component } from '@angular/core';
import { SocketService } from '../services/socket.service';

@Component({
  selector: 'app-show-chats',
  templateUrl: './show-chats.component.html',
  styleUrls: ['./show-chats.component.scss']
})
export class ShowChatsComponent{

  constructor(public socketService: SocketService){}

}
