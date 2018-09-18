define(["require", "exports"], function (require, exports) {
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
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbHVlLWNvbnZlcnRlcnMvc2YtbnVtYmVyLXZhbHVlLWNvbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFDQTtRQUFBO1FBU0EsQ0FBQztRQVJDLHVDQUFNLEdBQU4sVUFBTyxHQUFHO1lBQ1IsT0FBTyxHQUFHLENBQUM7UUFDYixDQUFDO1FBRUQseUNBQVEsR0FBUixVQUFTLEdBQUc7WUFDVixJQUFJLEdBQUcsS0FBSyxFQUFFLEVBQUU7Z0JBQUUsT0FBTyxJQUFJLENBQUM7YUFBRTtZQUNoQyxPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQixDQUFDO1FBQ0gsNkJBQUM7SUFBRCxDQVRBLEFBU0MsSUFBQTtJQVRZLHdEQUFzQiIsImZpbGUiOiJ2YWx1ZS1jb252ZXJ0ZXJzL3NmLW51bWJlci12YWx1ZS1jb252ZXJ0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuZXhwb3J0IGNsYXNzIFNmTnVtYmVyVmFsdWVDb252ZXJ0ZXIge1xyXG4gIHRvVmlldyh2YWwpIHtcclxuICAgIHJldHVybiB2YWw7XHJcbiAgfVxyXG5cclxuICBmcm9tVmlldyh2YWwpIHtcclxuICAgIGlmICh2YWwgPT09ICcnKSB7IHJldHVybiBudWxsOyB9XHJcbiAgICByZXR1cm4gTnVtYmVyKHZhbCk7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290Ijoic3JjL3BsdWdpbiJ9
