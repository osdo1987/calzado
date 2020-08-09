import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FirestoreService } from './../../servicios/firestore/firestore.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';


@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  //declaracion de variables
  clientes: any;
  dataTable: any;
  formularioCrear:FormGroup;

  idEnviada:any;
  identificacion: string;
  nombres: string;
  direccion: string;
  telefono: string;

  constructor(private fes: FirestoreService,
              private chRef: ChangeDetectorRef,
              private formBuilder: FormBuilder) {

                this.formularioCrear = formBuilder.group({
                  identificacion: [null, Validators.compose([
                    Validators.required,
                    Validators.minLength(6),
                    Validators.maxLength(10)
                ])],
                  nombres: ['',Validators.required],
                  direccion: ['',Validators.required],
                  telefono: ['',Validators.required],

                });

                fes.obtenerTodos('clientes').subscribe(cliente => {
      this.clientes = cliente;
    });


  }

  ngOnInit(): void {
  }

  submit(){
    this.idEnviada=this.formularioCrear.value.identificacion;
    if(this.idEnviada !=null){
      this.fes.create(this.formularioCrear.value, this.idEnviada, 'clientes');

    }
     }

}
