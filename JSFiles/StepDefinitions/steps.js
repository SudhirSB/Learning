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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcHMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9TdGVwRGVmaW5pdGlvbnMvc3RlcHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0EsMERBQTBEO0FBQzFELHlFQUF5RTtBQUN6RSwwREFBMEQ7QUFDMUQsdUVBQXVFO0FBQ3ZFLDJCQUEyQjtBQUMzQixrRUFBa0U7QUFDbEUsbUVBQW1FO0FBQ25FLG1DQUFtQztBQUVuQyxtQkFBbUI7QUFDbkIscUJBQXFCO0FBRXJCLDhCQUE4QjtBQUM5Qix1QkFBdUI7QUFDdkIsNEJBQTRCO0FBQzVCLHlCQUF5QjtBQUN6QiwyQkFBMkI7QUFDM0IsaUJBQWlCO0FBQ2pCLE1BQU07QUFHTiwrQkFBK0I7QUFDL0Isa0NBQWtDO0FBQ2xDLGlDQUFpQztBQUNqQyw0QkFBNEI7QUFDNUIsYUFBYTtBQUNiLHVDQUF1QztBQUN2QyxtQ0FBbUM7QUFDbkMscUJBQXFCO0FBRXJCLGlFQUFpRTtBQUNqRSwyRUFBMkU7QUFDM0UsNkJBQTZCO0FBQzdCLDJFQUEyRTtBQUMzRSxxQ0FBcUM7QUFDckMsc0RBQXNEO0FBQ3RELGlFQUFpRTtBQUNqRSxrQ0FBa0M7QUFDbEMsc0RBQXNEO0FBQ3RELDJHQUEyRztBQUMzRyxxQ0FBcUM7QUFDckMsc0RBQXNEO0FBQ3RELG1FQUFtRTtBQUNuRSxRQUFRO0FBQ1IsTUFBTTtBQUVOLDhFQUE4RTtBQUM5RSwyRUFBMkU7QUFDM0UsNENBQTRDO0FBQzVDLDhDQUE4QztBQUM5QyxNQUFNO0FBRU4sY0FBYztBQUNkLDJGQUEyRjtBQUMzRixrRUFBa0U7QUFDbEUsOENBQThDO0FBQzlDLCtDQUErQztBQUMvQyx3Q0FBd0M7QUFDeEMsUUFBUTtBQUVSLHFCQUFxQjtBQUNyQiwwREFBMEQ7QUFDMUQseUVBQXlFO0FBQ3pFLHFEQUFxRDtBQUNyRCw2REFBNkQ7QUFDN0QsMEJBQTBCO0FBQzFCLFFBQVE7QUFJUixxRUFBcUU7QUFDckUsMkVBQTJFO0FBQzNFLDZCQUE2QjtBQUU3QiwwREFBMEQ7QUFDMUQseUNBQXlDO0FBQ3pDLFNBQVM7QUFDVCxNQUFNO0FBRU4sc0JBQXNCO0FBQ3RCLHdFQUF3RTtBQUN4RSwyRUFBMkU7QUFDM0Usd0NBQXdDO0FBQ3hDLGdEQUFnRDtBQUNoRCxnREFBZ0Q7QUFDaEQsOENBQThDO0FBQzlDLGtFQUFrRTtBQUNsRSxtRkFBbUY7QUFDbkYsbURBQW1EO0FBQ25ELG1EQUFtRDtBQUNuRCxtRkFBbUY7QUFDbkYsd0dBQXdHO0FBQ3hHLDBFQUEwRTtBQUMxRSxxRUFBcUU7QUFDckUsUUFBUTtBQUVSLE1BQU07QUFFTix5QkFBeUI7QUFDekIsMEZBQTBGO0FBQzFGLDJFQUEyRTtBQUUzRSxxREFBcUQ7QUFFckQsa0NBQWtDO0FBRWxDLHVCQUF1QjtBQUN2Qix1REFBdUQ7QUFDdkQsNkJBQTZCO0FBQzdCLGdFQUFnRTtBQUNoRSxpQkFBaUI7QUFDakIsNEJBQTRCO0FBQzVCLHFDQUFxQztBQUNyQyxpQkFBaUI7QUFFakIsa0NBQWtDO0FBRWxDLGlHQUFpRztBQUNqRyxnRUFBZ0U7QUFFaEUsUUFBUTtBQUVSLHNDQUFzQztBQUN0QyxtRkFBbUY7QUFDbkYsc0lBQXNJO0FBQ3RJLDJFQUEyRTtBQUMzRSx1SEFBdUg7QUFDdkgsYUFBYTtBQUViLFNBQVM7QUFFVCxzRUFBc0U7QUFDdEUsMkVBQTJFO0FBQzNFLDJGQUEyRjtBQUMzRixvR0FBb0c7QUFDcEcsNkVBQTZFO0FBRzdFLFVBQVU7QUFDVixNQUFNIn0=