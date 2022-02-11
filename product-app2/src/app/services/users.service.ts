import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserModel } from '../model/user-model';
import { BehaviorSubject } from 'rxjs';
const usersEndpointUrl:string="assets/mock_back_end/users.json";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  sourceUsers=new BehaviorSubject([{id:-1,fName:"",lName:"",job:""}]);
  observableUsers=this.sourceUsers.asObservable();
  constructor(private http:HttpClient) { }

  getUsers(){
    this.http.get<UserModel[]>(usersEndpointUrl)
    .subscribe((fetchedUsers)=>{
      this.sourceUsers.next(fetchedUsers);
    }); 
  }
}
