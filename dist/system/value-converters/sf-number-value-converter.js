System.register([], function (exports_1, context_1) {
    "use strict";
    var SfNumberValueConverter;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            SfNumberValueConverter = /** @class */ (function () {
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
            exports_1("SfNumberValueConverter", SfNumberValueConverter);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZhbHVlLWNvbnZlcnRlcnMvc2YtbnVtYmVyLXZhbHVlLWNvbnZlcnRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7O1lBQ0E7Z0JBQUE7Z0JBU0EsQ0FBQztnQkFSQyx1Q0FBTSxHQUFOLFVBQU8sR0FBRztvQkFDUixPQUFPLEdBQUcsQ0FBQztnQkFDYixDQUFDO2dCQUVELHlDQUFRLEdBQVIsVUFBUyxHQUFHO29CQUNWLElBQUksR0FBRyxLQUFLLEVBQUUsRUFBRTt3QkFBRSxPQUFPLElBQUksQ0FBQztxQkFBRTtvQkFDaEMsT0FBTyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQ3JCLENBQUM7Z0JBQ0gsNkJBQUM7WUFBRCxDQVRBLEFBU0MsSUFBQTs7UUFDRCxDQUFDIiwiZmlsZSI6InZhbHVlLWNvbnZlcnRlcnMvc2YtbnVtYmVyLXZhbHVlLWNvbnZlcnRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IGNsYXNzIFNmTnVtYmVyVmFsdWVDb252ZXJ0ZXIge1xuICB0b1ZpZXcodmFsKSB7XG4gICAgcmV0dXJuIHZhbDtcbiAgfVxuXG4gIGZyb21WaWV3KHZhbCkge1xuICAgIGlmICh2YWwgPT09ICcnKSB7IHJldHVybiBudWxsOyB9XG4gICAgcmV0dXJuIE51bWJlcih2YWwpO1xuICB9XG59XG4iXSwic291cmNlUm9vdCI6InNyYy9wbHVnaW4ifQ==
