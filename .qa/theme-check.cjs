const { chromium } = require('C:/Users/chtal/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
(async()=>{
const browser=await chromium.launch({headless:true,executablePath:'C:/Users/chtal/AppData/Local/ms-playwright/chromium-1243/chrome-win64/chrome.exe'});
const page=await browser.newPage({viewport:{width:1440,height:1000}});const errors=[];page.on('pageerror',e=>errors.push(e.message));
await page.goto('http://localhost:3000',{waitUntil:'networkidle'});await page.waitForTimeout(1800);
await page.screenshot({path:'.qa/theme-desktop.png'});
const layouts=[];for(const width of [360,390,768,1440]){await page.setViewportSize({width,height:900});await page.waitForTimeout(200);layouts.push(await page.evaluate(()=>({width:innerWidth,scrollWidth:document.documentElement.scrollWidth,header:getComputedStyle(document.querySelector('header')).backgroundColor})));}
await page.setViewportSize({width:390,height:844});await page.screenshot({path:'.qa/theme-mobile.png'});
await page.getByRole('button',{name:'Open mobile menu'}).click();await page.screenshot({path:'.qa/theme-mobile-menu.png'});await page.keyboard.press('Escape');
await page.goto('http://localhost:3000/contact',{waitUntil:'networkidle'});await page.screenshot({path:'.qa/theme-contact.png'});
console.log(JSON.stringify({layouts,errors,contactHeading:await page.locator('main h1').innerText()},null,2));await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});

