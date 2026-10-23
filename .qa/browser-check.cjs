const { chromium } = require('C:/Users/chtal/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
(async()=>{
const browser=await chromium.launch({headless:true,executablePath:'C:/Users/chtal/AppData/Local/ms-playwright/chromium-1243/chrome-win64/chrome.exe'});
const page=await browser.newPage({viewport:{width:1440,height:1000}});const errors=[];page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error')errors.push(m.text())});
await page.goto('http://localhost:3100',{waitUntil:'networkidle'});
await page.locator('.brand-loader').waitFor({state:'hidden'});await page.screenshot({path:'.qa/desktop-hero.png'});
const widths=[320,375,390,414,480,768,1024,1280,1440,1920,2560];const layouts=[];
for(const width of widths){await page.setViewportSize({width,height:900});await page.waitForTimeout(120);layouts.push(await page.evaluate(()=>({width:innerWidth,scrollWidth:document.documentElement.scrollWidth,overflow:Array.from(document.querySelectorAll('main *')).filter(e=>{const r=e.getBoundingClientRect();const s=getComputedStyle(e);return r.width>0&&s.position!=='fixed'&&s.visibility!=='hidden'&&(r.right>innerWidth+2||r.left < -2)&&!e.closest('.leaflet-container')}).slice(0,8).map(e=>({tag:e.tagName,class:e.className}))})));}
await page.setViewportSize({width:390,height:844});await page.screenshot({path:'.qa/mobile-hero.png'});
await page.getByRole('button',{name:'Open mobile menu'}).click();await page.screenshot({path:'.qa/mobile-menu.png'});await page.keyboard.press('Escape');
const faq=page.locator('#faq button').nth(1);await faq.click();const faqWorks=await faq.getAttribute('aria-expanded');
const range=page.getByRole('slider',{name:'Before and after image comparison'});await range.focus();await page.keyboard.press('End');const rangeEnd=await range.inputValue();await page.keyboard.press('Home');const rangeHome=await range.inputValue();
await page.getByRole('button',{name:'View photo:',exact:false}).first().click();await page.keyboard.press('ArrowRight');const viewer=await page.locator('.lightbox-top').innerText();await page.keyboard.press('Escape');
await page.getByLabel('Full name').fill('QA Test');await page.getByLabel('Phone number').fill('5551234567');await page.getByLabel('Email address').fill('test@example.com');await page.locator('#estimate-city').selectOption({index:1});await page.getByLabel('Service needed').selectOption({index:1});await page.getByRole('button',{name:'Prepare Estimate Request'}).click();const honestForm=await page.getByText('Your request is ready — not yet sent').isVisible();
await page.setViewportSize({width:1440,height:1000});
for(const section of ['services','about','gallery','before-after','service-areas','testimonials','contact','faq']){await page.locator('#'+section).scrollIntoViewIfNeeded();await page.waitForTimeout(550);await page.screenshot({path:'.qa/desktop-'+section+'.png'});}
await page.evaluate(()=>window.scrollTo(0,0));await page.screenshot({path:'.qa/full-desktop.png',fullPage:true});
const brokenImages=await page.locator('img').evaluateAll(imgs=>imgs.filter(i=>i.complete&&i.naturalWidth===0).map(i=>i.src));
const badAnchors=await page.locator('a[href^="#"]').evaluateAll(as=>as.filter(a=>!document.getElementById(a.getAttribute('href').slice(1))).map(a=>a.getAttribute('href')));
console.log(JSON.stringify({layouts,errors,faqWorks,rangeEnd,rangeHome,viewer,honestForm,brokenImages,badAnchors},null,2));
await browser.close();
})().catch(e=>{console.error(e);process.exit(1)});
