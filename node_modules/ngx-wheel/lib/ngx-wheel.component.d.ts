import { OnInit, AfterViewInit, EventEmitter } from '@angular/core';
import * as ɵngcc0 from '@angular/core';
export interface Item {
    text: string;
    fillStyle: string;
    id: any;
    prize:any;
}
export declare enum TextAlignment {
    INNER = "inner",
    OUTER = "outer",
    CENTER = "center"
}
export declare enum TextOrientation {
    HORIZONTAL = "horizontal",
    VERTICAL = "vertical",
    CURVED = "curved"
}
export declare class NgxWheelComponent implements OnInit, AfterViewInit {
    constructor();
    randomizer:number;
    height: number;
    idToLandOn: any;
    width: number;
    items: Item[];
    spinDuration: number;
    spinAmount: number;
    innerRadius: number;
    pointerStrokeColor: string;
    pointerFillColor: string;
    disableSpinOnClick: boolean;
    textOrientation: TextOrientation;
    textAlignment: TextAlignment;
    onSpinStart: EventEmitter<any>;
    onSpinComplete: EventEmitter<any>;
    wheel: any;
    completedSpin: boolean;
    isSpinning: boolean;
    reset(): void;
    ngOnInit(): void;
    spin(): void;
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    drawPointer(): void;
    static ɵfac: ɵngcc0.ɵɵFactoryDeclaration<NgxWheelComponent, never>;
    static ɵcmp: ɵngcc0.ɵɵComponentDeclaration<NgxWheelComponent, "ngx-wheel", never, {"randomizer":"randomizer", "height": "height"; "idToLandOn": "idToLandOn"; "width": "width"; "items": "items"; "spinDuration": "spinDuration"; "spinAmount": "spinAmount"; "innerRadius": "innerRadius"; "pointerStrokeColor": "pointerStrokeColor"; "pointerFillColor": "pointerFillColor"; "disableSpinOnClick": "disableSpinOnClick"; "textOrientation": "textOrientation"; "textAlignment": "textAlignment"; }, { "onSpinStart": "onSpinStart"; "onSpinComplete": "onSpinComplete"; }, never, never>;
}

//# sourceMappingURL=ngx-wheel.component.d.ts.map