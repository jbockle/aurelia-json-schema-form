"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SfNumberValueConverter = /** @class */ (function () {
    function SfNumberValueConverter() {
    }
    SfNumberValueConverter.prototype.toView = function (val) {
        return val;
    };
    SfNumberValueConverter.prototype.fromView = function (val) {
        if (val === '') {
            return null;
        }
        return Number(val);
    };
    return SfNumberValueConverter;
}());
exports.SfNumberValueConverter = SfNumberValueConverter;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbHVlLWNvbnZlcnRlcnMvc2YtbnVtYmVyLXZhbHVlLWNvbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBO0lBQUE7SUFTQSxDQUFDO0lBUkMsdUNBQU0sR0FBTixVQUFPLEdBQUc7UUFDUixPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFFRCx5Q0FBUSxHQUFSLFVBQVMsR0FBRztRQUNWLElBQUksR0FBRyxLQUFLLEVBQUUsRUFBRTtZQUFFLE9BQU8sSUFBSSxDQUFDO1NBQUU7UUFDaEMsT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDckIsQ0FBQztJQUNILDZCQUFDO0FBQUQsQ0FUQSxBQVNDLElBQUE7QUFUWSx3REFBc0IiLCJmaWxlIjoidmFsdWUtY29udmVydGVycy9zZi1udW1iZXItdmFsdWUtY29udmVydGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbmV4cG9ydCBjbGFzcyBTZk51bWJlclZhbHVlQ29udmVydGVyIHtcclxuICB0b1ZpZXcodmFsKSB7XHJcbiAgICByZXR1cm4gdmFsO1xyXG4gIH1cclxuXHJcbiAgZnJvbVZpZXcodmFsKSB7XHJcbiAgICBpZiAodmFsID09PSAnJykgeyByZXR1cm4gbnVsbDsgfVxyXG4gICAgcmV0dXJuIE51bWJlcih2YWwpO1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6InNyYy9wbHVnaW4ifQ==
