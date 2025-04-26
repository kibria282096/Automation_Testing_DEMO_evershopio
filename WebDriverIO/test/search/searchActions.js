const searchObject = require("./searchObject");

class searchActions{
    async clickSearchIcon(){
        await searchObject.searchIcon.click();
    }
    async searchProductName(productName){
        await searchObject.searchInputField.setValue(productName);

    }
    async search(productName){
        await this.clickSearchIcon();
        await this.searchProductName(productName);
        await browser.keys("Enter");
    }

}
module.exports = new searchActions();