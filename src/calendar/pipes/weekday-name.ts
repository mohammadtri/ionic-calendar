import {Pipe} from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'weekdayName'
})
export class weekdayName {
  transform(value, args) {
    moment().locale(args);
    return moment().localeData().weekdaysShort()[value];
  }
}
