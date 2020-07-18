import { HostListener, OnInit, EventEmitter, Output, OnDestroy, Input } from '@angular/core';
import { Directive } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Directive({
  selector: '[appButtonDebounce]'
})
export class ButtonDebounceDirective implements OnInit, OnDestroy {

  @Input() debounceTime: number;
  @Output() debounceClick = new EventEmitter();
  private clickSubject = new Subject();
  private clickSubscription: Subscription;


  constructor() {
  }

  ngOnInit() {
    this.clickSubscription = this.clickSubject
      .pipe(debounceTime(this.debounceTime))
      .subscribe(e => this.debounceClick.emit(e));
  }

  ngOnDestroy() {
    this.clickSubscription.unsubscribe();
  }

  @HostListener('click', ['$event'])
  clickEvent(event) {
    event.preventDefault();
    event.stopPropagation();
    this.clickSubject.next(event);
  }

}
