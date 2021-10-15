import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule, PaginationControlsComponent } from 'ngx-pagination';
import { MuCoreModule } from 'src/lib/mu-core';
import { CommonComponentModule } from '../common-component/common-component.module';
import { CommonServicesModule } from '../common-services';
import { BLOG_COMPONENTES } from './componente.component';



@NgModule({
  declarations: [
    BLOG_COMPONENTES,
  ],

  exports:[
    BLOG_COMPONENTES,
  ],

  imports: [
      CommonModule,FormsModule,RouterModule.forChild([]),
      MuCoreModule,CommonServicesModule,
      CommonComponentModule, NgxPaginationModule,



  ]
})

export class BlogModule { }
