import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-select-dropdown',
  templateUrl: './select-dropdown.component.html',
  styleUrls: ['./select-dropdown.component.scss']
})
export class SelectDropdownComponent implements OnInit {

  public submitted = false;
  public suits: any = ['One', 'two', 'three', 'four'];


  constructor(public formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  form = this.formBuilder.group({
    name: ['', [Validators.required]]
  })

  changeSuit(e: any): void {
    this.form.get('name')?.setValue(e.target.value, {
      onlySelf: true
    });
  }

  public handleError = (controlName: string, errorName: string) => {
    return this.form.controls[controlName].hasError(errorName)
  }

  onSubmit(): void {
    this.submitted = true;
    alert(JSON.stringify(this.form.value))
  }

}
