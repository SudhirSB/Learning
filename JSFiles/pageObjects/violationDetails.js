"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ViolationDetails = void 0;
class ViolationDetails {
    // constructor(violation_id:string, severity:string, alert_type:string, alert_raised_on:string, last_updated_on:string, alert_text:string){
    //     this.violation_id = violation_id;
    //     this.severity = severity;
    //     this.alert_type = alert_type;
    //     this.alert_raised_on = alert_raised_on;
    //     this.last_updated_on = last_updated_on;
    //     this.alert_text = alert_text;
    // }
    get_violationId() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.violation_id;
        });
    }
    get_severity() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.severity;
        });
    }
    get_alertType() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.alert_type;
        });
    }
    get_alertRaisedOn() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.alert_raised_on;
        });
    }
    get_lastUpdatedOn() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.last_updated_on;
        });
    }
    get_alertText() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.alert_text;
        });
    }
}
exports.ViolationDetails = ViolationDetails;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlvbGF0aW9uRGV0YWlscy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmplY3RzL3Zpb2xhdGlvbkRldGFpbHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsTUFBYSxnQkFBZ0I7SUFTekIsMklBQTJJO0lBQzNJLHdDQUF3QztJQUN4QyxnQ0FBZ0M7SUFDaEMsb0NBQW9DO0lBQ3BDLDhDQUE4QztJQUM5Qyw4Q0FBOEM7SUFDOUMsb0NBQW9DO0lBQ3BDLElBQUk7SUFFUyxlQUFlOztZQUN4QixPQUFPLElBQUksQ0FBQyxZQUFZLENBQUM7UUFDN0IsQ0FBQztLQUFBO0lBRVksWUFBWTs7WUFDckIsT0FBTyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3pCLENBQUM7S0FBQTtJQUVZLGFBQWE7O1lBQ3RCLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztRQUMzQixDQUFDO0tBQUE7SUFFWSxpQkFBaUI7O1lBQzFCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUNoQyxDQUFDO0tBQUE7SUFFWSxpQkFBaUI7O1lBQzFCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQztRQUNoQyxDQUFDO0tBQUE7SUFFWSxhQUFhOztZQUN0QixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDM0IsQ0FBQztLQUFBO0NBR0o7QUEzQ0QsNENBMkNDIn0=