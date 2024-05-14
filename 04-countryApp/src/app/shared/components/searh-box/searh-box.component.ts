import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'shared-searh-box',
  templateUrl: './searh-box.component.html'
})
export class SearhBoxComponent {

  @Input() placeholder: string='';
  @Output() onValue: EventEmitter<string> = new EventEmitter();

  @ViewChild('txtSearchInput') txtSearchInput!: HTMLInputElement;

  emitValue(term:string):void {
    this.onValue.emit( term );
  }

}
