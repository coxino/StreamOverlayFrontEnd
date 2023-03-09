import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rtptovol'
})
export class RtptovolPipe implements PipeTransform {
  
  transform(value: string): string {
    try{
      value = value.split('%')[0];    
      var rtp = 100 - Number(value)
      
      if(rtp > 3)
      {
        return "HIGH"
      }

      if(rtp > 3)
      {
        return "MEDIUM-HIGH"
      }
      
      if(rtp > 2)
      {
        return "MEDIUM"
      }

      if(rtp > 1)
      {
        return "MEDIUM-LOW"
      }
      
      
      return "LOW"
      
    }
    catch
    {
      return "LOW";
    }    
  }
  
}
