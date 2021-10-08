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
  fecha:Date | null;


}

@Injectable({providedIn: 'root'})
export class ClienteViewModel {
  Listado: Array<Cliente> = [
    { idCliente: 1, tienda:'3',nombre: 'Pepito', apellidos: 'Grillo', correo: 'pepito@grillo',direccion:'calle',fecha:null}
  ]
  Elemento: Cliente = { idCliente: null, tienda:'',nombre: '', apellidos: '', correo: null, direccion:null, fecha:null};
  IsAdd = true;

  constructor(private notify: NotificationService) {

  }

  public list() {

  }

  public add() {
    this.Elemento = { idCliente: null,tienda:'', nombre: '', apellidos: '', correo: null, direccion:null,fecha:null}
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

  }

  public cancel() {
    alert("cancel");
    this.Elemento = {
      idCliente: null,
      nombre: '',
      apellidos: '',
      correo: null,
      direccion: null,
      tienda: null,
      fecha: null,

    };
  }

  public send() {
    alert("send");
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

  constructor(public vm: ClienteViewModel) { }

  ngOnInit(): void {
  }

}
