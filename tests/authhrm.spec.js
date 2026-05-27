import {test,expect}  from '@playwright/test';

    test('HRM Login Test',async({page})=>{
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await page.locator('input[name="username"]').fill('Admin');
        await page.locator('input[name="password"]').fill('admin123');
        await page.locator('button[type="submit"]').click();
        await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
        console.log('Tesing PR 3');
    });

    test('Add Employee Test',async({page})=>{
    await page.getByRole('link',{name:'Recruitment'}).click();
    await page.getByRole('button',{name:'Add'}).click();
    await page.locator('input[name="firstName"]').fill('John');
    await page.locator('input[name="lastName"]').fill('Doe');
    await page.locator('input[name="employeeId"]').fill('12345');
    await page.locator('button[type="submit"]').click();
    await expect(page.locator('text=John Doe')).toBeVisible();

 });
