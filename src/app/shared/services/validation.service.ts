import { Injectable } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ValidationService {

  constructor(
    private http: HttpClient
  ) {
  }

  public usernameSpecialSymbols(control: FormControl): ValidationErrors | null {
    const valid = /^[a-zA-Z]*$/.test(control.value);
    return valid
      ? null
      : {
        username: 'Should contains only letters '
      };
  }

  public equalValidator({value}: FormGroup): ValidationErrors | null {
    const [password, cpassword] = Object.values(value);
    return password === cpassword
      ? null
      : {
        password: 'Password do not match'
      };
  }

  public uniqueUsername({value: username}: FormControl): Observable<ValidationErrors | null> {
    return this.http.post('/auth/checkUsername', {username}).pipe(delay(3000));
  }
}
