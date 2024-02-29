import { Google } from "./googlePage";
const fs = require('fs'); 
const page = new Google(); 

test('do a search', async () => {
    await page.navigate(); 
    await page.search('Dog Harness'); 
    let pageResults = await page.getResults(); 
    expect(pageResults).toContain('Dog Harness'); 
    await fs.writeFile(`${__dirname}/dogHarness.png`, 
    await page.driver.takeScreenshot(), "base64", 
    (e) => {
        if (e) console.error(e)
        else console.log('Picture saved'); 
    }); 
    await page.driver.quit(); 
}); 