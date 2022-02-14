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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29tbW9uU2VydmljZUxvZ2luUGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VPYmplY3RzL0NvbW1vblNlcnZpY2VMb2dpblBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsMkNBQXdEO0FBRXhELE1BQWEsV0FBVztJQU1wQjtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBQSxvQkFBTyxFQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUEsb0JBQU8sRUFBQyxlQUFFLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFBLG9CQUFPLEVBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQ2xELENBQUM7Q0FHSjtBQWJELGtDQWFDIn0=