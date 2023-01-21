import { Component, OnInit } from '@angular/core';
import { CustomTheme } from 'src/assets/database/Models/CustomTheme';
import { Settings } from 'src/assets/database/Models/databaseStructure';
import { IntervalRequestService } from 'src/services/interval-request.service';
import { saveAs } from 'file-saver';
import { FileUploadService } from 'src/services/file-upload.service';

@Component({
  selector: 'app-custom-theme-editor',
  templateUrl: './custom-theme-editor.component.html',
  styleUrls: ['./custom-theme-editor.component.scss']
})
export class CustomThemeEditorComponent implements OnInit {
  public Theme: CustomTheme = new CustomTheme();
  private themeWrapper:any = document.querySelector('html');
  // Variable to store shortLink from api response
  shortLink: string = "";
  loading: boolean = false; // Flag variable
  file: File = null; // Variable to store file
  
  // On file Select
  onChange(event:Event) {
    this.file = (<HTMLInputElement>event.target).files[0];
  }
  
  select(event:any,toChange:any)
  {
    console.log(event);
    
    this.themeWrapper.style.setProperty('--' + toChange,     event.currentValue.hex);
  }
  // OnClick of button Upload
  onUpload() {
    this.loading = !this.loading;
    console.log(this.file);
    this.fileUploadService.upload(this.file).subscribe(
      (event: any) => {
        if (typeof (event) === 'object') {
          
          // Short link via api response
          this.shortLink = event.link;
          
          this.loading = false; // Flag variable 
        }
      }
      );
    }
    
    //private 
    constructor(private intervalRequest: IntervalRequestService,private fileUploadService: FileUploadService) {
      this.intervalRequest.apiGetRequest(Settings.CustomTheme).subscribe((data:any) =>{	
        this.Theme = data;      
        this.doChange();     
      },()=>{
        
      })
      this.themeWrapper.style.setProperty('--fit-content' ,'100%'); 
    }
    doChange()
    {
      console.log("Changing");
      
      this.themeWrapper.style.setProperty('--textOutlineColor',     this.Theme.Colors.textOutlineColor);
      this.themeWrapper.style.setProperty('--backgroundColor',     this.Theme.Colors.backgroundColor);
      this.themeWrapper.style.setProperty('--textColor',     this.Theme.Colors.textColor);
      this.themeWrapper.style.setProperty('--bordersColor',     this.Theme.Colors.bordersColor);
      this.themeWrapper.style.setProperty('--bracketBackColor',     this.Theme.Colors.bracketBackColor);
      this.themeWrapper.style.setProperty('--iconsBackColor',     this.Theme.Colors.iconsBackColor);
      this.themeWrapper.style.setProperty('--iconsForeColor',     this.Theme.Colors.iconsForeColor);
      this.themeWrapper.style.setProperty('--borderRadiusMain',     this.Theme.Options.borderSize + "px");
      this.themeWrapper.style.setProperty('--borderRadiusInner',     this.Theme.Options.borderRadius + "px");
      
      this.themeWrapper.style.setProperty('--borderMainBorderColor',     this.Theme.Options.borderMainBorderColor);
      
      this.themeWrapper.style.setProperty('--color1',     this.Theme.Options.animatedBorderColors.color1);
      this.themeWrapper.style.setProperty('--color2',     this.Theme.Options.animatedBorderColors.color2);
      this.themeWrapper.style.setProperty('--color3',     this.Theme.Options.animatedBorderColors.color3);
      this.themeWrapper.style.setProperty('--color4',     this.Theme.Options.animatedBorderColors.color4);
      this.themeWrapper.style.setProperty('--color5',     this.Theme.Options.animatedBorderColors.color5);
      this.themeWrapper.style.setProperty('--color6',     this.Theme.Options.animatedBorderColors.color6);
      this.themeWrapper.style.setProperty('--color7',     this.Theme.Options.animatedBorderColors.color7);


      this.themeWrapper.style.setProperty('--textOutlineSize',     this.Theme.Options.textOutlineSize + "px");
      this.themeWrapper.style.setProperty('--textSize',     this.Theme.Options.textSize + "px");
      this.themeWrapper.style.setProperty('--textWeight',     this.Theme.Options.textWeight);
      
      
    }
    
    saveTheme(){
      
      var str = JSON.stringify(this.Theme); 
      console.log(str); 
      this.intervalRequest.apiSetCustomTheme(Settings.CustomTheme,str).subscribe(response=>{
        console.log(response);  
      });  
    }
    
    ngOnInit(): void {
      this.themeWrapper.style.setProperty('--overflow',     "visible");
    } 
    setTransparentAll()
    {
      this.Theme.Colors.backgroundColor = '#ffffff00';
      this.Theme.Colors.iconsBackColor = '#ffffff00';
      this.Theme.Colors.bracketBackColor = '#ffffff00';
      this.Theme.Colors.iconsForeColor = '#ffffff00';
      this.Theme.Colors.textColor = '#000000ff';
      this.Theme.Colors.bordersColor = '#000000ff';
      
      this.Theme.Options.animatedBorderColors.color1 = '#ffffff00';
      this.Theme.Options.animatedBorderColors.color2 = '#ffffff00';
      this.Theme.Options.animatedBorderColors.color3 = '#ffffff00';
      this.Theme.Options.animatedBorderColors.color4 = '#ffffff00';
      this.Theme.Options.animatedBorderColors.color5 = '#ffffff00';
      this.Theme.Options.animatedBorderColors.color6 = '#ffffff00';
      this.Theme.Options.animatedBorderColors.color7 = '#ffffff00';
      this.doChange();
      this.saveTheme();
    }
  }
  
  