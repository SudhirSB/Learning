import {browser, element, by, ElementFinder} from "protractor";
import { AssetInventory } from "../pageObjects/AssetInventory";
import {CommonServices} from "../pageObjects/CommonServices";
import {DbConfig} from "./DbConfig";
import {Queries} from "./Queries";
import {CSLoginPage} from "../pageObjects/CSLoginPage";
import * as chai from "chai";
import {ViolationDetails_db} from "../pageObjects/ViolationDetails_db";

let db = new DbConfig();
let cs = new CommonServices();
let queries = new Queries();
let cspage = new CSLoginPage();
var expect = chai.expect;
let EC = browser.ExpectedConditions;
let ainv = new AssetInventory();
let firstRow = ainv.firstRow;



export class AssetInventory_Utilities {

    public async getTotalNoOfRecs(): Promise<number> {
        browser.wait(EC.visibilityOf(element(by.css("div.nam-toolbar-left-details-section > p"))),5000);
        let text = await element(by.css("div.nam-toolbar-left-details-section > p")).getText();
        let textDet = text.split(" ");
        return Number(textDet[3]);
    }

    public async expandAssetRec(row:ElementFinder): Promise<ElementFinder>{
        browser.wait(EC.visibilityOf(row));
        let expandButton:ElementFinder = await row.element(by.css("mat-expansion-panel-header span.mat-expansion-indicator"));

        let expanded:boolean = await row.element(by.css("span[style*='180deg']")).isPresent();
        console.log("Expanded? => "+expanded);
        
        if (expanded){
            console.log("First row expand button is already clicked");
        }else {
            await expandButton.click();
        }
        return row;
    }

    public async navigateToTab(tab:string, nthRow:ElementFinder){
        await browser.wait(EC.visibilityOf(nthRow.element(by.cssContainingText("div[role='tab']",tab))));
        await nthRow.element(by.cssContainingText("div[role='tab']",tab)).click();
        console.log(await nthRow.element(by.cssContainingText("div[role='tab']",tab)).getText());
    }

    public async getAssetViewDetails(assetCode:string,string:string){      
        let section:string;
        await db.connectToDb();
        let output:JSON[] = await db.fetchViolationsFromDB(assetCode);
        // let x = output.length;
        // console.log("Total Number of"+ +" in the DB: "+x);

        if(string == "Asset Details"){
            section = 'div.asset-float-child';
        }else if (string == "Network"){
            section = 'div.network-float-child';
        }else if(string == "Warehouse"){
            section = 'div.warehouse-float-child1';
        }else if(string == "Purchase Order"){
            section = 'div.purchaseorder-float-child1';
        }
        
        let assetRec:ElementFinder = await element(by.css("mat-expansion-panel:nth-child(1)"));
        await browser.wait(EC.visibilityOf(assetRec.element(by.css("div[aria-selected='true']"))));
        console.log ("We are in the tab: "+await assetRec.element(by.css("div[aria-selected='true']")).getText());
        let assetDetails:ElementFinder = assetRec.element(by.css(section));
        
        console.log("\n"+await assetDetails.element(by.css("p")).getText());
            
        await assetDetails.all(by.css("div.row div.col")).each(async (columns)=>{
                let assetDetailsMAP = new Map();
                if (await columns.element(by.tagName("label")).isPresent()){
                    // console.log(await columns.element(by.tagName("label")).getText());
                    let columnText = await columns.getText();
                    let spltVal =columnText.split(":");
                    if (spltVal[1].trim() == '-' || spltVal[1].trim() == ""){
                        spltVal[1] = "";
                    }
                    assetDetailsMAP.set(spltVal[0],spltVal[1]);
                    
                    for (let [key, value] of assetDetailsMAP){
                        console.log("Key is: "+key+"\tValue is: "+value);
                    }
                }
        })
    }


    public async validateViolationsDetails(assetCode:string,row:ElementFinder): Promise<boolean>{     
        let violationRows = row.all(by.css("#mat-tab-content-0-1 tbody>tr"));      
        let n = await violationRows.count();
        let valSuccess:boolean = true;
        console.log("Received Asset Code is: "+assetCode);


        await db.connectToDb();
        let output:JSON[] = await db.fetchViolationsFromDB(assetCode);
        console.log("Is this the length? ====> "+output.length);
        let x = output.length;
        console.log("Total Number of violations in the DB: "+x);

        if (n == x){
            console.log("Total Number of violations in the UI and DB are same");

            for (let i=0; i<n; i++){
                let columnSize = await violationRows.get(i).all(by.tagName("td")).count();
                let newOutput = Object.assign(new ViolationDetails_db(),output[i]);
                let dbRow:string = newOutput.severity+newOutput.alert_type+newOutput.alert_raised_on+newOutput.last_updated_on+newOutput.alert_text;
                // console.log(i+" row's data from DB is: "+dbRow);

                let violation_row:string = "";
                let colText:string;
    
                for (let j=0; j<columnSize; j++){
                    colText = await violationRows.get(i).all(by.tagName("td")).get(j).getText();
                    violation_row += colText;
                }

                // console.log(i+" row's data from UI is: "+violation_row);
                
                if (dbRow.trim() == violation_row.trim()){
                    console.log(i+" row violation data in both UI and DB is same\n");
                }else {
                    valSuccess = false;
                    console.log("Not equal");
                }
                
                // console.log(i+" row's data from UI is: ||"+violation_row.trim()+"||");
                // console.log(i+" row's data from DB is: ||"+dbRow.trim()+"||");
                // expect(violation_row.trim()).to.equal(Number(dbRow.trim()));
               
            }
        }else {
            console.log("Number of rows in UI: "+n);
            console.log("Number of rows in DB: "+x);
        }

        return valSuccess;
    }

    public async validateAssetDetails(nthRow:ElementFinder,assetCode:string,string:string){
        let section:string;
        await db.connectToDb();
        let asdnId = await db.fetchAsdnId(assetCode);


        if(string == "Asset Details"){
            section = 'div.asset-float-child';
        }else if (string == "Network"){
            section = 'div.network-float-child';
        }else if(string == "Warehouse"){
            section = 'div.warehouse-float-child1';
        }else if(string == "Purchase Order"){
            section = 'div.purchaseorder-float-child1';
        }

        await browser.wait(EC.visibilityOf(nthRow.element(by.css("div[aria-selected='true']"))));
        console.log ("We are in the tab: "+await nthRow.element(by.css("div[aria-selected='true']")).getText());
        let assetDetails:ElementFinder = nthRow.element(by.css(section));
        
        console.log("\n"+await assetDetails.element(by.css("p")).getText());
        let assetDetailsMAP = new Map();
        let uiDetails:string = "";  
        await assetDetails.all(by.css("div.row div.col")).each(async (columns)=>{
                
                if (await columns.element(by.tagName("label")).isPresent()){
                    // console.log(await columns.element(by.tagName("label")).getText());
                    let columnText = await columns.getText();
                    let spltVal =columnText.split(":");
                    if (spltVal[1].trim() == '-' || spltVal[1].trim() == ""){
                        spltVal[1] = "";
                    }
                    assetDetailsMAP.set(spltVal[0],spltVal[1]);
                    
                    for (let [key, value] of assetDetailsMAP){
                        console.log("Key is: "+key+"\tValue is: "+value);
                        uiDetails += value;
                    }
                }
        })

        console.log(`\nUI details for ${string} is ${uiDetails.trim()}\n`);

    }

}