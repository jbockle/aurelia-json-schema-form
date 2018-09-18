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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbHVlLWNvbnZlcnRlcnMvc2YtbnVtYmVyLXZhbHVlLWNvbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7SUFDQTtRQUFBO1FBU0EsQ0FBQztRQVJDLHVDQUFNLEdBQU4sVUFBTyxHQUFHO1lBQ1IsT0FBTyxHQUFHLENBQUM7UUFDYixDQUFDO1FBRUQseUNBQVEsR0FBUixVQUFTLEdBQUc7WUFDVixJQUFJLEdBQUcsS0FBSyxFQUFFLEVBQUU7Z0JBQUUsT0FBTyxJQUFJLENBQUM7YUFBRTtZQUNoQyxPQUFPLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNyQixDQUFDO1FBQ0gsNkJBQUM7SUFBRCxDQVRBLEFBU0MsSUFBQTtJQVRZLHdEQUFzQiIsImZpbGUiOiJ2YWx1ZS1jb252ZXJ0ZXJzL3NmLW51bWJlci12YWx1ZS1jb252ZXJ0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBjbGFzcyBTZk51bWJlclZhbHVlQ29udmVydGVyIHtcbiAgdG9WaWV3KHZhbCkge1xuICAgIHJldHVybiB2YWw7XG4gIH1cblxuICBmcm9tVmlldyh2YWwpIHtcbiAgICBpZiAodmFsID09PSAnJykgeyByZXR1cm4gbnVsbDsgfVxuICAgIHJldHVybiBOdW1iZXIodmFsKTtcbiAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiJzcmMvcGx1Z2luIn0=
