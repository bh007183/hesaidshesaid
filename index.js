


(async () => {
  
const nodemailer = require("./nodemailer")

   
    const { chromium, devices, firefox, webkit } = require("playwright");
    const browser = await webkit.launch({ headless: false, slowMo: 50 });
    const context = await browser.newContext(devices["iPhone 16"]);
    const page = await context.newPage();
    /////////////////////////////////////////////////////////////////////////
    ///set quotes 
    let url = "https://nationaltestingnetwork.com/publicsafetyjobs/candidate/candidate-login.cfm";
    /////////////////////////////////////////////////////////////////////////
   
    await page.goto(url);
    await page.getByLabel('Email').fill(process.env.EMAIL)
    await page.getByLabel('Password').fill(process.env.P)
    await page.locator('//*[@id="login-box"]/form/button').click()
    await page.locator('//*[@id="candidate-page"]/fieldset[1]/form/input[1]').click()
    await page.waitForSelector(".results-col")
    let states = await page.locator(".results-col")
    let washington = await states.filter({hasText: 'Washington'}).innerHTML()
   
    nodemailer.sendEmail(washington)
  
    
  })();



