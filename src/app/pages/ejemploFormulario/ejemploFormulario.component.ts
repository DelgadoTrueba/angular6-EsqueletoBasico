import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

//MODELOS
import { User } from '../../models/user';

@Component({
  selector: 'ejemploFormulario',
  templateUrl: './ejemploFormulario.component.html',
  styleUrls: ['./ejemploFormulario.component.css']
})
export class EjemploFormularioComponent implements OnInit {

  public userForm: FormGroup; 
  public user: User = new User("", "", "", "");

  constructor(
    private _formBuilder: FormBuilder
  ){ }

  ngOnInit() {
    this.userForm = this._formBuilder.group({
      nombre: new FormControl('', [Validators.required]),
      apellidos: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required]),
      mensaje: new FormControl('', [Validators.required]),
    });
  }

  onSubmit(){
   console.log(this.userForm.value);
  }

  onReset(myUserform){
    myUserform.reset();
  }

}
