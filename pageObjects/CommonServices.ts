import { by, element, ElementFinder } from "protractor";

export class CommonServices {
    
    sideNav:ElementFinder;
    dms:ElementFinder;
    nam:ElementFinder;
    assetManagement:ElementFinder;

    constructor(){
        this.sideNav = element(by.tagName('ngp-side-nav')).element(by.tagName('mat-sidenav'));
        this.dms = element(by.cssContainingText('.ngp-sidenav-main-menu-text','Data Management'));
        this.nam = element(by.cssContainingText('.ngp-sidenav-main-menu-text','NAM'));
        this.assetManagement = element(by.cssContainingText('div.ngp-sidebar-sub-menu-item-desc','Asset Management'));
    }


}