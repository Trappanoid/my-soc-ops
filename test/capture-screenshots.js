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

    // 1. Capture home page (menu/StartScreen)
    console.log('\n=== Capturing Home Page ===');
    for (const viewport of viewports) {
      console.log(`Capturing home-${viewport.name}...`);
      await page.setViewport({ width: viewport.width, height: viewport.height });
      await page.evaluate(() => new Promise(resolve => setTimeout(resolve, 300)));

      const screenshotPath = path.join(__dirname, 'screenshots', `home-${viewport.name}.png`);
      await page.screenshot({ path: screenshotPath, fullPage: true });
      console.log(`✓ Saved: ${screenshotPath}`);
    }

    // 2. Capture Bingo mode
    console.log('\n=== Capturing Bingo Mode ===');
    try {
      // Click "PLAY BINGO" button
      await page.evaluate(() => {
        const buttons = Array.from(document.querySelectorAll('button'));
        const bingoButton = buttons.find(btn => btn.textContent?.includes('PLAY BINGO'));
        if (bingoButton) bingoButton.click();
      });
      
      await page.evaluate(() => new Promise(resolve => setTimeout(resolve, 500)));
      
      for (const viewport of viewports) {
        console.log(`Capturing bingo-${viewport.name}...`);
        await page.setViewport({ width: viewport.width, height: viewport.height });
        await page.evaluate(() => new Promise(resolve => setTimeout(resolve, 300)));

        const screenshotPath = path.join(__dirname, 'screenshots', `bingo-${viewport.name}.png`);
        await page.screenshot({ path: screenshotPath, fullPage: true });
        console.log(`✓ Saved: ${screenshotPath}`);
      }
      
      // Go back to menu
      await page.evaluate(() => {
        const buttons = Array.from(document.querySelectorAll('button'));
        const backButton = buttons.find(btn => btn.textContent?.includes('Reset') || btn.textContent?.includes('Back'));
        if (backButton) backButton.click();
      });
      await page.evaluate(() => new Promise(resolve => setTimeout(resolve, 500)));
    } catch (e) {
      console.log('Could not capture bingo mode:', e.message);
    }

    // 3. Capture Draw Cards mode
    console.log('\n=== Capturing Draw Cards Mode ===');
    try {
      // Click "DRAW CARDS" button
      await page.evaluate(() => {
        const buttons = Array.from(document.querySelectorAll('button'));
        const cardsButton = buttons.find(btn => btn.textContent?.includes('DRAW CARDS'));
        if (cardsButton) cardsButton.click();
      });
      
      await page.evaluate(() => new Promise(resolve => setTimeout(resolve, 500)));
      
      for (const viewport of viewports) {
        console.log(`Capturing cards-${viewport.name}...`);
        await page.setViewport({ width: viewport.width, height: viewport.height });
        await page.evaluate(() => new Promise(resolve => setTimeout(resolve, 300)));

        const screenshotPath = path.join(__dirname, 'screenshots', `cards-${viewport.name}.png`);
        await page.screenshot({ path: screenshotPath, fullPage: true });
        console.log(`✓ Saved: ${screenshotPath}`);
      }
    } catch (e) {
      console.log('Could not capture draw cards mode:', e.message);
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
