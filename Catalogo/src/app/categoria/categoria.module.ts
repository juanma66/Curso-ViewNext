import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MyCoreModule } from 'src/lib/my-core';
import { CommonServicesModule } from '../common-services';
import { Categoria_COMPONENTES } from './categoria.component';
import { CommonComponentModule } from '../common-component/common-component.module';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    Categoria_COMPONENTES,
  ],
  exports: [
    Categoria_COMPONENTES,
  ],
  imports: [
    CommonModule, FormsModule, RouterModule.forChild([]),
    MyCoreModule, CommonServicesModule, CommonComponentModule,NgxPaginationModule
  ]
})
export class CategoriaModule { }
