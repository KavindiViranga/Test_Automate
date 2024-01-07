const {test, expect}= require('@playwright/test')

test ("Verify error message",async function({page})
{
    await page.goto("https://onlinelibrary.wiley.com/")

    await page.getByPlaceholder("Enter your email").type("admin@gmail.com")

    await page.locator("input[name='password']").type("admin234")

    await page.locator("//button[@type='submit']").click()

    const errorMessage=await page.locator("//p[contains(@class,'message error ')]").textContent()
    console.log("Error message is "+errorMessage);
})