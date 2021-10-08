import { Directive, EventEmitter, HostBinding, HostListener, Input, Output, SimpleChanges } from '@angular/core';

@Directive({ selector: `[myWinConfirm]` })
export class WindowConfirmDirective {
  @Output('myWinConfirm') winConfirm: EventEmitter<any> = new EventEmitter();
  @Input('myWinConfirmMessage') winConfirmMessage = '¿Seguro?';
  @HostBinding('class.pressed') isPressed: boolean = false;

  @HostListener('click', ['$event'])
  confirmFirst() {
    if (window.confirm(this.winConfirmMessage)) {
      this.winConfirm.emit(null);
    }
  }
  @HostListener('mousedown') hasPressed() { this.isPressed = true; }
  @HostListener('mouseup') hasReleased() { this.isPressed = false; }
}




@Directive({ selector: '[show]' })
export class ShowDirective {
  @HostBinding('hidden') hidden: boolean = false;
  @Input('show') set show(value: boolean) { this.hidden = !value; }
}


@Directive({ selector: `[myErrorsMessage]` })
export class myErrorsMessageDirective {
  @Output('myErrorsMessage') winConfirm: EventEmitter<any> = new EventEmitter();

}


export const DIRECTIVAS_ATRIBUTO = [ WindowConfirmDirective, ShowDirective, myErrorsMessageDirective, ]
