import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demos',
  templateUrl: './demos.component.html',
  styleUrls: ['./demos.component.scss']
})
export class DemosComponent implements OnInit {

 private nombre: string='mundo';
 listado=[
   {id: 1, nombre: 'Madrid'},
   {id: 2, nombre: 'Malaga'},
   {id: 3, nombre: 'Sevilla'},
   {id: 4, nombre: 'Ciudad Real'},
 ]

   idProvincia=2;

   resultado:string | null =null;
   visible=true;
   estetica={importante:true, error:false, urgente:true};
   fontSize=14;



  constructor() { }

  public get Nombre():string{return this.nombre;}
  public set Nombre(value: string){
  if(this.nombre===value)return;
  this.nombre=value;
}
  public saludo():void{
  this.resultado=`Hola ${this.nombre}`;
  }

  despide():void{
    this.resultado=`Adios ${this.nombre}`;

  }

  public di(algo:string):void{
    this.resultado=`Dice ${algo}`;
  }

cambiar():void{
  this.visible=!this.visible;
  this.estetica.importante=!this.estetica.importante;
  this.estetica.error=!this.estetica.error;
}

   calculo(a:number, b:number): number{
     return a+b;
   }

   add(provincia:string):void{
     const id=this.listado.length===0 ? 1 : (this.listado[this.listado.length -1].id+1);
     this.listado.push({id, nombre: provincia});
     this.idProvincia=id;
  }

  ngOnInit(): void {
  }

}
