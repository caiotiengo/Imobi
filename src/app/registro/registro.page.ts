import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {UserService} from '../User';
import {NavController} from '@ionic/angular';
import {AngularFirestore} from '@angular/fire/firestore';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  email: string ='';
  firstname: string ='';
  lastname: string ='';
  password: string ='';
  cpassword: string = '';
  constructor(public afAuth: AngularFireAuth , public afstore: AngularFirestore, public user: UserService,  public navCtrl: NavController) { }

  ngOnInit() {
  }
  async registre(){
    const {email, firstname,lastname, password, cpassword} = this
    if(password !== cpassword){
      return console.log('senha n bate')
    }
   try {

     const res = await this.afAuth.auth.createUserWithEmailAndPassword(this.email, this.password)
      this.afstore.doc(`usuarios/${res.user.uid}`).set({
        firstname,
        lastname,
        email
      })
     this.user.setUser({
       email,
       uid: res.user.uid
     })
     console.log('Logou ' + this.user);
     this.navCtrl.navigateBack('/lista-imoveis');
    } catch(err) {
      console.dir(err);
   }

  }
}
