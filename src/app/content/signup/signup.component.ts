import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ValidationService } from '../../shared/services/validation.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  // public signUpForm = new FormGroup({
  //   username: new FormControl({value: 'Ihor', disabled: true},
  //     [Validators.required, Validators.minLength(4)]),
  //   password: new FormGroup({
  //     password: new FormControl(''),
  //     cpassword: new FormControl(''),
  //   })
  // });

  public signUpForm = this.fb.group({
    username: ['', this.validationService.usernameSpecialSymbols, this.validationService.uniqueUsername.bind(this.validationService)],
    emails: this.fb.array(['']),
    male: [true],
    password: this.fb.group({
      password: [''],
      cpassword: [''],
    }, {
      validators: [this.validationService.equalValidator]
    }),
  });

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private validationService: ValidationService,
  ) {
  }

  ngOnInit(): void {

    // setTimeout(() => {
    //   const jsonRes = {
    //     username: '',
    //     password: ''
    //   };
    //   this.signUpForm = new FormGroup(Object.entries(jsonRes)
    //     .reduce((form, [key, value]) => {
    //       return {...form, [key]: new FormControl(value, [Validators.required, Validators.minLength(4)])} as any;
    //     }, {}));
    // }, 5000);

    console.log(this.router.config);
    setTimeout(() => {
      this.signUpForm.get('username')?.enable();
    }, 5000);
  }

  public signup(user: any): void {
    console.log(user);
  }

  public getControl(name: any): FormControl {
    return this.signUpForm.get(name) as FormControl;
  }

  public getControls(form: FormGroup, name: any): AbstractControl[] {
    return (form.get(name) as FormArray).controls;
  }

  public addEmail(): void {
    (this.signUpForm.get('emails') as FormArray).push(this.fb.control(''));
  }

  public removeEmail(index: number): void {
    (this.signUpForm.get('emails') as FormArray).removeAt(index);
  }

  public toControl(control: AbstractControl): FormControl {
    return control as FormControl;
  }

}
