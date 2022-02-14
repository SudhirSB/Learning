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
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const Calculator_1 = require("./pageObjects/Calculator");
// => is called fat wait, and is an alternative way of declaring an anonymous function. Is supported from ES6 or TS2
describe('Chain Locator Demo', () => {
    it('Open Angual JS page', () => __awaiter(void 0, void 0, void 0, function* () {
        let calc = new Calculator_1.Calculator();
        yield protractor_1.browser.get("http://juliemr.github.io/protractor-demo/");
        yield calc.firstBox.sendKeys("3");
        yield calc.secondBox.sendKeys("3");
        yield calc.go.click();
        calc.getResult.getText().then(function (text) {
            console.log(text);
        });
    }));
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVzdHNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi90ZXN0c3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJDQUFpRDtBQUNqRCx5REFBc0Q7QUFJdEQsb0hBQW9IO0FBQ3BILFFBQVEsQ0FBRSxvQkFBb0IsRUFBRSxHQUFFLEVBQUU7SUFFaEMsRUFBRSxDQUFFLHFCQUFxQixFQUFDLEdBQVEsRUFBRTtRQUVoQyxJQUFJLElBQUksR0FBRyxJQUFJLHVCQUFVLEVBQUUsQ0FBQztRQUU1QixNQUFNLG9CQUFPLENBQUMsR0FBRyxDQUFFLDJDQUEyQyxDQUFDLENBQUM7UUFDaEUsTUFBTSxJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNsQyxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBRW5DLE1BQU0sSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUV0QixJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFTLElBQUk7WUFDdkMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUMsQ0FBQSxDQUFDLENBQUE7QUFFTixDQUFDLENBQUMsQ0FBQSJ9