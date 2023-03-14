import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'linkify'
})
export class LinkifyPipe implements PipeTransform {

  constructor(private _domSanitizer: DomSanitizer) {}

  transform(value: any, args?: any): any {
    return this._domSanitizer.bypassSecurityTrustHtml(this.stylize(value));
  }

  private stylize(text: string): string {
  let stylizedText: string = '';
  if (text && text.length > 0) {
    const regex = /<img.*?src="(.*?)".*?>/g;
    stylizedText = text.replace(regex, '<img style="max-width:80%;border-radius: 1rem;" src="$1">');
    for (let t of stylizedText.split(" ")) {
      if (t.startsWith("@") && t.length>1)
        stylizedText = stylizedText.replace(t, `<a href="#${t.substring(1)}">${t}</a>`);
    }
    return stylizedText;
  }
  else return text;
}

}

@Pipe({
  name: 'linkify2'
})
export class LinkifyPipe2 implements PipeTransform {

  constructor(private _domSanitizer: DomSanitizer) {}

  transform(value: any, args?: any): any {
    return this._domSanitizer.bypassSecurityTrustHtml(this.stylize(value));
  }

  private stylize(text: string): string {
    let stylizedText: string = '';
    if (text && text.length > 0) {
      for (let t of text.split(" ")) {
        if (t.startsWith("@") && t.length>1)
          stylizedText += `<a href="#${t.substring(1)}">${t}</a> `;
        else
          stylizedText += t + " ";
      }
      return stylizedText;
    }
    else return text;
  }

}

@Pipe({
  name: 'linkifytitle'
})
export class LinkifyTitlePipe implements PipeTransform {

  constructor(private _domSanitizer: DomSanitizer) {}

  transform(value: any, args?: any): any {
    return this._domSanitizer.bypassSecurityTrustHtml(this.stylize(value));
  }

  private stylize(text: string): string {
  let stylizedText: string = '';
  if (text && text.length > 0) {
    const regex = /<img.*?src="(.*?)".*?>/g;
    stylizedText = text.replace(regex, '<img style="max-width:45px;border-radius: 1rem;" src="$1">');
    for (let t of stylizedText.split(" ")) {
      if (t.startsWith("@") && t.length>1)
        stylizedText = stylizedText.replace(t, `<a href="#${t.substring(1)}">${t}</a>`);
    }
    return stylizedText;
  }
  else return text;
}

}