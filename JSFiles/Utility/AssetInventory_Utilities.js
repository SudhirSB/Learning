"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.AssetInventory_Utilities = void 0;
const protractor_1 = require("protractor");
const AssetInventory_1 = require("../pageObjects/AssetInventory");
const CommonServices_1 = require("../pageObjects/CommonServices");
const DbConfig_1 = require("./DbConfig");
const Queries_1 = require("./Queries");
const CSLoginPage_1 = require("../pageObjects/CSLoginPage");
const chai = __importStar(require("chai"));
const ViolationDetails_db_1 = require("../pageObjects/ViolationDetails_db");
let db = new DbConfig_1.DbConfig();
let cs = new CommonServices_1.CommonServices();
let queries = new Queries_1.Queries();
let cspage = new CSLoginPage_1.CSLoginPage();
var expect = chai.expect;
let EC = protractor_1.browser.ExpectedConditions;
let ainv = new AssetInventory_1.AssetInventory();
let firstRow = ainv.firstRow;
class AssetInventory_Utilities {
    getTotalNoOfRecs() {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.wait(EC.visibilityOf((0, protractor_1.element)(protractor_1.by.css("div.nam-toolbar-left-details-section > p"))), 5000);
            let text = yield (0, protractor_1.element)(protractor_1.by.css("div.nam-toolbar-left-details-section > p")).getText();
            let textDet = text.split(" ");
            return Number(textDet[3]);
        });
    }
    expandAssetRec(row) {
        return __awaiter(this, void 0, void 0, function* () {
            protractor_1.browser.wait(EC.visibilityOf(row));
            let expandButton = yield row.element(protractor_1.by.css("mat-expansion-panel-header span.mat-expansion-indicator"));
            let expanded = yield row.element(protractor_1.by.css("span[style*='180deg']")).isPresent();
            console.log("Expanded? => " + expanded);
            if (expanded) {
                console.log("First row expand button is already clicked");
            }
            else {
                yield expandButton.click();
            }
            return row;
        });
    }
    navigateToTab(tab, nthRow) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(EC.visibilityOf(nthRow.element(protractor_1.by.cssContainingText("div[role='tab']", tab))));
            yield nthRow.element(protractor_1.by.cssContainingText("div[role='tab']", tab)).click();
            console.log(yield nthRow.element(protractor_1.by.cssContainingText("div[role='tab']", tab)).getText());
        });
    }
    getAssetViewDetails(assetCode, string) {
        return __awaiter(this, void 0, void 0, function* () {
            let section;
            yield db.connectToDb();
            let output = yield db.fetchViolationsFromDB(assetCode);
            // let x = output.length;
            // console.log("Total Number of"+ +" in the DB: "+x);
            if (string == "Asset Details") {
                section = 'div.asset-float-child';
            }
            else if (string == "Network") {
                section = 'div.network-float-child';
            }
            else if (string == "Warehouse") {
                section = 'div.warehouse-float-child1';
            }
            else if (string == "Purchase Order") {
                section = 'div.purchaseorder-float-child1';
            }
            let assetRec = yield (0, protractor_1.element)(protractor_1.by.css("mat-expansion-panel:nth-child(1)"));
            yield protractor_1.browser.wait(EC.visibilityOf(assetRec.element(protractor_1.by.css("div[aria-selected='true']"))));
            console.log("We are in the tab: " + (yield assetRec.element(protractor_1.by.css("div[aria-selected='true']")).getText()));
            let assetDetails = assetRec.element(protractor_1.by.css(section));
            console.log("\n" + (yield assetDetails.element(protractor_1.by.css("p")).getText()));
            yield assetDetails.all(protractor_1.by.css("div.row div.col")).each((columns) => __awaiter(this, void 0, void 0, function* () {
                let assetDetailsMAP = new Map();
                if (yield columns.element(protractor_1.by.tagName("label")).isPresent()) {
                    // console.log(await columns.element(by.tagName("label")).getText());
                    let columnText = yield columns.getText();
                    let spltVal = columnText.split(":");
                    if (spltVal[1].trim() == '-' || spltVal[1].trim() == "") {
                        spltVal[1] = "";
                    }
                    assetDetailsMAP.set(spltVal[0], spltVal[1]);
                    for (let [key, value] of assetDetailsMAP) {
                        console.log("Key is: " + key + "\tValue is: " + value);
                    }
                }
            }));
        });
    }
    validateViolationsDetails(assetCode, row) {
        return __awaiter(this, void 0, void 0, function* () {
            let violationRows = row.all(protractor_1.by.css("#mat-tab-content-0-1 tbody>tr"));
            let n = yield violationRows.count();
            let valSuccess = true;
            console.log("Received Asset Code is: " + assetCode);
            yield db.connectToDb();
            let output = yield db.fetchViolationsFromDB(assetCode);
            console.log("Is this the length? ====> " + output.length);
            let x = output.length;
            console.log("Total Number of violations in the DB: " + x);
            if (n == x) {
                console.log("Total Number of violations in the UI and DB are same");
                for (let i = 0; i < n; i++) {
                    let columnSize = yield violationRows.get(i).all(protractor_1.by.tagName("td")).count();
                    let newOutput = Object.assign(new ViolationDetails_db_1.ViolationDetails_db(), output[i]);
                    let dbRow = newOutput.severity + newOutput.alert_type + newOutput.alert_raised_on + newOutput.last_updated_on + newOutput.alert_text;
                    // console.log(i+" row's data from DB is: "+dbRow);
                    let violation_row = "";
                    let colText;
                    for (let j = 0; j < columnSize; j++) {
                        colText = yield violationRows.get(i).all(protractor_1.by.tagName("td")).get(j).getText();
                        violation_row += colText;
                    }
                    // console.log(i+" row's data from UI is: "+violation_row);
                    if (dbRow.trim() == violation_row.trim()) {
                        console.log(i + " row violation data in both UI and DB is same\n");
                    }
                    else {
                        valSuccess = false;
                        console.log("Not equal");
                    }
                    // console.log(i+" row's data from UI is: ||"+violation_row.trim()+"||");
                    // console.log(i+" row's data from DB is: ||"+dbRow.trim()+"||");
                    // expect(violation_row.trim()).to.equal(Number(dbRow.trim()));
                }
            }
            else {
                console.log("Number of rows in UI: " + n);
                console.log("Number of rows in DB: " + x);
            }
            return valSuccess;
        });
    }
    validateAssetDetails(nthRow, assetCode, string) {
        return __awaiter(this, void 0, void 0, function* () {
            let section;
            yield db.connectToDb();
            let asdnId = yield db.fetchAsdnId(assetCode);
            if (string == "Asset Details") {
                section = 'div.asset-float-child';
            }
            else if (string == "Network") {
                section = 'div.network-float-child';
            }
            else if (string == "Warehouse") {
                section = 'div.warehouse-float-child1';
            }
            else if (string == "Purchase Order") {
                section = 'div.purchaseorder-float-child1';
            }
            yield protractor_1.browser.wait(EC.visibilityOf(nthRow.element(protractor_1.by.css("div[aria-selected='true']"))));
            console.log("We are in the tab: " + (yield nthRow.element(protractor_1.by.css("div[aria-selected='true']")).getText()));
            let assetDetails = nthRow.element(protractor_1.by.css(section));
            console.log("\n" + (yield assetDetails.element(protractor_1.by.css("p")).getText()));
            let assetDetailsMAP = new Map();
            let uiDetails = "";
            yield assetDetails.all(protractor_1.by.css("div.row div.col")).each((columns) => __awaiter(this, void 0, void 0, function* () {
                if (yield columns.element(protractor_1.by.tagName("label")).isPresent()) {
                    // console.log(await columns.element(by.tagName("label")).getText());
                    let columnText = yield columns.getText();
                    let spltVal = columnText.split(":");
                    if (spltVal[1].trim() == '-' || spltVal[1].trim() == "") {
                        spltVal[1] = "";
                    }
                    assetDetailsMAP.set(spltVal[0], spltVal[1]);
                    for (let [key, value] of assetDetailsMAP) {
                        console.log("Key is: " + key + "\tValue is: " + value);
                        uiDetails += value;
                    }
                }
            }));
            console.log(`\nUI details for ${string} is ${uiDetails}\n`);
        });
    }
}
exports.AssetInventory_Utilities = AssetInventory_Utilities;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXNzZXRJbnZlbnRvcnlfVXRpbGl0aWVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vVXRpbGl0eS9Bc3NldEludmVudG9yeV9VdGlsaXRpZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDJDQUErRDtBQUMvRCxrRUFBK0Q7QUFDL0Qsa0VBQTZEO0FBQzdELHlDQUFvQztBQUNwQyx1Q0FBa0M7QUFDbEMsNERBQXVEO0FBQ3ZELDJDQUE2QjtBQUM3Qiw0RUFBdUU7QUFFdkUsSUFBSSxFQUFFLEdBQUcsSUFBSSxtQkFBUSxFQUFFLENBQUM7QUFDeEIsSUFBSSxFQUFFLEdBQUcsSUFBSSwrQkFBYyxFQUFFLENBQUM7QUFDOUIsSUFBSSxPQUFPLEdBQUcsSUFBSSxpQkFBTyxFQUFFLENBQUM7QUFDNUIsSUFBSSxNQUFNLEdBQUcsSUFBSSx5QkFBVyxFQUFFLENBQUM7QUFDL0IsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQztBQUN6QixJQUFJLEVBQUUsR0FBRyxvQkFBTyxDQUFDLGtCQUFrQixDQUFDO0FBQ3BDLElBQUksSUFBSSxHQUFHLElBQUksK0JBQWMsRUFBRSxDQUFDO0FBQ2hDLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7QUFJN0IsTUFBYSx3QkFBd0I7SUFFcEIsZ0JBQWdCOztZQUN6QixvQkFBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDBDQUEwQyxDQUFDLENBQUMsQ0FBQyxFQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2hHLElBQUksSUFBSSxHQUFHLE1BQU0sSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsMENBQTBDLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ3ZGLElBQUksT0FBTyxHQUFHLElBQUksQ0FB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