System.register([], function (exports_1, context_1) {
    "use strict";
    var __generator = (this && this.__generator) || function (thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    };
    var Guid;
    var __moduleName = context_1 && context_1.id;
    function guidGenerator() {
        var d, r;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!true) return [3 /*break*/, 2];
                    return [4 /*yield*/, "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
                            r = (new Date().getTime() + Math.random() * 16) % 16 | 0;
                            d = Math.floor(d / 16);
                            return (c === "x" ? r : (r & 0x3 | 0x8)).toString(16);
                        })];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 0];
                case 2: return [2 /*return*/];
            }
        });
    }
    return {
        setters: [],
        execute: function () {
            Guid = /** @class */ (function () {
                function Guid() {
                }
                Guid.newGuid = function () {
                    return this.generator.next().value;
                };
                Guid.generator = guidGenerator();
                return Guid;
            }());
            exports_1("Guid", Guid);
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9ndWlkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFDQSxTQUFVLGFBQWE7Ozs7O3lCQUdkLElBQUk7b0JBQ1QscUJBQU0sc0NBQXNDLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBRSxVQUFDLENBQUM7NEJBQzlELENBQUMsR0FBRyxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7NEJBQ3pELENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQzs0QkFDdkIsT0FBTyxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxDQUFDO3dCQUN4RCxDQUFDLENBQUMsRUFBQTs7b0JBSkYsU0FJRSxDQUFDOzs7OztLQUVOOzs7OztnQkFHQztnQkFBd0IsQ0FBQztnQkFJbEIsWUFBTyxHQUFkO29CQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUM7Z0JBQ3JDLENBQUM7Z0JBSk0sY0FBUyxHQUE2QixhQUFhLEVBQUUsQ0FBQztnQkFLL0QsV0FBQzthQVJELEFBUUM7O1FBQ0QsQ0FBQyIsImZpbGUiOiJyZXNvdXJjZXMvZ3VpZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5mdW5jdGlvbiogZ3VpZEdlbmVyYXRvcigpIHtcclxuICBsZXQgZDogbnVtYmVyO1xyXG4gIGxldCByOiBudW1iZXI7XHJcbiAgd2hpbGUgKHRydWUpIHtcclxuICAgIHlpZWxkIFwieHh4eHh4eHgteHh4eC00eHh4LXl4eHgteHh4eHh4eHh4eHh4XCIucmVwbGFjZSgvW3h5XS9nLCAoYykgPT4ge1xyXG4gICAgICByID0gKG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgTWF0aC5yYW5kb20oKSAqIDE2KSAlIDE2IHwgMDtcclxuICAgICAgZCA9IE1hdGguZmxvb3IoZCAvIDE2KTtcclxuICAgICAgcmV0dXJuIChjID09PSBcInhcIiA/IHIgOiAociAmIDB4MyB8IDB4OCkpLnRvU3RyaW5nKDE2KTtcclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNsYXNzIEd1aWQge1xyXG4gIHByaXZhdGUgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgc3RhdGljIGdlbmVyYXRvcjogSXRlcmFibGVJdGVyYXRvcjxzdHJpbmc+ID0gZ3VpZEdlbmVyYXRvcigpO1xyXG5cclxuICBzdGF0aWMgbmV3R3VpZCgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHRoaXMuZ2VuZXJhdG9yLm5leHQoKS52YWx1ZTtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiJzcmMvcGx1Z2luIn0=
