import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-color-btn',
  templateUrl: './color-btn.component.html',
  styleUrls: ['./color-btn.component.scss']
})
export class ColorBtnComponent implements OnInit {

  @ViewChild('myInputText') inputText!: { nativeElement: any; };

  isGreen = false;

  constructor() {

    setInterval(() => { this.sendToServer() }, 2000)
  }

  ngOnInit(): void {
  }

  public toggleGreen(): void {
    this.isGreen = !this.isGreen;
  }

  public sendToServer(): void {
    const data = this.inputText.nativeElement;
    console.log(data.value)
  }

}
