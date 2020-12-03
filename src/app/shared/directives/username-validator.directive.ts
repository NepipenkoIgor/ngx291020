import { Directive } from '@angular/core';
import { FormControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';
import { ValidationService } from '../services/validation.service';

@Directive({
  selector: '[appUsernameValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: UsernameValidatorDirective,
      multi: true
    }
  ]
})
export class UsernameValidatorDirective implements Validator {


  public constructor(
    private validationService: ValidationService
  ) {
  }

  public validate(control: FormControl): ValidationErrors | null {
    return this.validationService.usernameSpecialSymbols(control);
  }
}
