import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {auth} from 'firebase/app';
import {NavController} from '@ionic/angular';
import {UserService} from '../User';
import {Storage} from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = ""
  password: string = ""

  constructor(public afAuth: AngularFireAuth ,private storage: Storage, public user: UserService,  public navCtrl: NavController) { }
  async login() {
    try {
        const res = await this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password)

      if(res.user) {
        this.user.setUser({
          email: res.user.email,
          uid: res.user.uid
        });
        console.log('Logou');
        this.storage.set('email', this.email);


        this.navCtrl.navigateBack('/perfil');
      }else{
        console.log('cabaço!')
      }
    } catch (err) {
      console.dir(err);
    }

  }

  registro(){
    this.navCtrl.navigateForward('/registro');
  }
  logout() {
    this.afAuth.auth.signOut();
  }
  ngOnInit() {
  }

}
