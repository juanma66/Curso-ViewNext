import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { BlogViewModelService } from './servicios.service';

@Component({
  selector: 'app-componente',
  templateUrl: './tmpl-anfitrion.component.html',
  styleUrls: ['./componente.component.scss']
})
export class BlogComponent implements OnInit {

  constructor(protected vm: BlogViewModelService) { }
  public get VM(): BlogViewModelService { return this.vm; }

  ngOnInit(): void {
    this.vm.list();

  }
}

@Component({
  selector: 'app-blog-list',
  templateUrl: './tmpl-list.component.html',
  styleUrls: ['./componente.component.scss']
 })
 export class BlogListComponent implements OnInit {
  public page: number = 0;
  constructor(protected vm: BlogViewModelService) { }
  public get VM(): BlogViewModelService { return this.vm; }
  ngOnInit(): void {
    this.vm.list();

  }
 }
 @Component({
  selector: 'app-blog-add',
  templateUrl: './tmpl-form.component.html',
  styleUrls: ['./componente.component.scss']
 })
 export class BlogAddComponent implements OnInit {
  constructor(protected vm: BlogViewModelService) { }
  public get VM(): BlogViewModelService { return this.vm; }
  ngOnInit(): void {
    this.vm.add();
   }
 }
 @Component({
  selector: 'app-blog-edit',
  templateUrl: './tmpl-form.component.html',
  styleUrls: ['./componente.component.scss']
 })
 export class BlogEditComponent implements OnInit, OnDestroy {
  private obs$: any;
  constructor(protected vm: BlogViewModelService,
    protected route: ActivatedRoute, protected router: Router ) { }
  public get VM(): BlogViewModelService { return this.vm; }
  ngOnInit(): void {
    this.obs$ = this.route.paramMap.subscribe(
      (params: ParamMap) => {
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
  selector: 'app-blog-view',
  templateUrl: './tmpl-view.component.html',
  styleUrls: ['./componente.component.scss']
 })
 export class BlogViewComponent implements OnInit, OnDestroy {
  private obs$: any;
  constructor(protected vm: BlogViewModelService,
    protected route: ActivatedRoute, protected router: Router) { }
  public get VM(): BlogViewModelService { return this.vm; }
  ngOnInit(): void {
    this.obs$ = this.route.paramMap.subscribe(
      (params: ParamMap) => {
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

 export const BLOG_COMPONENTES = [
  BlogComponent, BlogListComponent, BlogAddComponent,
  BlogEditComponent, BlogViewComponent,
 ];


