import { Component } from '@angular/core';
import { FormGroup , FormControl} from '@angular/forms';
import { Router } from '@angular/router';
import { ServicesService } from '../services/services.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  data: any;

  constructor(public api:ServicesService, private router:Router){
    if(localStorage.getItem('accessToken')){
      this.router.navigate(['/Chats'])
    }
  }
  
  signUpForm = new FormGroup({
    emailId : new FormControl(),
    userName : new FormControl(),
    password : new FormControl(),
  })

  submit(){
    const details = {
      emailId : this.signUpForm.value.emailId,
      userName :this.signUpForm.value.userName,
      password : this.signUpForm.value.password
    }
    this.signUpForm.reset();
    this.api.signUpUser(details).subscribe({
      next:(res)=>{
        if(res.status === 200 && res.message === 'success'){
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

