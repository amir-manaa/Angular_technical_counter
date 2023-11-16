import { ICounter } from './../models/counter';
import { GlobalConstants } from './../../core/models';

export class LocalStorageManagement {

    storageCounterKey!: string;

    constructor() {
        this.storageCounterKey = GlobalConstants.counterStorageKey;
    }

    /**
     * Return counter value
     * @return {Number}
    */
    get counter(): number {
        return this.counterObj.value;
    }
    
    /**
     * Return number click
     * @return {Number}
    */
    get clickNumber(): number {
        return  this.counterObj.clickNumber;
    } 

    /**
     * Update counter value
     * @param  {Number} new counter value
    */
    set counterValue(newValue: number) {
        let counter: ICounter = this.counterObj;
        counter = {
            ...counter,
            'value': newValue
        }
        this.updateCounterStorageValue(counter);
    }

    /**
     * Update click value
    */
    updateClickNumber(): void {
        let counter: ICounter = this.counterObj;
        counter = {
            ...counter,
            'clickNumber': counter.clickNumber += 1
        }
        this.updateCounterStorageValue(counter);
    }

    /**
     * Set counter and click values to 0
    */
    resetCounter(): void {
        const counter: ICounter = {
            value: 0,
            clickNumber: 0,
        }
        localStorage.clear();
        localStorage.setItem(this.storageCounterKey, JSON.stringify(counter));
    }

    /**
     * Return counter click and if no value on localStorage create new object
     * @return {counter}
    */
    private get counterObj(): ICounter {
        const counterStorageData = localStorage.getItem(this.storageCounterKey);
        if (counterStorageData) {
            return JSON.parse(counterStorageData) 
        } else {
            const counter: ICounter = {
                value: 0,
                clickNumber: 0,
            }
            this.setLocalStorageCounter(counter);
            return counter
        }
    }

    /**
     * Set counter object on localStorage
     * @return {counter}
    */
    private setLocalStorageCounter(counter: ICounter): void {
        localStorage.setItem(this.storageCounterKey, JSON.stringify(counter));
    }

    /**
     * Update counter object on localStorage
     * @return {counter}
    */
    private updateCounterStorageValue(newCounter: ICounter): void {
        const counter = JSON.stringify(newCounter);
        localStorage.setItem(this.storageCounterKey, counter)
    }
}