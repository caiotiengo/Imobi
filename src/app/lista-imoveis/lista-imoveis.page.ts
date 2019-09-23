import { Component, OnInit } from '@angular/core';
import {CargaService} from '../carga.service';
import {Router} from '@angular/router';
import {AlertController, NavController} from '@ionic/angular';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {UserService} from '../User';
import {Casas, ImovelService} from '../Imovel';
import * as firebase from "firebase";


@Component({
  selector: 'app-lista-imoveis',
  templateUrl: './lista-imoveis.page.html',
  styleUrls: ['./lista-imoveis.page.scss'],
})
export class ListaImoveisPage implements OnInit {
  resultado: any = [];
  imoveis: any = [];
  emailUser:any;
  peloApp: any;
  hideMe = true;
  hideMe2 = true;
  hideMe3 = true;


  private itemsCollection: AngularFirestoreCollection<Casas>;

  constructor(public alertCtrl: AlertController,public carga: CargaService,public imovel:ImovelService,
              public afstore: AngularFirestore, public user: UserService, private router: Router, public navCtrl: NavController) {
    this.carga.data().then(data => {
      this.resultado = data.valueOf();
      console.log(this.resultado.Carga.Imoveis);
      this.imoveis = this.resultado.Carga;
    });
    console.log(this.carga.data());
    this.itemsCollection = afstore.collection<Casas>('casas');
    this.peloApp = this.imovel.casasCollection.valueChanges();
    console.log(this.peloApp)
  }

  ngOnInit() {
  }
    cadastra_casa(){
     if(!firebase.auth().currentUser) {
       this.navCtrl.navigateForward('/login')
     }else if(firebase.auth().currentUser){
      console.log('tem user')
       this.navCtrl.navigateForward('/cadastro-casa')

     }else{
       console.log('até foi mais aparece aqui sacou?')
     }

  }

  async alert() {

  }
  perfil(){
    if(firebase.auth().currentUser) {
      this.navCtrl.navigateForward('/perfil')
    }else {
      this.navCtrl.navigateForward('/login')
    }
  }

  async presentAlertMultipleButtons() {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['Cancel', 'Open Modal', 'Delete']
    });

    await alert.present();
  }
  venda(){
    this.hideMe = false;
    this.hideMe2 = true;
    this.hideMe3 = true;

  }
  aluguel(){
    this.hideMe2 = false;
    this.hideMe3 = true;
    this.hideMe = true;
  }
  admin(){
    this.hideMe3 = false;
    this.hideMe2 = true;
    this.hideMe = true;
  }

}
