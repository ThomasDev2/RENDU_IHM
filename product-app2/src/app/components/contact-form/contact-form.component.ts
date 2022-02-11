import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  public contactForm:FormGroup =new FormGroup({
    email:new FormControl(''),
    fName:new FormControl(''),
    lName:new FormControl(''),
    job:new FormControl('')
  });
  constructor() { }

  ngOnInit(): void {
  }

  onSend():void{
    alert('Coordonnées transmises  avec les informations suivantes: '+ JSON.stringify(this.contactForm.value));
    
  }
}
