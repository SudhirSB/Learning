"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CommonServices = void 0;
const protractor_1 = require("protractor");
class CommonServices {
    constructor() {
        this.sideNav = (0, protractor_1.element)(protractor_1.by.tagName('ngp-side-nav')).element(protractor_1.by.tagName('mat-sidenav'));
        this.dms = (0, protractor_1.element)(protractor_1.by.cssContainingText('.ngp-sidenav-main-menu-text', 'Data Management'));
        this.nam = (0, protractor_1.element)(protractor_1.by.cssContainingText('.ngp-sidenav-main-menu-text', 'NAM'));
        this.assetManagement = (0, protractor_1.element)(protractor_1.by.cssContainingText('div.ngp-sidebar-sub-menu-item-desc', 'Asset Management'));
    }
}
exports.CommonServices = CommonServices;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tbW9uU2VydmljZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlT2JqZWN0cy9Db21tb25TZXJ2aWNlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBd0Q7QUFFeEQsTUFBYSxjQUFjO0lBT3ZCO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDdEYsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLGlCQUFpQixDQUFDLDZCQUE2QixFQUFDLGlCQUFpQixDQUFDLENBQUMsQ0FBQztRQUMxRixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsaUJBQWlCLENBQUMsNkJBQTZCLEVBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztRQUM5RSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsaUJBQWlCLENBQUMsb0NBQW9DLEVBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO0lBQ2xILENBQUM7Q0FHSjtBQWZELHdDQWVDIn0=