import { Injectable } from '@angular/core'
import { AngularFireAuth } from '@angular/fire/auth'
import {first, map} from 'rxjs/operators';
import { auth } from 'firebase/app'
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {Observable} from 'rxjs';

export interface Casas {
    TipoImovel: string;
    Endereco: string;
    titulo: string;
    Observacao: string;
    PrecoCondominio: string;
    ValorIPTU:string;
    AreaUtil:string;
    AreaTotal:string;
    QtdDormitorios:string;
    QtdSuites:string;
    QtdBanheiros:string;
    QtdVagas:string;
    QtdElevador:string;
    QtdUnicadesAndar:string;
    QtdAndar:string;
    AnoConstrucao:string;
    PrecoVenda: string;
    PrecoLocacao: string;
    email: string;
    patrocinado: string;
    tipo: boolean;
    aprovado: string;
    Bairro: string;
}
export interface CasasId {
    id:string;
    
}

@Injectable()
export class ImovelService {
    casasCollection: AngularFirestoreCollection<Casas>;
    casa: Observable<CasasId[]>;


    constructor(private afAuth: AngularFireAuth,public afs: AngularFirestore) {
        this.casasCollection = afs.collection<Casas>('casas');

        this.casa = this.casasCollection.stateChanges(['added']).pipe(
            map(actions => actions.map(a => {
                const data = a.payload.doc.data() as Casas;
                const id = a.payload.doc.id;
                return { id, ...data };
            }))
        );

    }

}
