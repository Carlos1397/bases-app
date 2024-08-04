import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h1>Counter Component</h1>
    <h3>Counter:{{ counter }}</h3>
    <button (click)="increaseBy(+1)">+1</button>
    <button (click)="reset()">reset</button>
    <button (click)="increaseBy(-1)">-1</button> `,
})
/**
 * Component responsible for managing a counter value.
 */
export class CounterComponent {
  // Initial counter value set to 10
  public counter: number;

  /**
   * Initializes the counter to a default value of 10.
   */
  constructor() {
    this.counter = 10;
  }

  /**
   * Increases the counter by the specified value.
   * @param value - The value to increase the counter by.
   */
  increaseBy(value: number): void {
    this.counter += value;
  }

  /**
   * Resets the counter to its default value of 10.
   */
  reset(): void {
    this.counter = 10;
  }
}
