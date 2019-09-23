import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {CargaService} from '../carga.service';
import {Casas, ImovelService} from '../Imovel';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';

@Component({
  selector: 'app-imovel',
  templateUrl: './imovel.page.html',
  styleUrls: ['./imovel.page.scss'],
})
export class ImovelPage implements OnInit {
  resultado: any = [];
  imoveis: any = [];
  imoveis2: any = [];
  private slug: string;
  public cargaLoad: any;
  queisso:any;
    peloApp:any;
    private itemsCollection: AngularFirestoreCollection<Casas>;

    constructor(private route: ActivatedRoute, private carga: CargaService,public imovel:ImovelService, public afstore: AngularFirestore) {
    this.queisso = 'POAP20555';
    this.slug = this.route.snapshot.paramMap.get('id');
    console.log(this.slug);
    this.getData();
    this.getData2();
  }
  ngOnInit() {  }


  getData() {
      this.carga.data().then(data => {
          this.resultado = data.valueOf();
          console.log(this.resultado.Carga.Imoveis);
          this.imoveis = this.resultado.Carga;
          this.imoveis = this.resultado.Carga.Imoveis.Imovel.find(i => i.CodigoImovel === this.slug);
          if (this.resultado.Carga.Imoveis.Imovel.find(i => i.CodigoImovel)) {
              console.log('opa');
          } else {
              console.log('naotem');
          }
          console.log(this.imoveis);
      });
  }
  getData2() {
      this.itemsCollection = this.afstore.collection<Casas>('casas');
      this.peloApp = this.imovel.casasCollection.valueChanges();
  }
}
