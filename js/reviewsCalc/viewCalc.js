const viewCalc = (function(){

    const DOMelements = {
        yandex: "#yandex",
        google: "#google",
        dvagis: "#dvagis",
        prodoktorov: "#prodoktorov",
        zoon: "#zoon",
        quantity: "#quantity",
        product: ".calc-product",
        section: ".reviews-calc__products",
        result: ".reviews-calc__result",
        price: ".calc-product__price--mobile",
        counter: ".calc-product__counter",
        plus: ".calc-product__plus",
        minus: ".calc-product__minus",
        counterInput: ".calc-product__input",
        productPrice: ".calc-product__price"
    }

    function showLastPrice(price){
        const result = document.querySelector(DOMelements.result);

        result.textContent = `${price} руб.`
    }


    function getDomElements(){
        return DOMelements;
    }

    return {
        getDomElements: getDomElements,

        showLastPrice: showLastPrice
    }

})();