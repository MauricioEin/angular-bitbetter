import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initials'
})
export class InitialsPipe implements PipeTransform {

  transform(value: string, maxLength:number=Infinity): string {
    var initials = ""
    const words = value.split(' ')
    words.slice(0,maxLength).forEach(word => initials += word.charAt(0))
    return initials
  }

}
