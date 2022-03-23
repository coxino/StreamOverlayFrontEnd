import { __decorate } from 'tslib';
import { EventEmitter, Input, Output, Component, NgModule } from '@angular/core';

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
var NgxWheelComponent = /** @class */ (function () {
    function NgxWheelComponent() {
        this.onSpinStart = new EventEmitter();
        this.onSpinComplete = new EventEmitter();
        this.completedSpin = false;
        this.isSpinning = false;
    }
    NgxWheelComponent.prototype.reset = function () {
        this.wheel.stopAnimation(false);
        this.wheel.rotationAngle = 0;
        this.wheel.ctx.clearRect(0, 0, this.wheel.ctx.canvas.width, this.wheel.ctx.canvas.height);
        this.isSpinning = false;
        this.completedSpin = false;
        this.ngAfterViewInit();
    };
    NgxWheelComponent.prototype.ngOnInit = function () {
    };
    NgxWheelComponent.prototype.spin = function () {
        var _this = this;
        if (this.completedSpin || this.isSpinning)
            return;
        this.isSpinning = true;
        this.onSpinStart.emit(null);
        var segmentToLandOn = this.wheel.segments.filter(function (x) { return !!x; }).find(function (_a) {
            var id = _a.id;
            return _this.idToLandOn === id;
        });
        var segmentTheta = segmentToLandOn.endAngle - segmentToLandOn.startAngle;
        this.wheel.animation.stopAngle = segmentToLandOn.endAngle - (segmentTheta / 2);
        this.wheel.startAnimation();
        setTimeout(function () {
            _this.completedSpin = true;
            _this.onSpinComplete.emit(null);
        }, this.spinDuration * 1000);
    };
    NgxWheelComponent.prototype.ngAfterViewInit = function () {
        var segments = this.items;
        // @ts-ignore
        this.wheel = new Winwheel({
            numSegments: segments.length,
            segments: segments,
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
    };
    NgxWheelComponent.prototype.ngOnDestroy = function () {
        // @ts-ignore
        TweenMax.ticker.removeEventListener("tick");
    };
    NgxWheelComponent.prototype.drawPointer = function () {
        var c = this.wheel.ctx;
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
    };
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
    NgxWheelComponent = __decorate([
        Component({
            selector: 'ngx-wheel',
            template: "\n    <canvas (click)='!disableSpinOnClick && spin()' id='canvas' [width]='width' [height]='height'>\n    \u00A0\u00A0\u00A0\u00A0Canvas not supported, use another browser.\n    </canvas>\n"
        })
    ], NgxWheelComponent);
    return NgxWheelComponent;
}());

var NgxWheelModule = /** @class */ (function () {
    function NgxWheelModule() {
    }
    NgxWheelModule = __decorate([
        NgModule({
            declarations: [NgxWheelComponent],
            imports: [],
            exports: [NgxWheelComponent]
        })
    ], NgxWheelModule);
    return NgxWheelModule;
}());

/*
 * Public API Surface of ngx-wheel
 */

/**
 * Generated bundle index. Do not edit.
 */

export { NgxWheelComponent, NgxWheelModule, TextAlignment, TextOrientation };
//# sourceMappingURL=ngx-wheel.js.map
