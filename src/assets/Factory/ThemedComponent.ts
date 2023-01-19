import { interval } from "rxjs";
import { IntervalRequestService } from "src/services/interval-request.service";
import { CustomTheme } from "../database/Models/CustomTheme";
import { Settings } from "../database/Models/databaseStructure";
import { SiteSettings } from "../SiteSettings";

export class ThemedComponent{    
    currencyCode = SiteSettings.currency;    
    timer$ = interval(5000);
    IsAnimatedBorder = false;
    private themeWrapper:any = document.querySelector('html');
    Theme: CustomTheme;
    serverRequest:Function = null;
    
    constructor(public intervalRequest: IntervalRequestService) {
        this.intervalRequest.apiGetRequest(Settings.CustomTheme).subscribe((data:any) =>{	
            this.Theme = data;  
            this.SetTheme();
        });        
        this.intervalRequest.apiGetRequest(Settings.CustomTheme).subscribe((data:any) =>{	
            this.IsAnimatedBorder = data.Options.animatedBorder;    
        });
        
        
        this.timer$.subscribe(()=>{		  
            if(this.serverRequest != null)
            {	
                this.serverRequest(); 
            }                
        });
    }   
    
    SetTheme() {
        this.themeWrapper.style.setProperty('--textOutlineSize',     this.Theme.Options.textOutlineSize + "px");
        this.themeWrapper.style.setProperty('--textSize',     this.Theme.Options.textSize + "px");
        this.themeWrapper.style.setProperty('--textWeight',     this.Theme.Options.textWeight);
        
        this.themeWrapper.style.setProperty('--textOutlineColor',     this.Theme.Colors.textOutlineColor);
        this.themeWrapper.style.setProperty('--backgroundColor',     this.Theme.Colors.backgroundColor);
        this.themeWrapper.style.setProperty('--textColor',     this.Theme.Colors.textColor);
        
        this.themeWrapper.style.setProperty('--animationThrow', (-1 * this.getRandomInt(9100,9240)) + "px");
        this.themeWrapper.style.setProperty('--backgroundColor',     this.Theme.Colors.backgroundColor);
        this.themeWrapper.style.setProperty('--textColor',     this.Theme.Colors.textColor);
        this.themeWrapper.style.setProperty('--bordersColor',     this.Theme.Colors.bordersColor);
        this.themeWrapper.style.setProperty('--bracketBackColor',     this.Theme.Colors.bracketBackColor);
        this.themeWrapper.style.setProperty('--iconsBackColor',     this.Theme.Colors.iconsBackColor);
        this.themeWrapper.style.setProperty('--iconsForeColor',     this.Theme.Colors.iconsForeColor);
        this.themeWrapper.style.setProperty('--borderRadiusMain',     this.Theme.Options.borderSize + "px");
        this.themeWrapper.style.setProperty('--borderRadiusInner',     this.Theme.Options.borderRadius + "px");
        
        this.themeWrapper.style.setProperty('--borderMainBorderColor',     this.Theme.Options.borderMainBorderColor);
        
        if(this.Theme.Options.animatedBorder == true)
        {
            this.themeWrapper.style.setProperty('--color1',     this.Theme.Options.animatedBorderColors.color1);
            this.themeWrapper.style.setProperty('--color2',     this.Theme.Options.animatedBorderColors.color2);
            this.themeWrapper.style.setProperty('--color3',     this.Theme.Options.animatedBorderColors.color3);
            this.themeWrapper.style.setProperty('--color4',     this.Theme.Options.animatedBorderColors.color4);
            this.themeWrapper.style.setProperty('--color5',     this.Theme.Options.animatedBorderColors.color5);
            this.themeWrapper.style.setProperty('--color6',     this.Theme.Options.animatedBorderColors.color6);
            this.themeWrapper.style.setProperty('--color7',     this.Theme.Options.animatedBorderColors.color7);
        }
        else{
            
        }
    }
    
    getRandomInt(min:number, max:number) { // min and max included 
        return Math.floor(Math.random() * (max - min + 1) + min)
    }
}