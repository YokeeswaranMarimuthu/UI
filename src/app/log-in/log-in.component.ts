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

  constructor(public api:ServicesService, private router:Router){}
  
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
        if(res.status===200){
          this.data=res.actualData
        }
        else{
          alert(res.message);
        }
      }
    });
  }
}
