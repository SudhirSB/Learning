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
exports.DbQueries = void 0;
class DbQueries {
    getViolationQuery(assetCode) {
        return __awaiter(this, void 0, void 0, function* () {
            let violationQuery = `select aa.assl_id as violation_id,as2.asv_name as severity,aat.asat_type as alert_type,aa.assl_last_updated as alert_Raised_On,aa.assl_last_updated as last_updated_on, aa.assl_description as alert_text from asset_alerts aa
        left join asset_dfn ad
        on ad.asdn_id =aa.asdn_id
        left join alert_severity as2
        on ad.asv_id =as2.asv_id
        left join asset_alert_types aat
        on aat.asat_id = aa.asat_id
        where aa.delete_fl =false and ` + assetCode;
            return violationQuery;
        });
    }
}
exports.DbQueries = DbQueries;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGJRdWVyaWVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vVXRpbGl0eS9kYlF1ZXJpZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUEsTUFBYSxTQUFTO0lBRUwsaUJBQWlCLENBQUMsU0FBZ0I7O1lBQzNDLElBQUksY0FBYyxHQUFVOzs7Ozs7O3VDQU9HLEdBQUMsU0FBUyxDQUFDO1lBQzFDLE9BQU8sY0FBYyxDQUFDO1FBQzFCLENBQUM7S0FBQTtDQUlKO0FBaEJELDhCQWdCQyJ9