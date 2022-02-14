import { Given, Then, When } from "@cucumber/cucumber";
import { browser, by, element, ElementFinder } from "protractor";
import { CSLoginPage } from "../pageObjects/CSLoginPage";
import chai from "chai";
import { CommonServices } from "../pageObjects/CommonServices";
import { DbConfig } from "../Utility/DbConfig";
import { AssetInventory_Utilities } from "../Utility/AssetInventory_Utilities";
import { AssetInventory } from "../pageObjects/AssetInventory";
import { ViolationDetails_db } from "../pageObjects/ViolationDetails_db";

let db = new DbConfig();
let cs = new CommonServices();
let cspage = new CSLoginPage();
var expect = chai.expect;
let EC = browser.ExpectedConditions;
let ainv = new AssetInventory();
let ainv_utils = new AssetInventory_Utilities();
let nthRow: ElementFinder;
let assetCode: string;

Given('I will navigate to {string} website', async (string) => {
    if (string == 'NAM') {
        await browser.waitForAngularEnabled(false);
        await browser.get('http:/common-services-app:4201/');
    }
});

When('I enter {string}, {string} and click on login button', async (string, string2) => {
    await browser.wait(EC.visibilityOf(cspage.username), 10000);
    await cspage.username.sendKeys(string);
    await cspage.password.sendKeys(string2);
    await browser.wait(EC.visibilityOf(cspage.loginButton), 10000);
    await cspage.loginButton.click();
});

When('I click on the {string} link', async (string) => {
    await browser.wait(EC.visibilityOf(cs.sideNav));
    await browser.actions().mouseMove(cs.sideNav).perform();
    if (string == "Asset Management") {
        await cs.nam.click();
        await cs.assetManagement.click();
    }
});

Then('I should be navigated to {string} homepage', async (string: string) => {
    await browser.wait(EC.titleContains(string));
    console.log("Title of the browser is: " + await browser.getTitle());
    let title = await browser.getTitle();
    await expect(title).to.equal(string);
});

Then('I should be able to see total number of assets in the screen', async function () {
    let uiAssetsCount = await ainv_utils.getTotalNoOfRecs();
    await db.connectToDb();
    let dbCount = await db.fetchCountOfRecs('select count(*) from asset_dfn');
    await db.endConn();
    console.log("Assets Count in UI is: " + uiAssetsCount + " And Assets Count in DB is: " + dbCount);
    expect(uiAssetsCount).to.equal(Number(dbCount));
});

Then('I should be able to see {string} is selected as default sortby option', async (string) => {
    console.log("Sortby is descending?: " + await element(by.cssContainingText('mat-icon', "arrow_downward")).isPresent());
    assetCode = await element.all(by.css("span.mat-cell")).first().getText();
    console.log("Asset Code is: =>" + assetCode);
    let firstAssetCode = await element(by.css("span.mat-cell")).getText();
    await db.connectToDb();
    let assCodeUI = await db.fetchMaxOrMinOf('select asdn_code from asset_dfn order by asdn_code desc limit 1 offset 0');

    await ainv_utils.getAssetViewDetails(assetCode,"Asset Details");
    await ainv_utils.getAssetViewDetails(assetCode,"Network");
    await ainv_utils.getAssetViewDetails(assetCode,"Warehouse");
    await ainv_utils.getAssetViewDetails(assetCode,"Purchase Order");

    // await ainv_utils.validateViolationsDetails(assetCode);

    // await db.connectToDb();
    // await db.runQuery(await queries.getViolationQuery(assetCode));

    // await ainv_utils.navigateToTab("Asset view");
    // await ainv_utils.navigateToTab("Violations");
    // await ainv_utils.navigateToTab("History");
    // await ainv_utils.navigateToTab("Contracts");

    expect(firstAssetCode).to.equal(assCodeUI);

});


When('I expand {int} row asset details', async (n: number) => {
    nthRow = await ainv.getNthRow(n);
    await browser.wait(EC.visibilityOf(nthRow));
    await ainv_utils.expandAssetRec(nthRow);
});

When('I navigate to {string} tab', async (string) => {
    await ainv_utils.navigateToTab(string, nthRow);

    // let violationRows = nthRow.all(by.css("#mat-tab-content-0-1 tbody>tr")); 
    // let n = await violationRows.count();
    // console.log("\nTotal number of violations in UI: "+n+"\n");  
});

Then('I should be able to see valid violation details of the asset', async () => {
    assetCode = await nthRow.all(by.css("span.mat-cell")).first().getText();
    let success = await ainv_utils.validateViolationsDetails(assetCode, nthRow);
    expect(success).to.equal(true);
});

Then('I should be able to see valid {string} of the Asset', async (string)=> {
    await ainv_utils.validateAssetDetails(nthRow,assetCode, string);
});