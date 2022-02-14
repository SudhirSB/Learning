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
const DbConfig_1 = require("../Utility/DbConfig");
const Queries_1 = require("../Utility/Queries");
let EC = protractor_1.browser.ExpectedConditions;
let db = new DbConfig_1.DbConfig();
let queries = new Queries_1.Queries();
let client;
class AssetInventory {
    constructor() {
        this.totalNoOfRecords = (0, protractor_1.element)(protractor_1.by.css("div.nam-toolbar-left-details-section > p"));
        this.firstRow = (0, protractor_1.element)(protractor_1.by.css("mat-expansion-panel:nth-child(1)"));
        this.sideNav = (0, protractor_1.element)(protractor_1.by.css("div.mat-drawer-inner-container"));
    }
    getNthRow(n) {
        return __awaiter(this, void 0, void 0, function* () {
            this.nthRow = (0, protractor_1.element)(protractor_1.by.css("mat-expansion-panel:nth-child(" + n + ")"));
            return this.nthRow;
        });
    }
}
exports.AssetInventory = AssetInventory;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXNzZXRJbnZlbnRvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlT2JqZWN0cy9Bc3NldEludmVudG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBaUU7QUFDakUsa0RBQStDO0FBQy9DLGdEQUE2QztBQUc3QyxJQUFJLEVBQUUsR0FBRyxvQkFBTyxDQUFDLGtCQUFrQixDQUFDO0FBQ3BDLElBQUksRUFBRSxHQUFHLElBQUksbUJBQVEsRUFBRSxDQUFDO0FBQ3hCLElBQUksT0FBTyxHQUFHLElBQUksaUJBQU8sRUFBRSxDQUFDO0FBQzVCLElBQUksTUFBYSxDQUFDO0FBRWxCLE1BQWEsY0FBYztJQU92QjtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDLENBQUM7UUFDcEUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDLENBQUM7SUFDckUsQ0FBQztJQUVZLFNBQVMsQ0FBQyxDQUFROztZQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGdDQUFnQyxHQUFDLENBQUMsR0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO1lBQ3RFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUN2QixDQUFDO0tBQUE7Q0FFSjtBQWxCRCx3Q0FrQkMifQ==