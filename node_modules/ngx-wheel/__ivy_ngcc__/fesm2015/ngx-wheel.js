import { __decorate } from 'tslib';
import { EventEmitter, Input, Output, Component, NgModule } from '@angular/core';

import * as ɵngcc0 from '@angular/core';
var TextAlignment;
(function (TextAlignment) {
    TextAlignment["INNER"] = "inner";
    TextAlignment["OUTER"] = "outer";
    TextAlignment["CENTER"] = "center";
})(TextAlignment || (TextAlignment = {}));
var TextOrientation;
(function (TextOrientation) {
    TextOrientation["HORIZONTAL"] = "horizontal";
    TextOrientation["VERTICAL"] = "vertical";
    TextOrientation["CURVED"] = "curved";
})(TextOrientation || (TextOrientation = {}));
let NgxWheelComponent = class NgxWheelComponent {
    constructor() {
        this.onSpinStart = new EventEmitter();
        this.onSpinComplete = new EventEmitter();
        this.completedSpin = false;
        this.isSpinning = false;
    }
    reset() {
        this.wheel.stopAnimation(false);
        this.wheel.rotationAngle = 0;
        this.wheel.ctx.clearRect(0, 0, this.wheel.ctx.canvas.width, this.wheel.ctx.canvas.height);
        this.isSpinning = false;
        this.completedSpin = false;
        this.ngAfterViewInit();
    }
    ngOnInit() {
    }
    spin() {
        console.log("Randomizer = " + this.randomizer);
        if (this.completedSpin || this.isSpinning)
            return;
        this.isSpinning = true;
        this.onSpinStart.emit(null);
        const segmentToLandOn = this.wheel.segments.filter(x => !!x).find(({ id }) => this.idToLandOn === id);
        const segmentTheta = segmentToLandOn.endAngle - segmentToLandOn.startAngle;
        this.wheel.animation.stopAngle = segmentToLandOn.endAngle - ((segmentTheta / 2) + this.randomizer);
        this.wheel.startAnimation();
        setTimeout(() => {
            this.completedSpin = true;
            this.onSpinComplete.emit(null);
        }, this.spinDuration * 1000);
    }

    ngAfterViewInit() {
        const segments = this.items;
        // @ts-ignore
        this.wheel = new Winwheel({            
            numSegments: segments.length,
            segments,
            innerRadius: this.innerRadius || 0,
            outerRadius: (this.height / 2) - 20,
            centerY: (this.height / 2) + 20,
            textOrientation: this.textOrientation,
            textAligment: this.textAlignment,
            animation: {
                type: 'spinToStop',
                duration: this.spinDuration,
                spins: this.spinAmount // The number of complete 360 degree rotations the wheel is to do.
            }
        });
        // @ts-ignore
        TweenMax.ticker.addEventListener("tick", this.drawPointer.bind(this));
    }
    ngOnDestroy() {
        // @ts-ignore
        TweenMax.ticker.removeEventListener("tick");
    }
    drawPointer() {
        let c = this.wheel.ctx;
        // Create pointer.
        if (c) {
            c.save();
            c.lineWidth = 2;
            c.strokeStyle = this.pointerStrokeColor;
            c.fillStyle = this.pointerFillColor;
            c.beginPath();
            c.moveTo((this.width / 2) - 20, 2);
            c.lineTo((this.width / 2) + 20, 2);
            c.lineTo((this.width / 2), 42);
            c.lineTo((this.width / 2) - 20, 2);
            c.stroke();
            c.fill();
            c.restore();
        }
    }
};
NgxWheelComponent.ɵfac = function NgxWheelComponent_Factory(t) { return new (t || NgxWheelComponent)(); };
NgxWheelComponent.ɵcmp = /*@__PURE__*/ ɵngcc0.ɵɵdefineComponent({ type: NgxWheelComponent, selectors: [["ngx-wheel"]], inputs: { randomizer:"randomizer", height: "height", idToLandOn: "idToLandOn", width: "width", items: "items", spinDuration: "spinDuration", spinAmount: "spinAmount", innerRadius: "innerRadius", pointerStrokeColor: "pointerStrokeColor", pointerFillColor: "pointerFillColor", disableSpinOnClick: "disableSpinOnClick", textOrientation: "textOrientation", textAlignment: "textAlignment" }, outputs: { onSpinStart: "onSpinStart", onSpinComplete: "onSpinComplete" }, decls: 2, vars: 2, consts: [["id", "canvas", 3, "width", "height", "click"]], template: function NgxWheelComponent_Template(rf, ctx) { if (rf & 1) {
        ɵngcc0.ɵɵelementStart(0, "canvas", 0);
        ɵngcc0.ɵɵlistener("click", function NgxWheelComponent_Template_canvas_click_0_listener() { return !ctx.disableSpinOnClick && ctx.spin(); });
        ɵngcc0.ɵɵtext(1, " \u00A0\u00A0\u00A0\u00A0Canvas not supported, use another browser. ");
        ɵngcc0.ɵɵelementEnd();
    } if (rf & 2) {
        ɵngcc0.ɵɵproperty("width", ctx.width)("height", ctx.height);
    } }, encapsulation: 2 });
__decorate([
    Input()
], NgxWheelComponent.prototype, "height", void 0);
__decorate([
    Input()
], NgxWheelComponent.prototype, "idToLandOn", void 0);
__decorate([
    Input()
], NgxWheelComponent.prototype, "width", void 0);
__decorate([
    Input()
], NgxWheelComponent.prototype, "items", void 0);
__decorate([
    Input()
], NgxWheelComponent.prototype, "spinDuration", void 0);
__decorate([
    Input()
], NgxWheelComponent.prototype, "spinAmount", void 0);
__decorate([
    Input()
], NgxWheelComponent.prototype, "innerRadius", void 0);
__decorate([
    Input()
], NgxWheelComponent.prototype, "pointerStrokeColor", void 0);
__decorate([
    Input()
], NgxWheelComponent.prototype, "pointerFillColor", void 0);
__decorate([
    Input()
], NgxWheelComponent.prototype, "disableSpinOnClick", void 0);
__decorate([
    Input()
], NgxWheelComponent.prototype, "textOrientation", void 0);
__decorate([
    Input()
], NgxWheelComponent.prototype, "textAlignment", void 0);
__decorate([
    Output()
], NgxWheelComponent.prototype, "onSpinStart", void 0);
__decorate([
    Output()
], NgxWheelComponent.prototype, "onSpinComplete", void 0);

let NgxWheelModule = class NgxWheelModule {
};
NgxWheelModule.ɵfac = function NgxWheelModule_Factory(t) { return new (t || NgxWheelModule)(); };
NgxWheelModule.ɵmod = /*@__PURE__*/ ɵngcc0.ɵɵdefineNgModule({ type: NgxWheelModule });
NgxWheelModule.ɵinj = /*@__PURE__*/ ɵngcc0.ɵɵdefineInjector({ imports: [[]] });
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgxWheelComponent, [{
        type: Component,
        args: [{
                selector: 'ngx-wheel',
                template: `
    <canvas (click)='!disableSpinOnClick && spin()' id='canvas' [width]='width' [height]='height'>
        Canvas not supported, use another browser.
    </canvas>
`
            }]
    }], function () { return []; }, { onSpinStart: [{
            type: Output
        }], onSpinComplete: [{
            type: Output
        }], height: [{
            type: Input
        }], idToLandOn: [{
            type: Input
        }], width: [{
            type: Input
        }], items: [{
            type: Input
        }], spinDuration: [{
            type: Input
        }], spinAmount: [{
            type: Input
        }], innerRadius: [{
            type: Input
        }], pointerStrokeColor: [{
            type: Input
        }], pointerFillColor: [{
            type: Input
        }], disableSpinOnClick: [{
            type: Input
        }], textOrientation: [{
            type: Input
        }], textAlignment: [{
            type: Input
        }] }); })();
(function () { (typeof ngDevMode === "undefined" || ngDevMode) && ɵngcc0.ɵsetClassMetadata(NgxWheelModule, [{
        type: NgModule,
        args: [{
                declarations: [NgxWheelComponent],
                imports: [],
                exports: [NgxWheelComponent]
            }]
    }], null, null); })();
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && ɵngcc0.ɵɵsetNgModuleScope(NgxWheelModule, { declarations: [NgxWheelComponent], exports: [NgxWheelComponent] }); })();

/*
 * Public API Surface of ngx-wheel
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxWheelComponent, NgxWheelModule, TextAlignment, TextOrientation };

//# sourceMappingURL=ngx-wheel.js.map