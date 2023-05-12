import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.scss']
})
export class ChatListComponent {

  contacts:any = ['user1','user2','user3','user4','user5','user6','user7','user1','user2','user3','user4','user5','user6','user7']
  slected:any;
  selectItem(chat:any){
    this.slected = chat
  }
}
