import { Component, OnInit } from '@angular/core';
import {CargaService} from '../carga.service';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {UserService} from '../User';
import {Router} from '@angular/router';
import {NavController} from '@ionic/angular';
import {Casas, ImovelService} from '../Imovel';
import { Storage } from '@ionic/storage';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  userEmail: any;
  peloApp: any;
  private itemsCollection: AngularFirestoreCollection<Casas>;

  constructor(public carga: CargaService,private storage: Storage, public imovel: ImovelService, public afstore: AngularFirestore, public user: UserService, private router: Router, public navCtrl: NavController) { }

  ngOnInit() {
    this.userEmail = this.user.getUsername();
      this.storage.set('email', this.userEmail);
      this.storage.get('email').then((val) => {
          console.log('Your email is - ', val);
          
      });
    this.itemsCollection = this.afstore.collection<Casas>('casas');
    this.peloApp = this.imovel.casasCollection.valueChanges();
    console.log(this.peloApp)
    }


}
