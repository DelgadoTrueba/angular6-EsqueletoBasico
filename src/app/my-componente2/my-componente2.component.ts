import { Component, OnInit } from '@angular/core';

//MODELOS
import { User } from '../models/user';

@Component({
  selector: 'my-componente2',
  templateUrl: './my-componente2.component.html',
  styleUrls: ['./my-componente2.component.css']
})
export class MyComponente2Component implements OnInit {

  public user: User;

  constructor(){
    this.user = new User("", "", "", "");
  }

  ngOnInit() {
  }

  onSubmit(formContacto){
    console.log(this.user);
    formContacto.reset();
  }

}
