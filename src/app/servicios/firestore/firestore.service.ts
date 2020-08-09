import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from '@angular/fire/firestore';
import {ClientesInterface}from '../../models/clientesInterface';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FirestoreService {
  coleccion: string;
  clientesCollection:AngularFirestoreCollection<ClientesInterface>;
  clientes:Observable<ClientesInterface[]>;
  cliente:AngularFirestoreDocument<ClientesInterface>

        constructor(private firestore: AngularFirestore) {
        }
  //Crea una nueva coleccion
  public create(data:any,identificador:any,coleccion: string) {
    return this.firestore.collection(coleccion).doc(identificador).set(data);
  }
  //Obtiene un documento
  public obtener(documentId: string,coleccion: string,) {
    return this.firestore.collection(coleccion).doc(documentId).snapshotChanges();
  }
  //Obtiene todos los documentos
  public obtenerTodos(coleccion: string) {
    return this.firestore.collection(coleccion).valueChanges();
  }
  //Actualiza un documento
  public actualizar(documentId: string, data: any,coleccion: string) {
    return this.firestore.collection(coleccion).doc(documentId).set(data);
  }


}
