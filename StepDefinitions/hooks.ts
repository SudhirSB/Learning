import { After, Before, Status } from "@cucumber/cucumber";
import { browser } from "protractor";


Before(function () {
    console.log("This methods is before the first test");
    browser.manage().window().maximize();
});

Before({tags: "@SecondTest"}, function () {
    console.log("This methods is before the second test");
});

After(async function (scenario) {
    if (scenario.result.status == Status.FAILED){
        const screenshot = await browser.takeScreenshot();
        this.attach(screenshot,"image/png");
    }
});

