// create-user.component.ts
import { Component } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {

  user: User = new User(); 

  constructor(private userService: UserService,private router : Router) 
  {
    
  }

  ngOnInit(): void
  {

  }

  saveUser()
  {
    this.userService.createUser(this.user).subscribe(data =>{
      console.log(data);
      this.GoToUserList();

    }, 
      error =>console.log(error));
  }
  GoToUserList() {
    this.router.navigate(['/users'])
  }
  onSubmit() {
    console.log(this.user);
    this.saveUser();
  }
}
