const controllerCalc = (function (modelCalc, viewCalc) {

    const DOM = viewCalc.getDomElements();
    const pluses = document.querySelectorAll(DOM.plus);
    const minuses = document.querySelectorAll(DOM.minus);
    const quantityInput = document.querySelector(DOM.quantity);
    const scroller = document.querySelector(DOM.productScroller);
    const svgMinuses = document.querySelectorAll(DOM.svgMinus);
    const svgPlus = document.querySelector(DOM.svgPlus);
    const productScrollerIcons = document.querySelectorAll(DOM.productChoose);
    const addProduct = document.querySelector(DOM.addProduct);
    const TextareaButton = document.querySelector(DOM.svgTextarea);
    const uploadLink = document.querySelector(DOM.uploadLink);



    const setupEventListeners = function () {

        for (let i = 0; i < pluses.length; i++) {
            pluses[i].addEventListener("click", plusCounter)
        }

        for (let i = 0; i < minuses.length; i++) {
            minuses[i].addEventListener("click", minusCounter)
        }

        quantityInput.addEventListener("change", renewPrice);

        svgPlus.addEventListener("click", viewCalc.toggleScroller);

        TextareaButton.addEventListener("click", upload);

        uploadLink.addEventListener("click", upload);
        

        for (let i = 0; i < productScrollerIcons.length; i++) {
            productScrollerIcons[i].addEventListener("click", openProductPlatform)
        }

        for (let i = 0; i < svgMinuses.length; i++) {
            svgMinuses[i].addEventListener("click", closeProductPlatform)
        }

    }

    const prices = modelCalc.getPrices();

    function plusCounter(event) {

        if (quantityInput.value === "") {

            alert("Введите количество филиалов")

        } else {

            const product = event.target.closest(DOM.product);

            const counter = event.target.closest(DOM.counter);

            let counterValue = counter.querySelector(DOM.counterInput).value;

            counterValue++;

            counter.querySelector(DOM.counterInput).value = counterValue;

            showPrice(product, counterValue)

            viewCalc.showLastPrice(calculatePriceSummary());


        }


    }

    function minusCounter(event) {

        if (quantityInput.value === "") {

            alert("Введите количество филиалов")

        } else {

            const product = event.target.closest(DOM.product);

            const counter = event.target.closest(DOM.counter)

            let counterValue = counter.querySelector(DOM.counterInput).value;

            counterValue--;

            if (counterValue >= 0) {
                counter.querySelector(DOM.counterInput).value = counterValue;

                showPrice(product, counterValue);

                viewCalc.showLastPrice(calculatePriceSummary());
            }

        }

    }

    function showPrice(product, value) {

        const priceElements = product.querySelectorAll(DOM.productPrice);

        priceElements.forEach((price) => {

            price.textContent = `${prices[product.id] * value} руб.`

        })

    }

    function calculatePriceSummary() {

        const productSection = document.querySelector(DOM.section);

        const allPrices = productSection.querySelectorAll(DOM.price);

        const quantityValue = document.querySelector(DOM.quantity).value;

        //Помещаем в массив цен все значения из продуктов и филиалов
        modelCalc.summary = [];

        modelCalc.summary.push(quantityValue * prices.branch)

        allPrices.forEach((price) => {
            modelCalc.summary.push(parseInt(price.textContent));
        })

        //Итоговая сумма всех отзывов и филиалов
        const finalPrice = modelCalc.calculateLastPrice(modelCalc.summary);

        return finalPrice;

    }

    function openProductPlatform(event) {
        viewCalc.openProduct(event);
        viewCalc.showLastPrice(calculatePriceSummary());
    }

    function closeProductPlatform(event) {
        viewCalc.closeProduct(event)

        const product = event.target.closest(DOM.product);
        product.querySelector(DOM.counterInput).value = 0;

        showPrice(product, 0);
        viewCalc.showLastPrice(calculatePriceSummary());


    }

    function renewPrice() {

       
            if(quantityInput.value == 0){
               
                quantityInput.value = 1;
            }
        
        viewCalc.showLastPrice(calculatePriceSummary());
        this.style.backgroundColor = !!this.value ? "white" : "rgba(244, 130, 130, 0.15)";
    }


    function upload(){
        
        const inputUpload = document.querySelector(DOM.fileUploadInput);

        inputUpload.click();
    }




    // function closeProduct(event){

    //     const targetParent = event.target.closest(DOM.product);
    //     const nearestIcon = targetParent.querySelector(DOM.productIcon);

    //     const iconClone = nearestIcon.cloneNode(true);

    //     document.querySelector(DOM.productChooseIcon).before(iconClone);

    //     targetParent.classList.add("hidden");
    // }


    return {
        init: function () {
            console.log("app started");
            setupEventListeners();
            viewCalc.showLastPrice(calculatePriceSummary());
        }
    }

})(modelCalc, viewCalc);

controllerCalc.init();

