import { AfterViewChecked, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-show-message',
  templateUrl: './show-message.component.html',
  styleUrls: ['./show-message.component.scss']
})
export class ShowMessageComponent  implements OnInit, AfterViewChecked{
  @ViewChild("scrollMe") el: ElementRef<HTMLDivElement>;
  messages: any;
  typed:any;
  typess:any;
  active:boolean = false
  placeHolder ="Type a message..."

  constructor(){}
  
  ngOnInit(){
    this.messages = [{type:'received',content:'Hello! How are you doing today?'},
    {type:'sent',content:'I am doing well, thank you for asking! How about you?'},
    {type:'received',content:'I am doing great! So, whats new with you?'},
    {type:'received',content:'Im doing great! So, whats new with you?'},
    {type:'sent',content:'ddgd'},
    {type:'sent',content:'gerge'},
    {type:'received',content:'Hello! How are you doing today?'},
    {type:'sent',content:'I am doing well, thank you for asking! How about you?'},
    {type:'received',content:'I am doing great! So, whats new with you?'},
    {type:'received',content:'Im doing great! So, whats new with you?'},
    {type:'sent',content:'ddgd'},
    {type:'sent',content:'gerge'}]
  }


  
  ngAfterViewChecked() {
    this.scrollToBottom();
  }
  
  scrollToBottom(): void {
    this.el.nativeElement.scrollTop = this.el.nativeElement.scrollHeight;
  }

  activeate(){
    this.messages.push({type:'sent',content:this.typed})
    this.typess = this.typed
    this.typed = ''
    this.active = true;
    setTimeout(() => {
      this.active = false;
    },2000)
  }
  
}