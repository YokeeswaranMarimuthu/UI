import { Component } from '@angular/core';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-show-chats',
  templateUrl: './show-chats.component.html',
  styleUrls: ['./show-chats.component.scss']
})
export class ShowChatsComponent{

  message:any;
  userName:any;

  constructor(public api:ServicesService){

    this.api.getUserDetails().subscribe((res) => {
      if(res.status===200 && res.message === 'success'){
        this.userName = res.actualData
      }
    })
  }


}
