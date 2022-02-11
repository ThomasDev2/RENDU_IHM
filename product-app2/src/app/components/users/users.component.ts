import { Component, OnInit } from '@angular/core';
import { UserModel } from 'src/app/model/user-model';
import { Subscription } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  loadedUsers :UserModel[]=[];
  subscription:Subscription=new Subscription();
  constructor(private usersService:UsersService) {
    this.usersService.getUsers() 
    this.subscription=this.usersService.observableUsers
    .subscribe((fetchedUsers)=>{
      this.loadedUsers=fetchedUsers;
    });
   }

  ngOnInit(): void {
     
  }

  
}
