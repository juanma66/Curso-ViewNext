import { Component, Input, OnInit } from '@angular/core';
import { ClienteViewModel } from 'src/app/cliente-formulario/cliente-formulario.component';

@Component({
  selector: 'app-show-errors-message',
  templateUrl: './show-errors-message.component.html',
  styleUrls: ['./show-errors-message.component.scss']
})
export class ShowErrorsMessageComponent implements OnInit {

  constructor(public vm: ClienteViewModel) { }





  ngOnInit(): void {
  }

}
