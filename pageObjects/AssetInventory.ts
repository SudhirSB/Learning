import { browser, by, element, ElementFinder } from "protractor";
import { DbConfig } from "../Utility/DbConfig";
import { Queries } from "../Utility/Queries";
import { Client } from "pg";

let EC = browser.ExpectedConditions;
let db = new DbConfig();
let queries = new Queries();
let client:Client;

export class AssetInventory {

    totalNoOfRecords:ElementFinder;
    firstRow:ElementFinder;
    sideNav:ElementFinder;
    nthRow: ElementFinder;
    
    constructor(){
        this.totalNoOfRecords = element(by.css("div.nam-toolbar-left-details-section > p"));
        this.firstRow = element(by.css("mat-expansion-panel:nth-child(1)"));
        this.sideNav = element(by.css("div.mat-drawer-inner-container"));
    }

    public async getNthRow(n:number): Promise<ElementFinder>{
        this.nthRow = element(by.css("mat-expansion-panel:nth-child("+n+")"));
        return this.nthRow;
    }

}