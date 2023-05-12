import { Component } from '@angular/core';
import { FormGroup , FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent {
  data: any;
  options = [
    { value: 'option1', label: 'Option 1' },
    { value: 'option2', label: 'Option 2' },
    { value: 'option3', label: 'Option 3' }
  ];
  selectedOption: string;
  constructor(public api:ServicesService, private router:Router){

    if(localStorage.getItem('accessToken')){
      this.router.navigate(['/Chats'])
    }
  }

  logInForm = new FormGroup({
    emailId : new FormControl(),
    password : new FormControl(),
  })
  submit(){
    const details = {
      emailId : this.logInForm.value.emailId,
      password : this.logInForm.value.password
    }
    this.logInForm.reset();
    this.api.signInUser(details).subscribe({
      next:(res)=>{
        if(res.status===200 && res.message === 'success'){
          localStorage.setItem('accessToken', JSON.stringify(res.accessToken));
          this.router.navigate(['/Chats'])
          this.data=res.actualData
        }
        else{
          alert(res.message);
        }
      }
    });
  }
}
