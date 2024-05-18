import { AfterViewChecked, Component, ElementRef, ViewChild } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service'; 

@Component({
  selector: 'app-show-message',
  templateUrl: './show-message.component.html',
  styleUrls: ['./show-message.component.scss']
})
export class ShowMessageComponent  implements AfterViewChecked{
  @ViewChild("scrollMe") el: ElementRef<HTMLDivElement>;
  typed:any;
  typess:any;
  active:boolean = false
  placeHolder ="Type a message..."

  constructor(public socketService: SocketService){}

  ngAfterViewChecked() {
    this.scrollToBottom();
  }
  
  scrollToBottom(): void {
    this.el.nativeElement.scrollTop = this.el.nativeElement.scrollHeight;
  }

  activeate(){
    this.socketService.emitToRoom(this.socketService.room, 'message', this.typed);
    this.socketService.messages.push({type:'sent',content: this.typed})
    this.typess = this.typed
    this.typed = ''
    this.active = true;
  }
  
}