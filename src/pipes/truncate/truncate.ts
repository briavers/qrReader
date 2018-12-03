import { Pipe, PipeTransform } from '@angular/core';

/**
 * Generated class for the TruncatePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  /**
   * Takes a value and makes it lowercase.
   */
  transform(value: string, words: number) {
    
    const elipses = "...";
    
    
    const truncatedText = value.split(" ").splice(0, words).join(" ")
    

    return truncatedText + elipses;
  }
}
