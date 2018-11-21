import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  private _value;
  @Input()
  set value(value) {
    console.log('set');
    this._value = value;
  }
  get value(): any {
    return this._value;
  }
}
