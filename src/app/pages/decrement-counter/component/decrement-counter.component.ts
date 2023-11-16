import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
// service
import { CounterService } from '../../../core/services';

@Component({
  selector: 'app-decrement-counter',
  templateUrl: './decrement-counter.component.html',
  styleUrls: ['./decrement-counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DecrementCounterComponent implements OnInit {

  counter$ = this.counterService.counter$;

  constructor(
    private counterService: CounterService
  ) {}

  ngOnInit(): void {
    this.counterService.getCounter();
  }

  decrementCounter() {
    this.counterService.updateCounter(false);
  }
}
