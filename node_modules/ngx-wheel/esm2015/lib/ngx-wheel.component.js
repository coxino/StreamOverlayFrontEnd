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
        if (this.completedSpin || this.isSpinning)
            return;
        this.isSpinning = true;
        this.onSpinStart.emit(null);
        const segmentToLandOn = this.wheel.segments.filter(x => !!x).find(({ id }) => this.idToLandOn === id);
        const segmentTheta = segmentToLandOn.endAngle - segmentToLandOn.startAngle;
        this.wheel.animation.stopAngle = segmentToLandOn.endAngle - (segmentTheta / 4);
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
        template: `
    <canvas (click)='!disableSpinOnClick && spin()' id='canvas' [width]='width' [height]='height'>
        Canvas not supported, use another browser.
    </canvas>
`
    })
], NgxWheelComponent);
export { NgxWheelComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXdoZWVsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC13aGVlbC8iLCJzb3VyY2VzIjpbImxpYi9uZ3gtd2hlZWwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLEtBQUssRUFBaUIsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU05RixNQUFNLENBQU4sSUFBWSxhQUlYO0FBSkQsV0FBWSxhQUFhO0lBQ3ZCLGdDQUFlLENBQUE7SUFDZixnQ0FBZSxDQUFBO0lBQ2Ysa0NBQWlCLENBQUE7QUFDbkIsQ0FBQyxFQUpXLGFBQWEsS0FBYixhQUFhLFFBSXhCO0FBRUQsTUFBTSxDQUFOLElBQVksZUFJWDtBQUpELFdBQVksZUFBZTtJQUN6Qiw0Q0FBeUIsQ0FBQTtJQUN6Qix3Q0FBcUIsQ0FBQTtJQUNyQixvQ0FBaUIsQ0FBQTtBQUNuQixDQUFDLEVBSlcsZUFBZSxLQUFmLGVBQWUsUUFJMUI7QUFZRCxJQUFhLGlCQUFpQixHQUE5QixNQUFhLGlCQUFpQjtJQUU1QjtRQWdCVSxnQkFBVyxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3BELG1CQUFjLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFHakUsa0JBQWEsR0FBWSxLQUFLLENBQUM7UUFDL0IsZUFBVSxHQUFZLEtBQUssQ0FBQztJQXJCWixDQUFDO0lBdUJqQixLQUFLO1FBQ0gsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDO1FBQzdCLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFH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VCxNQUFNLEVBQUU7eURBQXdEO0FBbkJ0RCxpQkFBaUI7SUFWN0IsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFdBQVc7UUFDckIsUUFBUSxFQUFFOzs7O0NBSVg7S0FHQSxDQUFDO0dBQ1csaUJBQWlCLENBK0Y3QjtTQS9GWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEFmdGVyVmlld0luaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5leHBvcnQgaW50ZXJmYWNlIEl0ZW0ge1xuICB0ZXh0OiBzdHJpbmcsXG4gIGZpbGxTdHlsZTogc3RyaW5nLFxuICBpZDogYW55LFxufVxuZXhwb3J0IGVudW0gVGV4dEFsaWdubWVudCB7XG4gIElOTkVSID0gJ2lubmVyJyxcbiAgT1VURVIgPSAnb3V0ZXInLFxuICBDRU5URVIgPSAnY2VudGVyJyxcbn1cblxuZXhwb3J0IGVudW0gVGV4dE9yaWVudGF0aW9uIHtcbiAgSE9SSVpPTlRBTCA9ICdob3Jpem9udGFsJyxcbiAgVkVSVElDQUwgPSAndmVydGljYWwnLFxuICBDVVJWRUQgPSAnY3VydmVkJyxcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmd4LXdoZWVsJyxcbiAgdGVtcGxhdGU6IGBcbiAgICA8Y2FudmFzIChjbGljayk9JyFkaXNhYmxlU3Bpbk9uQ2xpY2sgJiYgc3BpbigpJyBpZD0nY2FudmFzJyBbd2lkdGhdPSd3aWR0aCcgW2hlaWdodF09J2hlaWdodCc+XG4gICAgwqDCoMKgwqBDYW52YXMgbm90IHN1cHBvcnRlZCwgdXNlIGFub3RoZXIgYnJvd3Nlci5cbiAgICA8L2NhbnZhcz5cbmAsXG4gIHN0eWxlczogW1xuICBdXG59KVxuZXhwb3J0IGNsYXNzIE5neFdoZWVsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0IHtcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIEBJbnB1dCgpIGhlaWdodDogbnVtYmVyO1xuICBASW5wdXQoKSBpZFRvTGFuZE9uOiBhbnk7XG4gIEBJbnB1dCgpIHdpZHRoOiBudW1iZXI7XG4gIEBJbnB1dCgpIGl0ZW1zOiBJdGVtW107XG4gIEBJbnB1dCgpIHNwaW5EdXJhdGlvbjogbnVtYmVyO1xuICBASW5wdXQoKSBzcGluQW1vdW50OiBudW1iZXI7XG4gIEBJbnB1dCgpIGlubmVyUmFkaXVzOiBudW1iZXI7XG4gIEBJbnB1dCgpIHBvaW50ZXJTdHJva2VDb2xvcjogc3RyaW5nO1xuICBASW5wdXQoKSBwb2ludGVyRmlsbENvbG9yOiBzdHJpbmc7XG4gIEBJbnB1dCgpIGRpc2FibGVTcGluT25DbGljazogYm9vbGVhbjtcbiAgQElucHV0KCkgdGV4dE9yaWVudGF0aW9uOiBUZXh0T3JpZW50YXRpb25cbiAgQElucHV0KCkgdGV4dEFsaWdubWVudDogVGV4dEFsaWdubWVudFxuICBcblxuICBAT3V0cHV0KCkgb25TcGluU3RhcnQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgb25TcGluQ29tcGxldGU6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuXG4gIHdoZWVsOiBhbnlcbiAgY29tcGxldGVkU3BpbjogYm9vbGVhbiA9IGZhbHNlO1xuICBpc1NwaW5uaW5nOiBib29sZWFuID0gZmFsc2U7XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy53aGVlbC5zdG9wQW5pbWF0aW9uKGZhbHNlKTtcbiAgICB0aGlzLndoZWVsLnJvdGF0aW9uQW5nbGUgPSAwO1xuICAgIHRoaXMud2hlZWwuY3R4LmNsZWFyUmVjdCgwLCAwLCB0aGlzLndoZWVsLmN0eC5jYW52YXMud2lkdGgsIHRoaXMud2hlZWwuY3R4LmNhbnZhcy5oZWlnaHQpO1xuICAgIHRoaXMuaXNTcGlubmluZyA9IGZhbHNlIFxuICAgIHRoaXMuY29tcGxldGVkU3BpbiA9IGZhbHNlIFxuICAgIHRoaXMubmdBZnRlclZpZXdJbml0KClcbiAgfVxuXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICB9XG5cbiAgc3BpbigpIHtcbiAgICBpZiAodGhpcy5jb21wbGV0ZWRTcGluIHx8IHRoaXMuaXNTcGlubmluZykgcmV0dXJuXG4gICAgdGhpcy5pc1NwaW5uaW5nID0gdHJ1ZVxuICAgIHRoaXMub25TcGluU3RhcnQuZW1pdChudWxsKVxuICAgIGNvbnN0IHNlZ21lbnRUb0xhbmRPbiA9IHRoaXMud2hlZWwuc2VnbWVudHMuZmlsdGVyKHggPT4gISF4KS5maW5kKCh7IGlkIH0pID0+IHRoaXMuaWRUb0xhbmRPbiA9PT0gaWQpXG4gICAgY29uc3Qgc2VnbWVudFRoZXRhID0gc2VnbWVudFRvTGFuZE9uLmVuZEFuZ2xlIC0gc2VnbWVudFRvTGFuZE9uLnN0YXJ0QW5nbGVcbiAgICB0aGlzLndoZWVsLmFuaW1hdGlvbi5zdG9wQW5nbGUgPSBzZWdtZW50VG9MYW5kT24uZW5kQW5nbGUgLSAoc2VnbWVudFRoZXRhIC8gNCk7XG4gICAgdGhpcy53aGVlbC5zdGFydEFuaW1hdGlvbigpXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0aGlzLmNvbXBsZXRlZFNwaW4gPSB0cnVlXG4gICAgICB0aGlzLm9uU3BpbkNvbXBsZXRlLmVtaXQobnVsbClcbiAgICB9LCB0aGlzLnNwaW5EdXJhdGlvbiAqIDEwMDApXG4gIH1cbiAgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIGNvbnN0IHNlZ21lbnRzID0gdGhpcy5pdGVtc1xuICAgIC8vIEB0cy1pZ25vcmVcbiAgICB0aGlzLndoZWVsID0gbmV3IFdpbndoZWVsKHtcbiAgICAgIG51bVNlZ21lbnRzOiBzZWdtZW50cy5sZW5ndGgsXG4gICAgICBzZWdtZW50cyxcbiAgICAgIGlubmVyUmFkaXVzOiB0aGlzLmlubmVyUmFkaXVzIHx8IDAsXG4gICAgICBvdXRlclJhZGl1czogKHRoaXMuaGVpZ2h0IC8gMikgLSAyMCxcbiAgICAgIGNlbnRlclk6ICh0aGlzLmhlaWdodCAvIDIpICsgMjAsXG4gICAgICB0ZXh0T3JpZW50YXRpb24gOiB0aGlzLnRleHRPcmllbnRhdGlvbixcbiAgICAgIHRleHRBbGlnbWVudCA6IHRoaXMudGV4dEFsaWdubWVudCxcbiAgICAgIGFuaW1hdGlvbjpcbiAgICAgIHtcbiAgICAgICAgdHlwZTogJ3NwaW5Ub1N0b3AnLMKgIC8vIFR5cGUgb2YgYW5pbWF0aW9uLlxuICAgICAgICBkdXJhdGlvbjogdGhpcy5zcGluRHVyYXRpb24sIC8vIEhvdyBsb25nIHRoZSBhbmltYXRpb24gaXMgdG8gdGFrZSBpbiBzZWNvbmRzLlxuICAgICAgICBzcGluczogdGhpcy5zcGluQW1vdW50wqAgLy8gVGhlIG51bWJlciBvZiBjb21wbGV0ZSAzNjAgZGVncmVlIHJvdGF0aW9ucyB0aGUgd2hlZWwgaXMgdG8gZG8uXG4gICAgICB9XG4gICAgfSlcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgVHdlZW5NYXgudGlja2VyLmFkZEV2ZW50TGlzdGVuZXIoXCJ0aWNrXCIsIHRoaXMuZHJhd1BvaW50ZXIuYmluZCh0aGlzKSk7XG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgVHdlZW5NYXgudGlja2VyLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0aWNrXCIpXG4gIH1cblxuICBkcmF3UG9pbnRlcigpe1xuICAgIGxldCBjID0gdGhpcy53aGVlbC5jdHg7XG4gICAgLy8gQ3JlYXRlIHBvaW50ZXIuXG4gICAgaWYgKGMpIHtcbiAgICAgIGMuc2F2ZSgpO1xuICAgICAgYy5saW5lV2lkdGggPSAyO1xuICAgICAgYy5zdHJva2VTdHlsZSA9IHRoaXMucG9pbnRlclN0cm9rZUNvbG9yO1xuICAgICAgYy5maWxsU3R5bGUgPSB0aGlzLnBvaW50ZXJGaWxsQ29sb3I7XG4gICAgICBjLmJlZ2luUGF0aCgpO1xuICAgICAgYy5tb3ZlVG8oKHRoaXMud2lkdGggLyAyKSAtIDIwLCAyKTtcbiAgICAgIGMubGluZVRvKCh0aGlzLndpZHRoIC8gMikgKyAyMCwgMik7XG4gICAgICBjLmxpbmVUbygodGhpcy53aWR0aCAvIDIpLCA0Mik7XG4gICAgICBjLmxpbmVUbygodGhpcy53aWR0aCAvIDIpIC0gMjAsIDIpO1xuICAgICAgYy5zdHJva2UoKTtcbiAgICAgIGMuZmlsbCgpO1xuICAgICAgYy5yZXN0b3JlKCk7XG4gICAgfVxuICB9XG59XG4iXX0=