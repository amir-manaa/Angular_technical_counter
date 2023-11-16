import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
// service
import { CounterService } from '../../../core/services';

@Component({
  selector: 'app-increment-counter',
  templateUrl: './increment-counter.component.html',
  styleUrls: ['./increment-counter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IncrementCounterComponent implements OnInit {

  counter$ = this.counterService.counter$;
  
  constructor(
    private readonly counterService: CounterService
  ) {}

  ngOnInit(): void {
    this.counterService.getCounter();
  }

  invrementCounter() {
    this.counterService.updateCounter(true);
  }
}
