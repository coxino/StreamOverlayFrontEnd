export class CustomTheme{
    public Options:Options = new Options();
    public Colors:Colors = new Colors();
}

export class Colors{
    public backgroundColor = "#000";
    public textColor = "#fff";
    public bordersColor = "#ff87";
    public bracketBackColor = "#892";
    public iconsBackColor = "#f38";
    public iconsForeColor = "#1589";    
    public textOutlineColor = "#1589";
}

export class Options{
    public textSize = 22;
    public textWeight = 100;

    public textOutlineSize = 1;   
    
    
    public enableBorders = true;  
    public borderSize = 4; 
    public borderRadius = 4; 
    public animatedBorder = true;
    public borderMainBorderColor = '#008cff';
    public animatedBorderColors:LinearGradient = new LinearGradient();


}

export class Gradient{
    public isStatic = false;
    public colors:string[] = [];
}

export class LinearGradient
{
    public color1 ="#fff";
    public color2 ="#fff";
    public color3 ="#fff";
    public color4 ="#fff";
    public color5 ="#fff";
    public color6 ="#fff";
    public color7 ="#fff";
}

export class DesignStyle{
    public static bonusHuntStyle:string = "0";
    public static tournamentStyle:string = "0";
    public static tournamentStyleBraket:string = "0";
}