import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { CategoriaViewModelService } from './servicios.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './tmpl-anfitrion.component.html',
  styleUrls: ['./categoria.component.scss'],
})
export class CategoriaComponent implements OnInit {
  constructor(protected vm: CategoriaViewModelService) {}
  public get VM(): CategoriaViewModelService {
    return this.vm;
  }
  ngOnInit(): void {
    this.vm.list();
  }
}

@Component({
  selector: 'app-categoria-list',
  templateUrl: './tmpl-list.component.html',
  styleUrls: ['./categoria.component.scss'],
})
export class CategoriaListComponent implements OnInit {
  public page: number = 0;
  constructor(protected vm: CategoriaViewModelService) {}
  public get VM(): CategoriaViewModelService {
    return this.vm;
  }
  ngOnInit(): void {
    this.vm.list();
  }
}
@Component({
  selector: 'app-categoria-add',
  templateUrl: './tmpl-form.component.html',
  styleUrls: ['./categoria.component.scss'],
})
export class CategoriaAddComponent implements OnInit {
  constructor(protected vm: CategoriaViewModelService) {}
  public get VM(): CategoriaViewModelService {
    return this.vm;
  }
  ngOnInit(): void {
    this.vm.add();
  }
}
@Component({
  selector: 'app-categoria-edit',
  templateUrl: './tmpl-form.component.html',
  styleUrls: ['./categoria.component.scss'],
})
export class CategoriaEditComponent implements OnInit, OnDestroy {
  private obs$: any;
  constructor(
    protected vm: CategoriaViewModelService,
    protected route: ActivatedRoute,
    protected router: Router
  ) {}
  public get VM(): CategoriaViewModelService {
    return this.vm;
  }
  ngOnInit(): void {
    this.obs$ = this.route.paramMap.subscribe((params: ParamMap) => {
      const id = parseInt(params?.get('id') ?? '');
      if (id) {
        this.vm.edit(id);
      } else {
        this.router.navigate(['/404.html']);
      }
    });
  }
  ngOnDestroy(): void {
    this.obs$.unsubscribe();
  }
}
@Component({
  selector: 'app-categoria-view',
  templateUrl: './tmpl-view.component.html',
  styleUrls: ['./categoria.component.scss'],
})
export class CategoriaViewComponent implements OnInit, OnDestroy {
  private obs$: any;
  constructor(protected vm: CategoriaViewModelService, protected route: ActivatedRoute, protected router: Router) {}
  public get VM(): CategoriaViewModelService {
    return this.vm;
  }
  ngOnInit(): void {
    this.obs$ = this.route.paramMap.subscribe((params: ParamMap) => {
      const id = parseInt(params?.get('id') ?? '');
      if (id) {
        this.vm.view(id);
      } else {
        this.router.navigate(['/404.html']);
      }
    });
  }
  ngOnDestroy(): void {
    this.obs$.unsubscribe();
  }
}

export const Categoria_COMPONENTES = [
  CategoriaComponent,
  CategoriaListComponent,
  CategoriaAddComponent,
  CategoriaEditComponent,
  CategoriaViewComponent,
];
