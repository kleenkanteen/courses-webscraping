const puppeteer = require('puppeteer-core');

(async () => {
    // set some options (set headless to false so we can see 
    // this automated browsing experience)
    let launchOptions = { headless: false, 
                          executablePath: 'C:/Program Files (x86)/Google/Chrome/Application/chrome.exe', // because we are using puppeteer-core so we must define this option
                          args: ['--start-maximized'] };

    const browser = await puppeteer.launch(launchOptions);
    const page = await browser.newPage();

    // set viewport and user agent (just in case for nice viewing)
    var dt = new Date();
    console.log(`${(dt.getMonth() + 1)}/${dt.getDate()}/${dt.getFullYear()}`);

    await page.setViewport({width: 1920, height: 1080});
    // go to the target web
    await page.goto('https://student.utm.utoronto.ca/timetable/');

    console.log(await browser.version());

    // select the input box with id yos-selectized and select the option with data-value="1"A
    // let curr_year = 0;
    // await page.click('#yos-selectized');
    // for (let i = 0; i < curr_year; i++) await page.keyboard.press('ArrowDown');
    // await page.keyboard.press('Enter');

    let curr_program = 0;
    // select the input box with id subjectarea-selectized and select the first 3 options
    await page.click('#subjectarea-selectized');
    for (let i = 0; i < curr_program; i++) await page.keyboard.press('ArrowDown');
    await page.keyboard.press('Enter');

    // Click the Search Courses button
    await page.click('#ttForm > div.col-md-12.text-center > div > button');

    // Assign a variable to the second child element of the element with id ttContent
    await page.waitForSelector('#ttContent > div:nth-child(2)');
    let ttContent = await page.$('#ttContent > div:nth-child(2)');
    // print content of the second child element of the element with id ttContent
    console.log(await ttContent.getProperty('innerText').then(x => x.jsonValue()));
    // > div:nth-child(2)
// let childs = await parent.$$(':scope > *');
    // console.log('childs');
    // Get third child of ttContent
    // const curr_course = await page.$eval('#ttContent', el => el[1]);
    // console.log(typeof(curr_course));

    // close the browser
    // await browser.close();
})();