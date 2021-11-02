import { Directive, ElementRef, forwardRef, HostBinding, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn, Validators } from '@angular/forms';
import validatorjs from 'validator';

export function LowercaseValidation(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (!control.value) { return null; }
    return control.value === control.value.toLowerCase() ? null : { lowercase: 'Tiene que estar en minusculas' }
  };
}

@Directive({
  selector: '[lowercase]',
  providers: [{ provide: NG_VALIDATORS, useExisting: LowercaseValidator, multi: true }]
})
export class LowercaseValidator implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    return LowercaseValidation()(control);
  }
}

@Directive({ selector: '[myShowErrors]' })
export class ShowErrorsDirective implements OnChanges {
  @Input('myShowErrors') errors: any = undefined;
  @HostBinding('textContent') mensaje: string = '';
  @HostBinding('hidden') hidden: boolean = false;

  ngOnChanges(changes: SimpleChanges): void {
    if (!this.errors) {
      this.hidden = true;
      return;
    }
    let msg = '';
    for (let err in this.errors) {
      switch (err) {
        case 'required':
          msg += 'Es obligatorio. ';
          break;
        case 'minlength':
          msg += `Como mínimo debe tener ${this.errors[err].requiredLength} caracteres. `;
          break;
        case 'maxlength':
          msg += `Como máximo debe tener ${this.errors[err].requiredLength} caracteres. `;
          break;
        case 'pattern':
        case 'email':
          msg += 'El formato no es correcto. ';
          break;
        case 'min':
          msg += `El valor debe ser mayor o igual a ${this.errors[err].min}. `;
          break;
        case 'max':
          msg += `El valor debe ser inferior o igual a ${this.errors[err].max}. `;
          break;
        default:
          if (typeof this.errors[err] === 'string')
            msg += `${this.errors[err]}${this.errors[err].endsWith('.')?'':'.'} `;
          else if (typeof this.errors[err]?.message === 'string')
            msg += `${this.errors[err].message}${this.errors[err].message.endsWith('.')?'':'.'} `;
          break;
      }
    }
    this.mensaje = msg.trim();
    this.hidden = this.mensaje === '';
  }
}


/*@Directive({
  selector: '[minlength]',
  providers: [{ provide: NG_VALIDATORS, useExisting: MinLengthValidator, multi: true }]
})

export class MinLengthValidator implements Validator {
  @Input('minlength') min:number= 0;
  validate(control: AbstractControl): { [key: string]: any } {
    if (!this.min) {
      throw new Error('Tiene que tener al menos 2 letras.');
    }
    return Validators.minLength(this.min);
}

}*/

export const VALIDADORES_ERROR_MESSAGE = [LowercaseValidator,ShowErrorsDirective]


