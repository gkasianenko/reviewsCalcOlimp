const controllerCalc = (function(modelCalc, viewCalc){

    const DOM = viewCalc.getDomElements();
    const pluses = document.querySelectorAll(DOM.plus);
    const minuses = document.querySelectorAll(DOM.minus);
    const quantityInput = document.querySelector(DOM.quantity);

    const setupEventListeners = function(){


        for(let i = 0; i < pluses.length; i++){
            pluses[i].addEventListener("click", plusCounter)
        }

        for(let i = 0; i < minuses.length; i++){
            minuses[i].addEventListener("click", minusCounter)
        }

        quantityInput.addEventListener("change", renewPrice);

    }

    const prices = modelCalc.getPrices();
    
    function plusCounter(event){

        if(quantityInput.value === ""){

            alert("Введите количество филиалов")

        } else {
        
            const product = event.target.closest(DOM.product);

        const counter = event.target.closest(DOM.counter)

        let counterValue = counter.querySelector(DOM.counterInput).value;

         counterValue++;
    
        counter.querySelector(DOM.counterInput).value = counterValue;

        showPrice(product,counterValue)

        viewCalc.showLastPrice(calculatePriceSummary());

        
        }
        
        
    }

    function minusCounter(event){

        if(quantityInput.value === ""){
            
            alert("Введите количество филиалов")

        } else {

        const product = event.target.closest(DOM.product);

        const counter = event.target.closest(DOM.counter)

        let counterValue = counter.querySelector(DOM.counterInput).value;

        counterValue--;

        if(counterValue >= 0){
            counter.querySelector(DOM.counterInput).value = counterValue; 

            showPrice(product,counterValue);

            viewCalc.showLastPrice(calculatePriceSummary());
        }
        
    }

}

    function showPrice(product, value){

        const priceElements = product.querySelectorAll(DOM.productPrice);

        priceElements.forEach((price)=>{

            price.textContent = `${prices[product.id]*value} руб.`

        })

    }

    function calculatePriceSummary(){

        const productSection = document.querySelector(DOM.section);

        const allPrices = productSection.querySelectorAll(DOM.price);

        const quantityValue = document.querySelector(DOM.quantity).value;

        //Помещаем в массив цен все значения из продуктов и филиалов
        modelCalc.summary = [];

        modelCalc.summary.push(quantityValue*prices.branch)

        allPrices.forEach((price)=>{
            modelCalc.summary.push(parseInt(price.textContent));
        })

        //Итоговая сумма всех отзывов и филиалов
       const finalPrice = modelCalc.calculateLastPrice(modelCalc.summary);
        
       return finalPrice;
        
    }

    function renewPrice(){
        viewCalc.showLastPrice(calculatePriceSummary());
        this.style.backgroundColor = !!this.value ? "white" : "rgba(244, 130, 130, 0.15)";
    }

    return {
        init: function(){
            console.log("app started");
            setupEventListeners();
            viewCalc.showLastPrice(calculatePriceSummary());
        }
    }

})(modelCalc, viewCalc);

controllerCalc.init();

