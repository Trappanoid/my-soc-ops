import puppeteer from 'puppeteer';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function captureScreenshots() {
  let browser;
  try {
    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();

    // Define viewport sizes
    const viewports = [
      { name: 'mobile-375x812', width: 375, height: 812 },
      { name: 'tablet-768x1024', width: 768, height: 1024 },
      { name: 'desktop-1920x1080', width: 1920, height: 1080 }
    ];

    // Navigate to the app
    await page.goto('http://localhost:5174', { waitUntil: 'networkidle2' });

    // Click start button to get to game board
    try {
      const startButton = await page.$('button');
      if (startButton) {
        await startButton.click();
        await page.evaluate(() => new Promise(resolve => setTimeout(resolve, 500)));
      }
    } catch (e) {
      console.log('Could not find or click start button');
    }

    // Take screenshots at each viewport size
    for (const viewport of viewports) {
      console.log(`Capturing ${viewport.name}...`);
      await page.setViewport({ width: viewport.width, height: viewport.height });
      await page.evaluate(() => new Promise(resolve => setTimeout(resolve, 300)));

      const screenshotPath = path.join(__dirname, 'screenshots', `${viewport.name}.png`);
      await page.screenshot({ path: screenshotPath, fullPage: true });
      console.log(`✓ Saved: ${screenshotPath}`);
    }

    console.log('All screenshots captured successfully!');
  } catch (error) {
    console.error('Error capturing screenshots:', error);
    process.exit(1);
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

captureScreenshots();
