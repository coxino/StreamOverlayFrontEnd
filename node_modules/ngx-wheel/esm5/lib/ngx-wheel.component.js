import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
export var TextAlignment;
(function (TextAlignment) {
    TextAlignment["INNER"] = "inner";
    TextAlignment["OUTER"] = "outer";
    TextAlignment["CENTER"] = "center";
})(TextAlignment || (TextAlignment = {}));
export var TextOrientation;
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
        this.wheel.animation.stopAngle = segmentToLandOn.endAngle - (segmentTheta /2);
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
export { NgxWheelComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXdoZWVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC13aGVlbC8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtd2hlZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBaUIsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU05RixNQUFNLENBQU4sSUFBWSxhQUlYO0FBSkQsV0FBWSxhQUFhO0lBQ3ZCLGdDQUFlLENBQUE7SUFDZixnQ0FBZSxDQUFBO0lBQ2Ysa0NBQWlCLENBQUE7QUFDbkIsQ0FBQyxFQUpXLGFBQWEsS0FBYixhQUFhLFFBSXhCO0FBRUQsTUFBTSxDQUFOLElBQVksZUFJWDtBQUpELFdBQVksZUFBZTtJQUN6Qiw0Q0FBeUIsQ0FBQTtJQUN6Qix3Q0FBcUIsQ0FBQTtJQUNyQixvQ0FBaUIsQ0FBQTtBQUNuQixDQUFDLEVBSlcsZUFBZSxLQUFmLGVBQWUsUUFJMUI7QUFZRDtJQUVFO1FBZ0JVLGdCQUFXLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDcEQsbUJBQWMsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUdqRSxrQkFBYSxHQUFZLEtBQUssQ0FBQztRQUMvQixlQUFVLEdBQVksS0FBSyxDQUFDO0lBckJaLENBQUM7SUF1QmpCLGlDQUFLLEdBQUw7UUFDRSxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsS0FBSyxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFD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QUU7MERBQXFEO0lBQ3BEO1FBQVQsTUFBTSxFQUFFOzZEQUF3RDtJQW5CdEQsaUJBQWlCO1FBVjdCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxXQUFXO1lBQ3JCLFFBQVEsRUFBRSwrTEFJWDtTQUdBLENBQUM7T0FDVyxpQkFBaUIsQ0ErRjdCO0lBQUQsd0JBQUM7Q0FBQSxBQS9GRCxJQStGQztTQS9GWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEFmdGVyVmlld0luaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5leHBvcnQgaW50ZXJmYWNlIEl0ZW0ge1xuICB0ZXh0OiBzdHJpbmcsXG4gIGZpbGxTdHlsZTogc3RyaW5nLFxuICBpZDogYW55LFxufVxuZXhwb3J0IGVudW0gVGV4dEFsaWdubWVudCB7XG4gIElOTkVSID0gJ2lubmVyJyxcbiAgT1VURVIgPSAnb3V0ZXInLFxuICBDRU5URVIgPSAnY2VudGVyJyxcbn1cblxuZXhwb3J0IGVudW0gVGV4dE9yaWVudGF0aW9uIHtcbiAgSE9SSVpPTlRBTCA9ICdob3Jpem9udGFsJyxcbiAgVkVSVElDQUwgPSAndmVydGljYWwnLFxuICBDVVJWRUQgPSAnY3VydmVkJyxcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LXdoZWVsJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8Y2FudmFzIChjbGljayk9JyFkaXNhYmxlU3Bpbk9uQ2xpY2sgJiYgc3BpbigpJyBpZD0nY2FudmFzJyBbd2lkdGhdPSd3aWR0aCcgW2hlaWdodF09J2hlaWdodCc+XG4gICAgwqDCoMKgwqBDYW52YXMgbm90IHN1cHBvcnRlZCwgdXNlIGFub3RoZXIgYnJvd3Nlci5cbiAgICA8L2NhbnZhcz5cbmAsXG4gIHN0eWxlczogW1xuICBdXG59KVxuZXhwb3J0IGNsYXNzIE5neFdoZWVsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIEBJbnB1dCgpIGhlaWdodDogbnVtYmVyO1xuICBASW5wdXQoKSBpZFRvTGFuZE9uOiBhbnk7XG4gIEBJbnB1dCgpIHdpZHRoOiBudW1iZXI7XG4gIEBJbnB1dCgpIGl0ZW1zOiBJdGVtW107XG4gIEBJbnB1dCgpIHNwaW5EdXJhdGlvbjogbnVtYmVyO1xuICBASW5wdXQoKSBzcGluQW1vdW50OiBudW1iZXI7XG4gIEBJbnB1dCgpIGlubmVyUmFkaXVzOiBudW1iZXI7XG4gIEBJbnB1dCgpIHBvaW50ZXJTdHJva2VDb2xvcjogc3RyaW5nO1xuICBASW5wdXQoKSBwb2ludGVyRmlsbENvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGRpc2FibGVTcGluT25DbGljazogYm9vbGVhbjtcbiAgQElucHV0KCkgdGV4dE9yaWVudGF0aW9uOiBUZXh0T3JpZW50YXRpb25cbiAgQElucHV0KCkgdGV4dEFsaWdubWVudDogVGV4dEFsaWdubWVudFxuICBcblxuICBAT3V0cHV0KCkgb25TcGluU3RhcnQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgb25TcGluQ29tcGxldGU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHdoZWVsOiBhbnlcbiAgY29tcGxldGVkU3BpbjogYm9vbGVhbiA9IGZhbHNlO1xuICBpc1NwaW5uaW5nOiBib29sZWFuID0gZmFsc2U7XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy53aGVlbC5zdG9wQW5pbWF0aW9uKGZhbHNlKTtcbiAgICB0aGlzLndoZWVsLnJvdGF0aW9uQW5nbGUgPSAwO1xuICAgIHRoaXMud2hlZWwuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLndoZWVsLmN0eC5jYW52YXMud2lkdGgsIHRoaXMud2hlZWwuY3R4LmNhbnZhcy5oZWlnaHQpO1xuICAgIHRoaXMuaXNTcGlubmluZyA9IGZhbHNlIFxuICAgIHRoaXMuY29tcGxldGVkU3BpbiA9IGZhbHNlIFxuICAgIHRoaXMubmdBZnRlclZpZXdJbml0KClcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbiAgc3BpbigpIHtcbiAgICBpZiAodGhpcy5jb21wbGV0ZWRTcGluIHx8IHRoaXMuaXNTcGlubmluZykgcmV0dXJuXG4gICAgdGhpcy5pc1NwaW5uaW5nID0gdHJ1ZVxuICAgIHRoaXMub25TcGluU3RhcnQuZW1pdChudWxsKVxuICAgIGNvbnN0IHNlZ21lbnRUb0xhbmRPbiA9IHRoaXMud2hlZWwuc2VnbWVudHMuZmlsdGVyKHggPT4gISF4KS5maW5kKCh7IGlkIH0pID0+IHRoaXMuaWRUb0xhbmRPbiA9PT0gaWQpXG4gICAgY29uc3Qgc2VnbWVudFRoZXRhID0gc2VnbWVudFRvTGFuZE9uLmVuZEFuZ2xlIC0gc2VnbWVudFRvTGFuZE9uLnN0YXJ0QW5nbGVcbiAgICB0aGlzLndoZWVsLmFuaW1hdGlvbi5zdG9wQW5nbGUgPSBzZWdtZW50VG9MYW5kT24uZW5kQW5nbGUgLSAoc2VnbWVudFRoZXRhIC8gNCk7XG4gICAgdGhpcy53aGVlbC5zdGFydEFuaW1hdGlvbigpXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmNvbXBsZXRlZFNwaW4gPSB0cnVlXG4gICAgICB0aGlzLm9uU3BpbkNvbXBsZXRlLmVtaXQobnVsbClcbiAgICB9LCB0aGlzLnNwaW5EdXJhdGlvbiAqIDEwMDApXG4gIH1cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGNvbnN0IHNlZ21lbnRzID0gdGhpcy5pdGVtc1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICB0aGlzLndoZWVsID0gbmV3IFdpbndoZWVsKHtcbiAgICAgIG51bVNlZ21lbnRzOiBzZWdtZW50cy5sZW5ndGgsXG4gICAgICBzZWdtZW50cyxcbiAgICAgIGlubmVyUmFkaXVzOiB0aGlzLmlubmVyUmFkaXVzIHx8IDAsXG4gICAgICBvdXRlclJhZGl1czogKHRoaXMuaGVpZ2h0IC8gMikgLSAyMCxcbiAgICAgIGNlbnRlclk6ICh0aGlzLmhlaWdodCAvIDIpICsgMjAsXG4gICAgICB0ZXh0T3JpZW50YXRpb24gOiB0aGlzLnRleHRPcmllbnRhdGlvbixcbiAgICAgIHRleHRBbGlnbWVudCA6IHRoaXMudGV4dEFsaWdubWVudCxcbiAgICAgIGFuaW1hdGlvbjpcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ3NwaW5Ub1N0b3AnLMKgIC8vIFR5cGUgb2YgYW5pbWF0aW9uLlxuICAgICAgICBkdXJhdGlvbjogdGhpcy5zcGluRHVyYXRpb24sIC8vIEhvdyBsb25nIHRoZSBhbmltYXRpb24gaXMgdG8gdGFrZSBpbiBzZWNvbmRzLlxuICAgICAgICBzcGluczogdGhpcy5zcGluQW1vdW50wqAgLy8gVGhlIG51bWJlciBvZiBjb21wbGV0ZSAzNjAgZGVncmVlIHJvdGF0aW9ucyB0aGUgd2hlZWwgaXMgdG8gZG8uXG4gICAgICB9XG4gICAgfSlcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgVHdlZW5NYXgudGlja2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJ0aWNrXCIsIHRoaXMuZHJhd1BvaW50ZXIuYmluZCh0aGlzKSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgVHdlZW5NYXgudGlja2VyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0aWNrXCIpXG4gIH1cblxuICBkcmF3UG9pbnRlcigpe1xuICAgIGxldCBjID0gdGhpcy53aGVlbC5jdHg7XG4gICAgLy8gQ3JlYXRlIHBvaW50ZXIuXG4gICAgaWYgKGMpIHtcbiAgICAgIGMuc2F2ZSgpO1xuICAgICAgYy5saW5lV2lkdGggPSAyO1xuICAgICAgYy5zdHJva2VTdHlsZSA9IHRoaXMucG9pbnRlclN0cm9rZUNvbG9yO1xuICAgICAgYy5maWxsU3R5bGUgPSB0aGlzLnBvaW50ZXJGaWxsQ29sb3I7XG4gICAgICBjLmJlZ2luUGF0aCgpO1xuICAgICAgYy5tb3ZlVG8oKHRoaXMud2lkdGggLyAyKSAtIDIwLCAyKTtcbiAgICAgIGMubGluZVRvKCh0aGlzLndpZHRoIC8gMikgKyAyMCwgMik7XG4gICAgICBjLmxpbmVUbygodGhpcy53aWR0aCAvIDIpLCA0Mik7XG4gICAgICBjLmxpbmVUbygodGhpcy53aWR0aCAvIDIpIC0gMjAsIDIpO1xuICAgICAgYy5zdHJva2UoKTtcbiAgICAgIGMuZmlsbCgpO1xuICAgICAgYy5yZXN0b3JlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=