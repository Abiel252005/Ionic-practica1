import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: false
})
export class LoginPage implements OnInit {

  email: string ="";
  password: string ="";

  constructor(
    private navController: NavController
  ) { }
  

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
      this.navController.navigateForward('/inicio')
    }
    else{
      console.log("Login incorrecto");
    }
  
  }
}
