import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'oneTimeBinding',
  pure: false
})
export class OneTimeBindingPipe implements PipeTransform {
  private binded = false;
  private initialValue: any;

  transform(value: any): any {
    if (!this.binded) {
      this.binded = true;
      this.initialValue = value;
      return value;
    } else {
      return this.initialValue;
    }
  }
}
