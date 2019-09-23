import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {AngularFirestore} from '@angular/fire/firestore';
import {UserService} from '../User';
import {NavController} from '@ionic/angular';
import {ImovelService} from '../Imovel';
import {AngularFireDatabase} from '@angular/fire/database';

@Component({
  selector: 'app-cadastro-casa',
  templateUrl: './cadastro-casa.page.html',
  styleUrls: ['./cadastro-casa.page.scss'],
})
export class CadastroCasaPage implements OnInit {
  TipoImovel: string ='';
  Endereco: string ='';
  titulo: string ='';
  Observacao: string ='';
  PrecoCondominio: string ='';
  ValorIPTU:string ='';
  AreaUtil:string ='';
  AreaTotal:string ='';
  QtdDormitorios:string ='';
  QtdSuites:string ='';
  QtdBanheiros:string ='';
  QtdVagas:string ='';
  QtdElevador:string ='';
  QtdUnicadesAndar:string ='';
  QtdAndar:string ='';
  AnoConstrucao:string ='';
  PrecoVenda: string ='';
  PrecoLocacao: string ='';
  email: string ='';
  patrocinado: string ='';
  tipo: boolean;
  aprovado: string;
  emailUser: any;
  Bairro:string;
  hideMe = true;
  hideMe2 = true;
  hideMe3 = true;
  hideMe4 = true;

  uid: any;
  constructor(public imovel: ImovelService , public db: AngularFireDatabase,public afstore: AngularFirestore, public user: UserService,  public navCtrl: NavController) { }
  ngOnInit() {
      this.emailUser = this.user.getUsername();
      console.log(this.emailUser)
  }
  async registre_casa(){
    const {titulo, TipoImovel, Endereco, Observacao, PrecoCondominio, ValorIPTU , AreaUtil, AreaTotal, QtdDormitorios, QtdSuites, QtdBanheiros,
      QtdVagas,QtdElevador, QtdUnicadesAndar, Bairro, QtdAndar, AnoConstrucao, PrecoVenda, PrecoLocacao, patrocinado, tipo, aprovado } = this
    try {
       this.imovel.casasCollection.add({
         Bairro:Bairro,
         TipoImovel: TipoImovel,
         Endereco: Endereco,
         titulo: titulo,
         Observacao: Observacao,
         PrecoCondominio:PrecoCondominio,
         ValorIPTU:ValorIPTU,
         AreaUtil:AreaUtil,
         AreaTotal:AreaTotal,
         QtdDormitorios:QtdDormitorios,
         QtdSuites:QtdSuites,
         QtdBanheiros:QtdBanheiros,
         QtdVagas:QtdVagas,
         QtdElevador:QtdElevador,
         QtdUnicadesAndar:QtdUnicadesAndar,
         QtdAndar:QtdAndar,
         AnoConstrucao:AnoConstrucao,
         PrecoVenda: PrecoVenda,
         PrecoLocacao: PrecoLocacao,
         email: this.emailUser,
         patrocinado: patrocinado,
         tipo: tipo,
         aprovado: aprovado

       })

      console.log('Logou ' + this.user);
      this.navCtrl.navigateBack('/lista-imoveis');
    } catch(err) {
      console.dir(err);
    }

  }
  venda(){
    this.hideMe = false;
    this.hideMe2 = true;
    this.hideMe3 = true;

  }
  hideloc(){
    this.hideMe4 = false;

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
