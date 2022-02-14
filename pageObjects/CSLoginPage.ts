import { by, element, ElementFinder } from "protractor";

export class CSLoginPage {

    username:ElementFinder;
    password:ElementFinder;
    loginButton:ElementFinder;

    constructor(){
        this.username = element(by.id("username"));
        this.password = element(by.id("password"));
        this.loginButton = element(by.id("kc-login"));
    }


}