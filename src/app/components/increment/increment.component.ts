import { Component, OnInit, PACKAGE_ROOT_URL, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styleUrls: ['./increment.component.css']
})
export class IncrementComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress: ElementRef;

  @Input() leyend: string = 'leyenda';
  @Input() progress: number;

  @Output() changesValue: EventEmitter<number> = new EventEmitter;

  constructor() { }

  ngOnInit() {
  }

  onChanges(newValue: number) {

    // const elemHTML: any = document.getElementsByName('progress');

    if ( newValue >= 100) {
      this.progress = 100;
    } else if (newValue <= 0) {
      this.progress = 0;
    } else {
      this.progress = newValue;
    }
    // elemHTML.value = this.progress;
    this.txtProgress.nativeElement.value = this.progress;
    this.changesValue.emit(this.progress);
  }

  changeValue(value: number) {
    if (this.progress >= 100 && value > 0) {
      this.progress = 100;
      return;
    }
    if (this.progress <= 0 && value < 0) {
      this.progress = 0;
      return;
    }
    this.progress = this.progress + value;
    this.changesValue.emit(this.progress);
    this.txtProgress.nativeElement.focus();
  }
}
