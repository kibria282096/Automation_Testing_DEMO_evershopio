class ProductObjects{
    ProductFormList(productName){
        return $(`(//span[contains(text(),'${productName}')])[2]`);
    }
    productVariation(variation){
        return $(`//a[@href='#' and text()='${variation}']`);
    }
    get productQty(){
        return $(`//input[@name='qty']`);
    }
    get buttonAddtoCart(){
        return $("//button/span[contains(text(), 'ADD TO CART')]");
    }
}
module.exports = new ProductObjects();