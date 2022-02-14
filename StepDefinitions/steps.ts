
// import { Given, Then, When } from "@cucumber/cucumber";
// import { browser, by, element, ExpectedConditions } from "protractor";
// import { Calculator } from "../pageObjects/Calculator";
// import { CSLoginPage } from "../pageObjects/CommonServiceLoginPage";
// import chai from "chai";
// import { CommonServices } from "../pageObjects/CommonServices";
// import { AssetInventory } from "../pageObjects/Asset_Inventory";
// import {Pool, Client} from "pg";

// let queryColRes;
// let uiAssetsCount;

// const client = new Client({
//     user:'postgres',
//     host:'10.113.113.81',
//     database:'testdb',
//     password:'postgres',
//     port: 5431
// });


// let calc = new Calculator();
// let cspage = new CSLoginPage();
// let cs = new CommonServices();
// var expect = chai.expect;
// let title;
// let EC = browser.ExpectedConditions;
// let ainv = new AssetInventory();
// let totalNoOfRecs;

// Given('I will navigate to {string} website', async(string)=> {
//     // Write code here that turns the phrase above into concrete actions
//     if (string == "Calc"){
//         await browser.get ("http://juliemr.github.io/protractor-demo/");
//     } else if (string == 'NAMCS'){
//         await browser.waitForAngularEnabled(false);
//         await browser.get ('http://common-services-app:4201');
//     } else if (string == 'HS'){
//         await browser.waitForAngularEnabled(false);
//         await browser.get ('https://namstaging.hypersense.ai:32752/namstaging/common-services-client/');
//     }else if (string == 'NAM-AM'){
//         await browser.waitForAngularEnabled(false);
//         await browser.get ('http://asset-management-app:4209/');
//     }
// });

// When('I add two numbers {string} and {string}', async (string, string2)=> {
//     // Write code here that turns the phrase above into concrete actions
//     await calc.firstBox.sendKeys(string);
//     await calc.secondBox.sendKeys(string2);
// });

// //NAM Login
// When('I enter {string}, {string} and click on login button', async (string, string2)=> {
//     await browser.wait(EC.visibilityOf(cspage.username), 5000);
//     await cspage.username.sendKeys(string);
//     await cspage.password.sendKeys(string2);
//     await cspage.loginButton.click();
//   });

//   //DMS Navigation
// When('I click on the {string} link', async (string)=> {
//   // Write code here that turns the phrase above into concrete actions
//   await browser.wait(EC.visibilityOf(cs.sideNav));
//   await browser.actions().mouseMove(cs.sideNav).perform();
//   await cs.dms.click();
// });  



// Then('The output displayed should be {string}', async (string)=> {
//     // Write code here that turns the phrase above into concrete actions
//     await calc.go.click();

//     await calc.getResult.getText().then(function(text){
//         expect(text).to.equal(string);
//     })
// });

// //NAM, DMS homepage
// Then('I should be navigated to {string} homepage', async (string)=> {
//     // Write code here that turns the phrase above into concrete actions
//     if (string == 'Common-Services'){
//         let title = await browser.getTitle();
//         await expect(title).to.equal(string);
//     }else if (string == 'Data Management'){
//         await browser.wait(EC.urlContains('dms-client'), 5000);
//         await console.log("Title of the browser is: "+await browser.getTitle());
//         let titleDMS = await browser.getTitle();
//         await expect(titleDMS).to.equal(string);
//         await browser.wait(EC.visibilityOf(element(by.css(".headline"))), 5000);
//         await console.log("Headline of the page is: "+ await element(by.css(".headline")).getText());
//         let headlineDMS = await element(by.css(".headline")).getText();
//         await expect(headlineDMS).to.equal('Pipeline Repository');
//     }
    
// });

// //NAM number of assets
// Then('I should be able to see total number of assets in the screen',async function () {
//     // Write code here that turns the phrase above into concrete actions

//     uiAssetsCount = await ainv.getTotalNoOfRecs();

//         await client.connect();

//         await client
//             .query('select count(*) from asset_dfn')
//             .then(res => {
//                 queryColRes = res.rows[0].count // ['brianc']
//             })
//             .catch(e => {
//             console.error(e.stack)
//             })

//             await client.end();
        
//         console.log("UI Assets Count is: "+uiAssetsCount+" DB Assets Count is: "+queryColRes);
//         expect(uiAssetsCount).to.equal(Number (queryColRes));

//   });

// //DMS pipeline selection and export
// // Then(/^I select the pipeline with name "([^"]*)" and "([^"]*)"$/, async()=> {
// //     // #mat-expansion-panel-header-0 > span > mat-panel-description > div.description > div:nth-child(1) > div.prop-value > span
// //     element.all(by.css("mat-panel-description")).each(async (item)=>{
// //         console.log(await item.element(by.css('div.description > div:nth-child(1) > div.prop-value')).getText());
// //     });

// // });

// When('I select the pipeline with name {string}', async (string)=> {
//     // Write code here that turns the phrase above into concrete actions
//     await element.all(by.css("div.description > div:nth-child(1)")).each(async (item)=>{
//         console.log("Pipeline name is: "+await item.element(by.css("div.prop-value")).getText());
//         let text = await item.element(by.css("div.prop-value")).getText();
        

//     });
// });
