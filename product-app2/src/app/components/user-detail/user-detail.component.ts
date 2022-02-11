import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { UserModel } from 'src/app/model/user-model';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  loadedUsers :UserModel[]=[];
  selectedUser:UserModel={"id":-1,fName:"",lName:"",job:""};
  subscription:Subscription=new Subscription();
  id:number=0;
  
  constructor(private route:ActivatedRoute, private router:Router,private usersService:UsersService) {
    this.usersService.getUsers();
    this.subscription=this.usersService.observableUsers
    .subscribe((fetchedUsers)=>{
      this.loadedUsers=fetchedUsers; 
    });
    
    this.router.events.subscribe(()=>{
      this.id=parseInt(this.route.snapshot.paramMap.get('id')!)-1;
      this.selectedUser=this.loadedUsers[this.id];
    });
    
  }
  
  ngOnInit(): void {}

}
