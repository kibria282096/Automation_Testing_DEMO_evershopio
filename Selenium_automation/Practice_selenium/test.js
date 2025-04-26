import { By, Builder, Browser, Key } from "selenium-webdriver";
import { expect } from "chai";

const productColor = ['Red', 'Black', 'Green', 'Blue'];
const productSize = ['M','L'];
const productName = "Nike air zoom pegasus 35";

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

async function testRun() {
    let driver = await new Builder().forBrowser(Browser.CHROME).build();
    await driver.manage().window().maximize();
    await driver.get("https://demo.evershop.io/");
    
    await driver.findElement(By.className('search-icon')).click();
    await driver.findElement(By.xpath("//input[@placeholder='Search']")).sendKeys(productName, Key.ENTER);
    await driver.sleep(2000);

    const getProduct = `(//span[contains(text(),'Nike air zoom pegasus 35')])[${getRandomInt(2,3)}]`;
    const actualValue = await driver.findElement(By.xpath(getProduct)).getText();

    // Use 'include' instead of strict equality to handle additional text
    //expect(actualValue.toLowerCase()).to.include(productName.toLowerCase());
    expect(productName).to.eql(actualValue);
    await driver.findElement(By.xpath(getProduct)).click();
    let color = productColor[getRandomInt(0,3)];
    let size = productSize[getRandomInt(0,1)];
    const getSize = `//a[contains(text(),'${size}') and @href="#"]`;
    await driver.findElement(By.xpath(getSize)).click();
    await driver.sleep(2000);
    const getColor = `//a[contains(text(),'${color}') and @href="#"]`;
    await driver.findElement(By.xpath(getColor)).click();
    await driver.sleep(2000);
    await driver.quit();
}

testRun();
