const { test, expect } = require('@playwright/test');

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:8080/');
});

test.describe('Add and remove cart elements', () => {

    test('Add cart items', async ({ page }) => {
        await page.locator('#storeItems >> button >> nth=0').click();
        await page.locator('#storeItems >> button >> nth=2').click();
        await page.locator('#storeItems >> button >> nth=0').click();
        await page.locator('#storeItems >> button >> nth=1').click();
        await page.locator('#storeItems >> button >> nth=1').click();
        await page.locator('#storeItems >> button >> nth=2').click();

        await expect(page.locator('#cart > div')).toHaveCount(6);

        await page.locator('text=Remove').nth(1).click();

        await page.locator('text=Remove').nth(0).click();

        await expect(page.locator('#cart > div')).toHaveCount(4);
    });

    test('Check sum matches', async ({ page }) => {

        let storeItems = await page.locator('#storeItems > div');

        let storeItemsCount = await storeItems.count();

        let priceSum = 0;

        for (let i = 0; i < storeItemsCount; i++) {
            await page.locator('#storeItems > div >> nth=' + i + ' >> button').click();
            let itemPrice = await page.locator('#cart > div >> nth=' + i +' >> div >> div >> .item-price').innerText();
            priceSum = parseFloat(itemPrice) + priceSum;
        }

        let finalSum = await page.locator('#cartSum >> h4 >> nth=1').innerText();
        await expect(priceSum).toEqual(parseFloat(finalSum));
    });
});
