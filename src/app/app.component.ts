import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { CounterService } from './core/services';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  counter$ = this.counterService.counter$;

  constructor(
    private counterService: CounterService
  ) {}

  title = 'counter';
  

  ngOnInit(): void {
    this.counterService.getCounter();
  }
}
