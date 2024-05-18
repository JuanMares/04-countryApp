import { Component, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';

@Component({
  selector: 'shared-searh-box',
  templateUrl: './searh-box.component.html'
})
export class SearhBoxComponent implements OnInit, OnDestroy{

  private debouncer:Subject<string> = new Subject<string>
  private debouncerSubscription?:Subscription;

  @Input() placeholder: string='';
  @Input() initialValue: string='';
  @Output() onValue: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
    this.debouncerSubscription = this.debouncer
    .pipe(
      debounceTime(600)
    )
    .subscribe( value =>
      this.onValue.emit(value)
    )
  }

  ngOnDestroy(): void {
    this.debouncerSubscription?.unsubscribe();
  }

  emitValue(term:string):void {
    this.onValue.emit( term );
  }

  onKeyPress(searchTerm:string):void{
    this.debouncer.next(searchTerm)
  }

}
