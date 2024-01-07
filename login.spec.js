const {test, expect}=require("@playwright/test")

test("Valid login",async function({page}){
    await page.goto("https://onlinelibrary.wiley.com/")

    await page.getByPlaceholder("Enter your email").type("admin@gmail.com")

    await page.locator("input[name='password']").type("admin234")

    await page.locator("//button[@type='submit']").click()

    await expect(page).toHaveURL(/dashboard/);
})