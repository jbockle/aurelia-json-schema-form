System.register(["aurelia-framework"], function (exports_1, context_1) {
    "use strict";
    var aurelia_framework_1;
    var __moduleName = context_1 && context_1.id;
    // tslint:disable:max-line-length
    function GetBootstrapTemplates() {
        return {
            boolean: aurelia_framework_1.PLATFORM.moduleName('./inputs/sft-boolean.html'),
            number: aurelia_framework_1.PLATFORM.moduleName('./inputs/sft-number.html'),
            numberRange: aurelia_framework_1.PLATFORM.moduleName('./inputs/sft-number-range.html'),
            string: aurelia_framework_1.PLATFORM.moduleName('./inputs/sft-string.html'),
            stringRadioEnum: aurelia_framework_1.PLATFORM.moduleName('./inputs/sft-string-radio-enum.html'),
            stringSelectEnum: aurelia_framework_1.PLATFORM.moduleName('./inputs/sft-string-select-enum.html'),
            object: aurelia_framework_1.PLATFORM.moduleName('./inputs/sft-object.html'),
            array: aurelia_framework_1.PLATFORM.moduleName('./inputs/sft-array.html'),
            arrayTabs: aurelia_framework_1.PLATFORM.moduleName('./inputs/sft-array-tabs.html'),
            arrayStringEnum: aurelia_framework_1.PLATFORM.moduleName('./inputs/sft-array-string-enum.html')
        };
    }
    exports_1("GetBootstrapTemplates", GetBootstrapTemplates);
    return {
        setters: [
            function (aurelia_framework_1_1) {
                aurelia_framework_1 = aurelia_framework_1_1;
            }
        ],
        execute: function () {
        }
    };
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlbXBsYXRlcy9ib290c3RyYXA0L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7SUFFQSxpQ0FBaUM7SUFDakMsU0FBZ0IscUJBQXFCO1FBQ25DLE9BQU87WUFDTCxPQUFPLEVBQUUsNEJBQVEsQ0FBQyxVQUFVLENBQUMsMkJBQTJCLENBQUM7WUFDekQsTUFBTSxFQUFFLDRCQUFRLENBQUMsVUFBVSxDQUFDLDBCQUEwQixDQUFDO1lBQ3ZELFdBQVcsRUFBRSw0QkFBUSxDQUFDLFVBQVUsQ0FBQyxnQ0FBZ0MsQ0FBQztZQUNsRSxNQUFNLEVBQUUsNEJBQVEsQ0FBQyxVQUFVLENBQUMsMEJBQTBCLENBQUM7WUFDdkQsZUFBZSxFQUFFLDRCQUFRLENBQUMsVUFBVSxDQUFDLHFDQUFxQyxDQUFDO1lBQzNFLGdCQUFnQixFQUFFLDRCQUFRLENBQUMsVUFBVSxDQUFDLHNDQUFzQyxDQUFDO1lBQzdFLE1BQU0sRUFBRSw0QkFBUSxDQUFDLFVBQVUsQ0FBQywwQkFBMEIsQ0FBQztZQUN2RCxLQUFLLEVBQUUsNEJBQVEsQ0FBQyxVQUFVLENBQUMseUJBQXlCLENBQUM7WUFDckQsU0FBUyxFQUFFLDRCQUFRLENBQUMsVUFBVSxDQUFDLDhCQUE4QixDQUFDO1lBQzlELGVBQWUsRUFBRSw0QkFBUSxDQUFDLFVBQVUsQ0FBQyxxQ0FBcUMsQ0FBQztTQUM1RSxDQUFDO0lBQ0osQ0FBQzs7Ozs7Ozs7O1FBQ0QsQ0FBQyIsImZpbGUiOiJ0ZW1wbGF0ZXMvYm9vdHN0cmFwNC9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElUZW1wbGF0ZXMgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzL3RlbXBsYXRlcyc7XHJcbmltcG9ydCB7IFBMQVRGT1JNIH0gZnJvbSAnYXVyZWxpYS1mcmFtZXdvcmsnO1xyXG4vLyB0c2xpbnQ6ZGlzYWJsZTptYXgtbGluZS1sZW5ndGhcclxuZXhwb3J0IGZ1bmN0aW9uIEdldEJvb3RzdHJhcFRlbXBsYXRlcygpOiBJVGVtcGxhdGVzIHtcclxuICByZXR1cm4ge1xyXG4gICAgYm9vbGVhbjogUExBVEZPUk0ubW9kdWxlTmFtZSgnLi9pbnB1dHMvc2Z0LWJvb2xlYW4uaHRtbCcpLFxyXG4gICAgbnVtYmVyOiBQTEFURk9STS5tb2R1bGVOYW1lKCcuL2lucHV0cy9zZnQtbnVtYmVyLmh0bWwnKSxcclxuICAgIG51bWJlclJhbmdlOiBQTEFURk9STS5tb2R1bGVOYW1lKCcuL2lucHV0cy9zZnQtbnVtYmVyLXJhbmdlLmh0bWwnKSxcclxuICAgIHN0cmluZzogUExBVEZPUk0ubW9kdWxlTmFtZSgnLi9pbnB1dHMvc2Z0LXN0cmluZy5odG1sJyksXHJcbiAgICBzdHJpbmdSYWRpb0VudW06IFBMQVRGT1JNLm1vZHVsZU5hbWUoJy4vaW5wdXRzL3NmdC1zdHJpbmctcmFkaW8tZW51bS5odG1sJyksXHJcbiAgICBzdHJpbmdTZWxlY3RFbnVtOiBQTEFURk9STS5tb2R1bGVOYW1lKCcuL2lucHV0cy9zZnQtc3RyaW5nLXNlbGVjdC1lbnVtLmh0bWwnKSxcclxuICAgIG9iamVjdDogUExBVEZPUk0ubW9kdWxlTmFtZSgnLi9pbnB1dHMvc2Z0LW9iamVjdC5odG1sJyksXHJcbiAgICBhcnJheTogUExBVEZPUk0ubW9kdWxlTmFtZSgnLi9pbnB1dHMvc2Z0LWFycmF5Lmh0bWwnKSxcclxuICAgIGFycmF5VGFiczogUExBVEZPUk0ubW9kdWxlTmFtZSgnLi9pbnB1dHMvc2Z0LWFycmF5LXRhYnMuaHRtbCcpLFxyXG4gICAgYXJyYXlTdHJpbmdFbnVtOiBQTEFURk9STS5tb2R1bGVOYW1lKCcuL2lucHV0cy9zZnQtYXJyYXktc3RyaW5nLWVudW0uaHRtbCcpXHJcbiAgfTtcclxufVxyXG4iXSwic291cmNlUm9vdCI6InNyYy9wbHVnaW4ifQ==
