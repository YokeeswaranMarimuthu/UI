import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServicesService } from 'src/app/services/services.service';
import { SocketService } from 'src/app/services/socket.service'; 

@Component({
  selector: 'app-show-message',
  templateUrl: './show-message.component.html',
  styleUrls: ['./show-message.component.scss']
})
export class ShowMessageComponent  implements AfterViewChecked, OnInit {
  @ViewChild("scrollMe") el: ElementRef<HTMLDivElement>;
  typed:any;
  typess:any;
  active:boolean = false;
  placeHolder ="Type a message...";
  message: string;
  room: string = 'general';

  constructor(public socketService: SocketService, public api:ServicesService){}

  ngOnInit() {
    this.socketService.emit('joinRoom', this.room);
    this.socketService.listen('message').subscribe((data: any) => {
      this.socketService.messages.push(
        {
          type: this.socketService?.userDetails?.userId === data?.userId ? 'sent' : 'received',
         content: data?.message
        }
      );
    });
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }
  
  scrollToBottom(): void {
    this.el.nativeElement.scrollTop = this.el.nativeElement.scrollHeight;
  }

  activeate(){
    const payload = {
      room: this.socketService.room,
      message: this.typed
    }
    this.api.sendMessage(payload).subscribe((res) => {});
    // this.socketService.emitToRoom(this.socketService.room, 'message', this.typed);
    // this.socketService.messages.push({type:'sent',content: this.typed})
    this.typess = this.typed
    this.typed = ''
    this.active = true;
  }
  
}