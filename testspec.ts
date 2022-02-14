import { browser, by, element } from "protractor"
import { Calculator } from "./pageObjects/Calculator";



// => is called fat wait, and is an alternative way of declaring an anonymous function. Is supported from ES6 or TS2
describe ('Chain Locator Demo', ()=>{

    it ('Open Angual JS page',async ()=>{

        let calc = new Calculator();

        await browser.get ("http://juliemr.github.io/protractor-demo/");
        await calc.firstBox.sendKeys("3");
        await calc.secondBox.sendKeys("3");

        await calc.go.click();

        calc.getResult.getText().then(function(text){
            console.log(text);
        })
    })

})