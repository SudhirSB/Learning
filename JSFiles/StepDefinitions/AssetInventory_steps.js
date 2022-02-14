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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("@cucumber/cucumber");
const protractor_1 = require("protractor");
const CSLoginPage_1 = require("../pageObjects/CSLoginPage");
const chai_1 = __importDefault(require("chai"));
const CommonServices_1 = require("../pageObjects/CommonServices");
const DbConfig_1 = require("../Utility/DbConfig");
const AssetInventory_Utilities_1 = require("../Utility/AssetInventory_Utilities");
const AssetInventory_1 = require("../pageObjects/AssetInventory");
let db = new DbConfig_1.DbConfig();
let cs = new CommonServices_1.CommonServices();
let cspage = new CSLoginPage_1.CSLoginPage();
var expect = chai_1.default.expect;
let EC = protractor_1.browser.ExpectedConditions;
let ainv = new AssetInventory_1.AssetInventory();
let ainv_utils = new AssetInventory_Utilities_1.AssetInventory_Utilities();
let nthRow;
let assetCode;
(0, cucumber_1.Given)('I will navigate to {string} website', (string) => __awaiter(void 0, void 0, void 0, function* () {
    if (string == 'NAM') {
        yield protractor_1.browser.waitForAngularEnabled(false);
        yield protractor_1.browser.get('http:/common-services-app:4201/');
    }
}));
(0, cucumber_1.When)('I enter {string}, {string} and click on login button', (string, string2) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.wait(EC.visibilityOf(cspage.username), 10000);
    yield cspage.username.sendKeys(string);
    yield cspage.password.sendKeys(string2);
    yield protractor_1.browser.wait(EC.visibilityOf(cspage.loginButton), 10000);
    yield cspage.loginButton.click();
}));
(0, cucumber_1.When)('I click on the {string} link', (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.wait(EC.visibilityOf(cs.sideNav));
    yield protractor_1.browser.actions().mouseMove(cs.sideNav).perform();
    if (string == "Asset Management") {
        yield cs.nam.click();
        yield cs.assetManagement.click();
    }
}));
(0, cucumber_1.Then)('I should be navigated to {string} homepage', (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield protractor_1.browser.wait(EC.titleContains(string));
    console.log("Title of the browser is: " + (yield protractor_1.browser.getTitle()));
    let title = yield protractor_1.browser.getTitle();
    yield expect(title).to.equal(string);
}));
(0, cucumber_1.Then)('I should be able to see total number of assets in the screen', function () {
    return __awaiter(this, void 0, void 0, function* () {
        let uiAssetsCount = yield ainv_utils.getTotalNoOfRecs();
        yield db.connectToDb();
        let dbCount = yield db.fetchCountOfRecs('select count(*) from asset_dfn');
        yield db.endConn();
        console.log("Assets Count in UI is: " + uiAssetsCount + " And Assets Count in DB is: " + dbCount);
        expect(uiAssetsCount).to.equal(Number(dbCount));
    });
});
(0, cucumber_1.Then)('I should be able to see {string} is selected as default sortby option', (string) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Sortby is descending?: " + (yield (0, protractor_1.element)(protractor_1.by.cssContainingText('mat-icon', "arrow_downward")).isPresent()));
    assetCode = yield protractor_1.element.all(protractor_1.by.css("span.mat-cell")).first().getText();
    console.log("Asset Code is: =>" + assetCode);
    let firstAssetCode = yield (0, protractor_1.element)(protractor_1.by.css("span.mat-cell")).getText();
    yield db.connectToDb();
    let assCodeUI = yield db.fetchMaxOrMinOf('select asdn_code from asset_dfn order by asdn_code desc limit 1 offset 0');
    yield ainv_utils.getAssetViewDetails(assetCode, "Asset Details");
    yield ainv_utils.getAssetViewDetails(assetCode, "Network");
    yield ainv_utils.getAssetViewDetails(assetCode, "Warehouse");
    yield ainv_utils.getAssetViewDetails(assetCode, "Purchase Order");
    // await ainv_utils.validateViolationsDetails(assetCode);
    // await db.connectToDb();
    // await db.runQuery(await queries.getViolationQuery(assetCode));
    // await ainv_utils.navigateToTab("Asset view");
    // await ainv_utils.navigateToTab("Violations");
    // await ainv_utils.navigateToTab("History");
    // await ainv_utils.navigateToTab("Contracts");
    expect(firstAssetCode).to.equal(assCodeUI);
}));
(0, cucumber_1.When)('I expand {int} row asset details', (n) => __awaiter(void 0, void 0, void 0, function* () {
    nthRow = yield ainv.getNthRow(n);
    yield protractor_1.browser.wait(EC.visibilityOf(nthRow));
    yield ainv_utils.expandAssetRec(nthRow);
}));
(0, cucumber_1.When)('I navigate to {string} tab', (string) => __awaiter(void 0, void 0, void 0, function* () {
    yield ainv_utils.navigateToTab(string, nthRow);
    // let violationRows = nthRow.all(by.css("#mat-tab-content-0-1 tbody>tr")); 
    // let n = await violationRows.count();
    // console.log("\nTotal number of violations in UI: "+n+"\n");  
}));
(0, cucumber_1.Then)('I should be able to see valid violation details of the asset', () => __awaiter(void 0, void 0, void 0, function* () {
    assetCode = yield nthRow.all(protractor_1.by.css("span.mat-cell")).first().getText();
    let success = yield ainv_utils.validateViolationsDetails(assetCode, nthRow);
    expect(success).to.equal(true);
}));
(0, cucumber_1.Then)('I should be able to see valid {string} of the Asset', (string) => __awaiter(void 0, void 0, void 0, function* () {
    // console.log(nthRow+" ===== "+assetCode);
    yield ainv_utils.validateAssetDetails(nthRow, assetCode, string);
}));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXNzZXRJbnZlbnRvcnlfc3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9TdGVwRGVmaW5pdGlvbnMvQXNzZXRJbnZlbnRvcnlfc3RlcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpREFBdUQ7QUFDdkQsMkNBQWlFO0FBQ2pFLDREQUF5RDtBQUN6RCxnREFBd0I7QUFDeEIsa0VBQStEO0FBQy9ELGtEQUErQztBQUMvQyxrRkFBK0U7QUFDL0Usa0VBQStEO0FBRy9ELElBQUksRUFBRSxHQUFHLElBQUksbUJBQVEsRUFBRSxDQUFDO0FBQ3hCLElBQUksRUFBRSxHQUFHLElBQUksK0JBQWMsRUFBRSxDQUFDO0FBQzlCLElBQUksTUFBTSxHQUFHLElBQUkseUJBQVcsRUFBRSxDQUFDO0FBQy9CLElBQUksTUFBTSxHQUFHLGNBQUksQ0FBQyxNQUFNLENBQUM7QUFDekIsSUFBSSxFQUFFLEdBQUcsb0JBQU8sQ0FBQyxrQkFBa0IsQ0FBQztBQUNwQyxJQUFJLElBQUksR0FBRyxJQUFJLCtCQUFjLEVBQUUsQ0FBQztBQUNoQyxJQUFJLFVBQVUsR0FBRyxJQUFJLG1EQUF3QixFQUFFLENBQUM7QUFDaEQsSUFBSSxNQUFxQixDQUFDO0FBQzFCLElBQUksU0FBaUIsQ0FBQztBQUV0QixJQUFBLGdCQUFLLEVBQUMscUNBQXFDLEVBQUUsQ0FBTyxNQUFNLEVBQUUsRUFBRTtJQUMxRCxJQUFJLE1BQU0sSUFBSSxLQUFLLEVBQUU7UUFDakIsTUFBTSxvQkFBTyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNDLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsaUNBQWlDLENBQUMsQ0FBQztLQUN4RDtBQUNMLENBQUMsQ0FBQSxDQUFDLENBQUM7QUFFSCxJQUFBLGVBQUksRUFBQyxzREFBc0QsRUFBRSxDQUFPLE1BQU0sRUFBRSxPQUFPLEVBQUUsRUFBRTtJQUNuRixNQUFNLG9CQUFPLENBQUMs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