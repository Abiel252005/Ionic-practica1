import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage implements OnInit {

  email: string ="";
  password: string ="";

  constructor() { }

  ngOnInit() {
  }

  login(from: NgForm){
    //obtewner valores del formulario
    console.log(from.value);

    //Validar formulario
    console.log("Valid: ", from.valid);

    //Si form es invalido
    //console.log("todos los campos son requeridos");
    //return;
    if (from.invalid){
      console.log("todos los campos son requeridos");
      return;
    }
    


    if(this.email == "admin" && this.password == "admin"){
      console.log("Login correcto");
    }
    else{
      console.log("Login incorrecto");
    }
  
  }
}
