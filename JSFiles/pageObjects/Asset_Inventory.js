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
exports.AssetInventory = void 0;
const protractor_1 = require("protractor");
let EC = protractor_1.browser.ExpectedConditions;
class AssetInventory {
    constructor() {
        this.totalNoOfRecords = (0, protractor_1.element)(protractor_1.by.css("div.nam-toolbar-left-details-section > p"));
    }
    getTotalNoOfRecs() {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.wait(EC.visibilityOf((0, protractor_1.element)(protractor_1.by.css("div.nam-toolbar-left-details-section > p"))), 5000);
            let text = yield (0, protractor_1.element)(protractor_1.by.css("div.nam-toolbar-left-details-section > p")).getText();
            let textDet = text.split(" ");
            return Number(textDet[3]);
        });
    }
}
exports.AssetInventory = AssetInventory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXNzZXRfSW52ZW50b3J5LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZU9iamVjdHMvQXNzZXRfSW52ZW50b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBLDJDQUFpRTtBQUNqRSxJQUFJLEVBQUUsR0FBRyxvQkFBTyxDQUFDLGtCQUFrQixDQUFDO0FBRXBDLE1BQWEsY0FBYztJQUl2QjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDLENBQUM7SUFDeEYsQ0FBQztJQUVZLGdCQUFnQjs7WUFDekIsb0JBQU8sQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsQ0FBQztZQUNoRyxJQUFJLElBQUksR0FBRyxNQUFNLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDBDQUEwQyxDQUFDLENBQUMsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUN2RixJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzlCLE9BQU8sTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlCLENBQUM7S0FBQTtDQUVKO0FBZkQsd0NBZUMifQ==