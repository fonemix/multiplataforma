import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import {AlertController} from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {
  username: string="";
  password: string="";
  cpassword: string="";

  constructor(
    public afAuth: AngularFireAuth,
    public alert: AlertController,
    public route: Router
  ) { }

  ngOnInit() {
  }

  async registrar() {
    const {username, password, cpassword} = this
    if(password !== cpassword) {
      this.showAlert("Error!","Las contrasenas no coinciden ");
    }
    try {
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(username,password)
      this.showAlert("Usuario Registrado","Bienvenido "+username)
      this.route.navigate(['login'])
    }catch(err) {
      console.dir(err);
      this.showAlert("Error", err.message);
    }
  }

  async showAlert(header:string, message:string) {
    const alert = await this.alert.create({
      header,
      message,
      buttons: ["ok"]
    });
    await alert.present();
  }
}
