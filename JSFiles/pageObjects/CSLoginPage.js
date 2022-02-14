"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CSLoginPage = void 0;
const protractor_1 = require("protractor");
class CSLoginPage {
    constructor() {
        this.username = (0, protractor_1.element)(protractor_1.by.id("username"));
        this.password = (0, protractor_1.element)(protractor_1.by.id("password"));
        this.loginButton = (0, protractor_1.element)(protractor_1.by.id("kc-login"));
    }
}
exports.CSLoginPage = CSLoginPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ1NMb2dpblBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlT2JqZWN0cy9DU0xvZ2luUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyQ0FBd0Q7QUFFeEQsTUFBYSxXQUFXO0lBTXBCO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDbEQsQ0FBQztDQUdKO0FBYkQsa0NBYUMifQ==