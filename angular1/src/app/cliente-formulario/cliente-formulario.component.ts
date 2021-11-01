import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { NotificationService, NotificationType } from '../common-services';



export interface Cliente {
  idCliente: number | null;
  tienda: string | null;
  nombre: string;
  apellidos: string;
  correo: string | null;
  direccion: string | null;
  fechaInicio:Date | null;
  fechaFinal:Date | null;

}

@Injectable({providedIn: 'root'})
export class ClienteViewModel {
  Listado: Array<Cliente> = [
    { idCliente: 1, tienda:'3',nombre: 'Pepito', apellidos: 'Grillo', correo: 'pepito@grillo',direccion:'calle',fechaInicio:null, fechaFinal:null}
  ]
  Elemento: Cliente = { idCliente: null, tienda:'',nombre: '', apellidos: '', correo: null, direccion:null, fechaInicio:null, fechaFinal:null};
  IsAdd = true;

  constructor(private notify: NotificationService) {

  }

  public list() {

  }

  public add() {
    this.Elemento = { idCliente: null,tienda:'', nombre: '', apellidos: '', correo: null, direccion:null,fechaInicio:null, fechaFinal:null}
    this.IsAdd = true;
  }

  public edit() {
    this.Elemento = this.Listado[0];
    this.IsAdd = false;
  }

  public view() {
    this.Elemento = this.Listado[0];
    this.IsAdd = false;
  }

  public delete() {
       if(!window.confirm("¿Seguro?"))return;{
         this.notify.add("Borrado");
       }
  }

  public cancel() {

    this.Elemento = {
      idCliente: null,
      nombre: '',
      apellidos: '',
      correo: null,
      direccion: null,
      tienda: null,
      fechaInicio:null,
      fechaFinal:null

    };
  }


  public send() {

    this.notify.add(
      (this.IsAdd ? 'Nuevos: ' : 'Modificados: ') +
        JSON.stringify(this.Elemento),
      NotificationType.info
    );
  }
}



@Component({
  selector: 'app-cliente-formulario',
  templateUrl: './cliente-formulario.component.html',
  styleUrls: ['./cliente-formulario.component.scss']
})
export class ClienteFormularioComponent implements OnInit {

    errorObligatorio:string='Campo obligado';

  constructor(public vm: ClienteViewModel) { }

  ngOnInit(): void {
  }

}
