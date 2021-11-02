import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoggerService } from 'src/lib/my-core';
import { RESTDAOService } from '../base-code/RESTDAOService';
import { NotificationService } from '../common-services';
import { ModoCRUD } from '../base-code/typos';
import { Router } from '@angular/router';
import { AuthService, AUTH_REQUIRED } from '../security';


@Injectable({
  providedIn: 'root',
})
export class PeliculasDAOService extends RESTDAOService<any, any> {
  constructor(http: HttpClient) {
    super(http, 'peliculas', {
      context: new HttpContext().set(AUTH_REQUIRED, true),
    });
  }
}

@Injectable({
  providedIn: 'root',
})
export class PeliculasViewModelService {
  protected modo: ModoCRUD = 'list';
  protected listado: Array<any> = [];
  protected elemento: any = {};
  protected idOriginal: any = null;
  protected listURL = '/peliculas';

  constructor(
    protected notify: NotificationService,
    protected out: LoggerService,
    protected dao: PeliculasDAOService,
    protected router: Router,
    public auth: AuthService,
  ) {}
  public get Modo(): ModoCRUD {
    return this.modo;
  }
  public get Listado(): Array<any> {
    return this.listado;
  }
  public get Elemento(): any {
    return this.elemento;
  }

  public list(): void {
    this.dao.query().subscribe(
      (data) => {
        this.listado = data;
        this.modo = 'list';
      },
      (err) => this.notify.add(err.message)
    );
  }

  public add(): void {
    this.elemento = {};
    this.modo = 'add';
  }
  public edit(key: any): void {
    this.dao.get(key).subscribe(
      (data) => {
        this.elemento = data;
        this.idOriginal = key;
        this.modo = 'edit';
      },
      (err) => this.notify.add(err.message)
    );
  }
  public view(key: any): void {
    this.dao.get(key).subscribe(
      (data) => {
        this.elemento = data;
        this.modo = 'view';
      },
      (err) => this.notify.add(err.message)
    );
  }
  public delete(key: any): void {
    if (!window.confirm('¿Seguro?')) {
      return;
    }
    this.dao.remove(key).subscribe(
      (data) => this.list(),
      (err) => this.notify.add(err.message)
    );
  }
  clear() {
    this.elemento = {};
    this.idOriginal = null;
    this.listado = [];
  }
  public cancel(): void {
    this.elemento = {};
    this.idOriginal = null;
    // this.list();
    this.router.navigateByUrl(this.listURL);
  }

  public send(): void {
    switch (this.modo) {
      case 'add':
        this.dao.add(this.elemento).subscribe(
          (data) => this.cancel(),
          (err) => this.notify.add(err.message)
        );
        break;
      case 'edit':
        this.dao.change(this.idOriginal, this.elemento).subscribe(
          (data) => this.cancel(),
          (err) => this.notify.add(err.message)
        );
        break;
      case 'view':
        break;
    }
  }
}
