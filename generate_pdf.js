import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('file:///D:/Suman_Portfolio/resume.html', {waitUntil: 'networkidle0'});
  await page.pdf({path: 'D:/Suman_Portfolio/Suman_Banerjee_Resume.pdf', format: 'A4', margin: {top: '0.4in', right: '0.5in', bottom: '0.4in', left: '0.5in'}});
  await browser.close();
})();
