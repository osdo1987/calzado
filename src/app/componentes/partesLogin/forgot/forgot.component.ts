import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../../../servicios/firestore/firestore.service';
import {ClientesInterface}from '../../../models/clientesInterface';
import { snapshotChanges } from '@angular/fire/database';

@Component({
  selector: 'app-forgot',
  templateUrl: './forgot.component.html',
  styleUrls: ['./forgot.component.scss']
})
export class ForgotComponent implements OnInit {

  public datos: any = {
    id: '1115075965',
    nombres:'oscar javier',
    apellidos:'ortega dorado',
    direccion:'calle 33',
    telefono:'3157161385',
    tallas: {
      talla:'36',
      cantidad:15
     }
      };
  osdo: any[];
  constructor(private firestoreService: FirestoreService) { }

  ngOnInit() {
    this.firestoreService.obtenerTodos('clientes').subscribe((catsSnapshot) => {
     console.log('osdo',catsSnapshot);
     this.osdo= catsSnapshot;
    });

}
}
