import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { IdiomaViewModelService } from './servicios.service';

@Component({
  selector: 'app-idioma',
  templateUrl: './tmpl-anfitrion.component.html',
  styleUrls: ['./idioma.component.scss'],
})
export class IdiomaComponent implements OnInit {
  constructor(protected vm: IdiomaViewModelService) {}
  public get VM(): IdiomaViewModelService {
    return this.vm;
  }
  ngOnInit(): void {
    this.vm.list();
  }
}

@Component({
  selector: 'app-idioma-list',
  templateUrl: './tmpl-list.component.html',
  styleUrls: ['./idioma.component.scss'],
})
export class IdiomaListComponent implements OnInit {
  public page: number = 0;
  constructor(protected vm: IdiomaViewModelService) {}
  public get VM(): IdiomaViewModelService {
    return this.vm;
  }
  ngOnInit(): void {
    this.vm.list();
  }
}
@Component({
  selector: 'app-idioma-add',
  templateUrl: './tmpl-form.component.html',
  styleUrls: ['./idioma.component.scss'],
})
export class IdiomaAddComponent implements OnInit {
  constructor(protected vm: IdiomaViewModelService) {}
  public get VM(): IdiomaViewModelService {
    return this.vm;
  }
  ngOnInit(): void {
    this.vm.add();
  }
}
@Component({
  selector: 'app-idioma-edit',
  templateUrl: './tmpl-form.component.html',
  styleUrls: ['./idioma.component.scss'],
})
export class IdiomaEditComponent implements OnInit, OnDestroy {
  private obs$: any;
  constructor(
    protected vm: IdiomaViewModelService,
    protected route: ActivatedRoute,
    protected router: Router
  ) {}
  public get VM(): IdiomaViewModelService {
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
  selector: 'app-idioma-view',
  templateUrl: './tmpl-view.component.html',
  styleUrls: ['./idioma.component.scss'],
})
export class IdiomaViewComponent implements OnInit, OnDestroy {
  private obs$: any;
  constructor(protected vm: IdiomaViewModelService, protected route: ActivatedRoute, protected router: Router) {}
  public get VM(): IdiomaViewModelService {
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

export const Idioma_COMPONENTES = [
  IdiomaComponent,
  IdiomaListComponent,
  IdiomaAddComponent,
  IdiomaEditComponent,
  IdiomaViewComponent,
];
