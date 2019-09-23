import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CargaService {
  imoveis: any = [];
  constructor(private http: HttpClient) {
    console.log(this.imoveis);
  }

  data() {
    return new Promise(resolve => {
      this.http.get<any[]>('../assets/portalCarga.json').subscribe(data => {
        resolve(data);
        console.log(data);
        this.imoveis = data;
      }, err => {
        console.log(err);
      });
    });
  }

  loadi(id) {
  }

}
