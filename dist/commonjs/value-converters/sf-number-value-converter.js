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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbHVlLWNvbnZlcnRlcnMvc2YtbnVtYmVyLXZhbHVlLWNvbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUNBO0lBQUE7SUFTQSxDQUFDO0lBUkMsdUNBQU0sR0FBTixVQUFPLEdBQUc7UUFDUixPQUFPLEdBQUcsQ0FBQztJQUNiLENBQUM7SUFFRCx5Q0FBUSxHQUFSLFVBQVMsR0FBRztRQUNWLElBQUksR0FBRyxLQUFLLEVBQUUsRUFBRTtZQUFFLE9BQU8sSUFBSSxDQUFDO1NBQUU7UUFDaEMsT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDckIsQ0FBQztJQUNILDZCQUFDO0FBQUQsQ0FUQSxBQVNDLElBQUE7QUFUWSx3REFBc0IiLCJmaWxlIjoidmFsdWUtY29udmVydGVycy9zZi1udW1iZXItdmFsdWUtY29udmVydGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5leHBvcnQgY2xhc3MgU2ZOdW1iZXJWYWx1ZUNvbnZlcnRlciB7XG4gIHRvVmlldyh2YWwpIHtcbiAgICByZXR1cm4gdmFsO1xuICB9XG5cbiAgZnJvbVZpZXcodmFsKSB7XG4gICAgaWYgKHZhbCA9PT0gJycpIHsgcmV0dXJuIG51bGw7IH1cbiAgICByZXR1cm4gTnVtYmVyKHZhbCk7XG4gIH1cbn1cbiJdLCJzb3VyY2VSb290Ijoic3JjL3BsdWdpbiJ9
