const webdriver = require('selenium-webdriver'), by = webdriver.By,
    until = webdriver.until, key = webdriver.Key;

const driver = new webdriver.Builder()
    .forBrowser('firefox')
    .build();
const result = async (number) => {


    await driver.get('https://www.jio.com/selfcare/recharge/mobility/');

    await driver.findElement(by.xpath('//input[@data-testid="jInput-id"]')).sendKeys(`${number}`, key.RETURN)
    let button = await driver.wait(until.elementLocated(by.xpath('//button[. = "4G Data Voucher"]'), 10000));
    await button.click();

    const plan = await (await driver.findElement(by.xpath('(//div[@class="css-7h7wp6"])[1]'))).getText();


    if (plan === '`101') {
        return "Number is active";
    }

    else {
        return "Number deactivated";
    }
    /* driver.quit(); */
}
module.exports = result;
