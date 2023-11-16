import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LocalStorageManagement } from './../class';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  localStorageManagement = new LocalStorageManagement();

  private counterSubject = new BehaviorSubject<number>(0);
  counter$ = this.counterSubject.asObservable();

  constructor() {}

  /**
   * Get counter value and save it on counterSubject
  */
  getCounter(): void {
    const counter = this.localStorageManagement.counter
    this.counterSubject.next(counter);
  }

  /**
   * Update counter value (increase / decrease)
   * @param  {Boolean}
  */
  updateCounter(increment: boolean) {
    let increaseDecreaseValue = this.increaseDecreaseValue();
    if(increment === false){
      increaseDecreaseValue = increaseDecreaseValue * -(1);
    }
     const currentCounter = this.counterSubject.value;
     this.counterSubject.next(currentCounter + increaseDecreaseValue);
     this.localStorageManagement.counterValue = currentCounter + increaseDecreaseValue;
     this.localStorageManagement.updateClickNumber();
  }

  /**
   * Set counter value to O
  */
  resetCounter(): void {
    this.localStorageManagement.resetCounter();
    this.counterSubject.next(0);
  }

  /**
   * Get increase/decrease value
   * @return {Number}
  */
  increaseDecreaseValue(): number {
    const clickNumber = this.localStorageManagement.clickNumber;
    const increaseDecreaseValue = (Math.trunc(clickNumber / 30) === 0) ? 1 : Math.pow(2, Math.trunc(clickNumber / 30));
    return increaseDecreaseValue;
  }
}
