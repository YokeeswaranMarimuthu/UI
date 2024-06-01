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
    const userDetailsString = localStorage.getItem('userDetails')
    if (userDetailsString) {
      this.socketService.userDetails = JSON.parse(userDetailsString);
    }

    this.api.getUserDetails().subscribe((res) => {
      if(res.status===200 && res.message === 'success'){
        this.chats = res.actualData;
        if (res.actualData.length) {
          const selectedRoom = res.actualData.find((eachRoom: any) => eachRoom?.chatId === this.socketService?.userDetails?.chatId)
          this.selectItem(selectedRoom ?? res.actualData[0]);
        }
      } else {
        this.socketService.room = '';
      }
    })
  }

  selectItem(chatDetails: any){
    this.socketService.userDetails.chatId = chatDetails.chatId
    localStorage.setItem('userDetails', JSON.stringify(this.socketService?.userDetails));
    this.socketService.selectedChat = chatDetails;
    this.socketService.room = JSON.stringify(chatDetails.chatId);
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
