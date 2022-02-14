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
exports.Queries = void 0;
class Queries {
    getViolationQuery(assetCode) {
        return __awaiter(this, void 0, void 0, function* () {
            let violationQuery = `select aa.assl_id as violation_id,as2.asv_name as severity,aat.asat_type as alert_type,to_char(aa.assl_last_updated, 'YYYY-MM-DD HH12:MI:SS') as alert_Raised_On,to_char(aa.assl_last_updated, 'YYYY-MM-DD HH12:MI:SS') as last_updated_on, aa.assl_description as alert_text from asset_alerts aa
        left join asset_dfn ad
        on ad.asdn_id =aa.asdn_id
        left join alert_severity as2
        on ad.asv_id =as2.asv_id
        left join asset_alert_types aat
        on aat.asat_id = aa.asat_id
        where aa.delete_fl =false and ad.asdn_code= '${assetCode}'`;
            // console.log(violationQuery);
            return violationQuery;
        });
    }
    asdnIdQuery(assetCode) {
        return __awaiter(this, void 0, void 0, function* () {
            let asdnIdQuery = `select asdn_id from asset_dfn ad where ad.asdn_code = '${assetCode}'`;
            console.log(asdnIdQuery);
            return asdnIdQuery;
        });
    }
}
exports.Queries = Queries;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUXVlcmllcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL1V0aWxpdHkvUXVlcmllcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxNQUFhLE9BQU87SUFFSCxpQkFBaUIsQ0FBQyxTQUFnQjs7WUFDM0MsSUFBSSxjQUFjLEdBQVU7Ozs7Ozs7dURBT21CLFNBQVMsR0FBRyxDQUFDO1lBQzVELCtCQUErQjtZQUMvQixPQUFPLGNBQWMsQ0FBQztRQUMxQixDQUFDO0tBQUE7SUFFWSxXQUFXLENBQUMsU0FBZ0I7O1lBQ3JDLElBQUksV0FBVyxHQUFVLDBEQUEwRCxTQUFTLEdBQUcsQ0FBQztZQUNoRyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3pCLE9BQU8sV0FBVyxDQUFDO1FBQ3ZCLENBQUM7S0FBQTtDQUdKO0FBdEJELDBCQXNCQyJ9