const searchActions = require("../test/search/searchActions");
const productActions = require("../test/product/productActions");
const productName = "Nike air zoom pegasus 35";
const size = "L";
const color = "Black";
const qty = 2;

describe("Evershop website automation suite",()=>{
    it("Successfully search a valid product,", async()=>{
        await searchActions.search(productName);
        await browser.pause(5000);
    });
    xit("Successfully add a product into the cart", async()=>{
            //await browser.url("https://demo.evershop.io/men/nike-air-zoom-pegasus-35-146");
            await productActions.selectProduct(productName);
            await productActions.selectVariation(size, color);
            await productActions.enterProductQty(qty);
            await productActions.clickAddToCartButton();
        });
});