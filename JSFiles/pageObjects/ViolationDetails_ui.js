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
exports.ViolationDetails_db = void 0;
class ViolationDetails_db {
    constructor(violation_id, severity, alert_type, alert_raised_on, last_updated_on, alert_text) {
        this.violation_id = violation_id;
        this.severity = severity;
        this.alert_type = alert_type;
        this.alert_raised_on = alert_raised_on;
        this.last_updated_on = last_updated_on;
        this.alert_text = alert_text;
    }
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
exports.ViolationDetails_db = ViolationDetails_db;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVmlvbGF0aW9uRGV0YWlsc191aS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmplY3RzL1Zpb2xhdGlvbkRldGFpbHNfdWkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsTUFBYSxtQkFBbUI7SUFTNUIsWUFBWSxZQUFtQixFQUFFLFFBQWUsRUFBRSxVQUFpQixFQUFFLGVBQXNCLEVBQUUsZUFBc0IsRUFBRSxVQUFpQjtRQUNsSSxJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUNqQyxJQUFJLENBQUMsUUFBUSxHQUFHLFFBQVEsQ0FBQztRQUN6QixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQztRQUN2QyxJQUFJLENBQUMsZUFBZSxHQUFHLGVBQWUsQ0FBQztRQUN2QyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztJQUNqQyxDQUFDO0lBRVksZUFBZTs7WUFDeEIsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzdCLENBQUM7S0FBQTtJQUVZLFlBQVk7O1lBQ3JCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztRQUN6QixDQUFDO0tBQUE7SUFFWSxhQUFhOztZQUN0QixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDM0IsQ0FBQztLQUFBO0lBRVksaUJBQWlCOztZQUMxQixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7UUFDaEMsQ0FBQztLQUFBO0lBRVksaUJBQWlCOztZQUMxQixPQUFPLElBQUksQ0FBQyxlQUFlLENBQUM7UUFDaEMsQ0FBQztLQUFBO0lBRVksYUFBYTs7WUFDdEIsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBQzNCLENBQUM7S0FBQTtDQUdKO0FBM0NELGtEQTJDQyJ9