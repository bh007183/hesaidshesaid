


(async () => {
  

   
    const { chromium, devices, firefox, webkit } = require("playwright");
    
  
   
    const browser = await webkit.launch({ headless: false, slowMo: 50 });
    const context = await browser.newContext(devices["iPhone 16"]);
    const page = await context.newPage();
    /////////////////////////////////////////////////////////////////////////
    ///set quotes 
    let url = "https://x.com/elonmusk";
    /////////////////////////////////////////////////////////////////////////
   
    await page.goto(url);



    
  
    
  })();



