const productActions = require("../test/product/productActions");
const size = "L";
const color = "Black";
const qty = 2;
describe("Demo QA - Product Test Suite",()=>{
    it("Successfully add a product into the cart", async()=>{
        await browser.url("https://demo.evershop.io/men/nike-air-zoom-pegasus-35-146");
        //await productActions.selectProduct("Nike zoom");
        await productActions.selectVariation(size, color);
        await productActions.enterProductQty(qty);
        await productActions.clickAddToCartButton();
    });
});