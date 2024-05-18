import { Component } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss']
})
export class ChatListComponent {

  chats:any = [];

  constructor(public api:ServicesService, public socketService: SocketService){
    this.api.getUserDetails().subscribe((res) => {
      if(res.status===200 && res.message === 'success'){
        this.chats = res.actualData;
        this.socketService.room = JSON.stringify(res.actualData[0].chatId);
      } else {
        this.socketService.room = '';
      }
    })
  }

  selectItem(chatId:number){
    this.socketService.room = JSON.stringify(chatId);
    this.socketService.joinRoom(this.socketService.room);
    this.getMessage(this.socketService.room);
  }

  getMessage(chatId: string){
    this.api.getChatMessages({chatId: +chatId}).subscribe((res) => {
      if(res.status===200 && res.message === 'success'){
        this.socketService.messages = res.actualData;
      } else {
        this.socketService.messages = [];
      }
    })
  }
}
