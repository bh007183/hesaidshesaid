const X = require("./Class/X.js")
const playwright = require("playwright");

(async () => {
    const browser = await playwright.webkit.launch();  // Or 'chromium' or 'webkit'.
    // Create a new incognito browser context.
    const context = await browser.newContext();
   try{
    const page = await context.newPage();
    await page.goto('https://example.com');
  
    // Gracefully close up everything
    await context.close();
    await browser.close();
   } catch(err){
  console.log(err.message)
   }// Create a new page in a pristine context.

    // /////////////////////////////////////////////////////////////////////////
    // ///set quotes 
    // let url = "https://www.goodreads.com/author/quotes/17212.Marcus_Aurelius";
    // /////////////////////////////////////////////////////////////////////////
    // let author = url.split(".")[url.split(".").length - 1];
    // console.log("author = " + author);
    // //
    // await page.goto(url);


// const browser = await webkit.launch();
// console.log(browser.contexts().length); // prints `0`

// const context = await browser.newContext();
// console.log(browser.contexts().length);
})();