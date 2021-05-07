import { UserService } from './../../../services/user.service';
import { Component, OnInit } from '@angular/core';
import { AbstractControlOptions, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from '@app/services/alert.service';
import { MustMatch } from '@app/helpers/must-match.validators';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss']
})
export class AddEditComponent implements OnInit {

  form!: FormGroup;
  id!: string;
  isAddMode!: boolean;
  loading = false;
  submitted = false;

  constructor(
    private _formBuilder: FormBuilder,
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _alerteService: AlertService
  ) { }

  ngOnInit(): void {
    this.id = this._route.snapshot.params['id'];
    this.isAddMode = !this.id;

    //password not required in edit mode
    const passwordValidators = [Validators.minLength(6)];
    if (this.isAddMode) {
      passwordValidators.push(Validators.required);
    }

    const formOptions: AbstractControlOptions = { validators: MustMatch('password', 'confirmPassword') };
    this.form = this._formBuilder.group({
      title: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      role: ['', Validators.required],
      password: ['', [Validators.minLength(6), this.isAddMode ? Validators.required : Validators.nullValidator]],
      confirmPassword: ['', this.isAddMode ? Validators.required : Validators.nullValidator]
    }, formOptions);

    if (!this.isAddMode) {
      this._userService.getById(this.id)
        .pipe(first())
        .subscribe(x => this.form.patchValue(x))
    }
  }

  // convenience getter for easy access to form fields
  get formControl() {
    return this.form.controls;
  }

  onSubmit() {
    this.submitted = true;

    //reset alerts on submit
    this._alerteService.clear();

    // stop here if form is invalid
    if (this.form.invalid) {
      return;
    }

    this.loading = true;
    if (this.isAddMode) {
      this._createUser();
    } else {
      this.updateUser()
    }
  }

  private _createUser() {

    this._userService.create(this.form.value)
      .pipe(first())
      .subscribe(() => {
        this._alerteService.success('User added', { keepAfterRouteChange: true });
        this._router.navigate(['../'], { relativeTo: this._route })
      })
      .add(() => this.loading = false)

  }

  private updateUser() {
    this._userService.update(this.id, this.form.value)
      .pipe(first())
      .subscribe(() => {
        this._alerteService.success('User updated', { keepAfterRouteChange: true });
        this._router.navigate(['../../'], { relativeTo: this._route })
      })
      .add(() => this.loading = false);
  }

}
