// import {Pipe} from '@angular/core';
// import * as moment from 'moment';

// @Pipe({
//   name: 'monthName'
// })
// export class monthName {
//   transform(value, args) {
//     var lang = moment().locale(args);
//     return lang.localeData().months(moment([2012, value - 1]));
//   }
// }

import {Pipe} from '@angular/core';

@Pipe({
  name: 'monthName'
})
export class monthName {
  private lang: string; // (es or en)
  transform(value, args) {
    if (args === 'es') { this.lang = 'es'; }
    let monthNames = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];
    if (this.lang === 'es') {
      monthNames = [ 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre' ];
    }
    return monthNames[value - 1];
  }
}
