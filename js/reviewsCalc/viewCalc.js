const viewCalc = (function () {

    const DOMelements = {
        yandex: "#yandex",
        google: "#google",
        dvagis: "#dvagis",
        prodoktorov: "#prodoktorov",
        zoon: "#zoon",
        quantity: "#quantity",
        product: ".calc-product",
        addProduct: ".calc-product--add",
        section: ".reviews-calc__products",
        result: ".reviews-calc__result",
        price: ".calc-product__price--mobile",
        counter: ".calc-product__counter",
        plus: ".calc-product__plus",
        minus: ".calc-product__minus",
        counterInput: ".calc-product__input",
        productPrice: ".calc-product__price",
        productWrapper: ".calc-product__wrapper",
        productScroller: ".calc-product__scroller",
        productScrollerWrapper: ".calc-product__scroller-wrapper",
        productChoose: ".calc-product__choose",
        productChooseIcon: ".calc-product__choose-icon",
        svgMinus: ".svg-minus",
        svgPlus: ".svg-plus",
        productIcon: ".svg-product",
        spr: "spr",
        yell: "yellru",
        flamp: "flamp",
        prodoktorov: "prodoktorov",
        dvagis: "dvagis",
        google: "google",
        yandex: "yandex",
        zoon: "zoon",
        sprIcon: ".spr-product",
        zoonIcon: ".zoon-product",
        flampIcon: ".flamp-product",
        yandexIcon: ".yandex-product",
        googleIcon: ".google-product",
        dvagisIcon: ".dvagis-product",
        prodoktorovIcon: ".prodoktorov-product",
        yellruIcon: ".yellru-product",
        activated: ".active",
        fileUploadInput: "#file-upload",
        svgTextarea: ".svg-textarea",
        textArea: ".calc-area",
        uploadLink: "#upload-link"

    }

        const productSection = document.querySelector(DOMelements.section);
        const addProductElement = document.querySelector(DOMelements.addProduct);
        const addProductParent = addProductElement.closest(DOMelements.product);

    function showLastPrice(price) {
        const result = document.querySelector(DOMelements.result);

        result.textContent = `${price} руб.`
    }

    function addToScroller(item) {
        const scroller = document.querySelector(DOMelements.productScroller);

        scroller.insertAdjacentHTML('beforebegin', item);
    }

    function toggleScroller() {
        const scrollerWrapper = document.querySelector(DOMelements.productScrollerWrapper);


        scrollerWrapper.classList.toggle("active");

    }

    function openProduct(event) {

        const targetParent = event.target.closest(DOMelements.productChooseIcon);
        const nearestIcon = targetParent.querySelector(DOMelements.productIcon);
       


        if (nearestIcon.classList.contains("spr-product")) {
            document.getElementById(DOMelements.spr).classList.add("active");
            targetParent.classList.remove("active");
        }

        if (nearestIcon.classList.contains("yellru-product")) {
            document.getElementById(DOMelements.yell).classList.add("active");
            targetParent.classList.remove("active");
        }

        if (nearestIcon.classList.contains("flamp-product")) {
            document.getElementById(DOMelements.flamp).classList.add("active");
            targetParent.classList.remove("active");
        }

        if (nearestIcon.classList.contains("zoon-product")) {
            document.getElementById(DOMelements.zoon).classList.add("active");
            targetParent.classList.remove("active");
        }

        if (nearestIcon.classList.contains("prodoktorov-product")) {
            document.getElementById(DOMelements.prodoktorov).classList.add("active");
            targetParent.classList.remove("active");
        }

        if (nearestIcon.classList.contains("dvagis-product")) {
            document.getElementById(DOMelements.dvagis).classList.add("active");
            targetParent.classList.remove("active");
        }

        if (nearestIcon.classList.contains("yandex-product")) {
            document.getElementById(DOMelements.yandex).classList.add("active");
            targetParent.classList.remove("active");
        }

        if (nearestIcon.classList.contains("google-product")) {
            document.getElementById(DOMelements.google).classList.add("active");
            targetParent.classList.remove("active");
        }

        if (productSection.querySelectorAll(DOMelements.activated).length === 8) {

            addProductParent.classList.remove("active");
        }
    }

    function closeProduct(event) {
        const targetParent = event.target.closest(DOMelements.product);

        const nearestIcon = targetParent.querySelector(DOMelements.productIcon);

        const productIconList = document.querySelector(DOMelements.productChoose);


        

        if (nearestIcon.classList.contains("spr-product")) {
            const icon = productIconList.querySelector(DOMelements.sprIcon);

            icon.closest(DOMelements.productChooseIcon).classList.add("active");
            targetParent.classList.remove("active");
        }

        if (nearestIcon.classList.contains("zoon-product")) {
            const icon = productIconList.querySelector(DOMelements.zoonIcon);

            icon.closest(DOMelements.productChooseIcon).classList.add("active");
            targetParent.classList.remove("active");
        }

        if (nearestIcon.classList.contains("yandex-product")) {
            const icon = productIconList.querySelector(DOMelements.yandexIcon);

            icon.closest(DOMelements.productChooseIcon).classList.add("active");
            targetParent.classList.remove("active");
        }

        if (nearestIcon.classList.contains("google-product")) {
            const icon = productIconList.querySelector(DOMelements.googleIcon);

            icon.closest(DOMelements.productChooseIcon).classList.add("active");
            targetParent.classList.remove("active");
        }

        if (nearestIcon.classList.contains("yellru-product")) {
            const icon = productIconList.querySelector(DOMelements.yellruIcon);

            icon.closest(DOMelements.productChooseIcon).classList.add("active");
            targetParent.classList.remove("active");
        }

        if (nearestIcon.classList.contains("flamp-product")) {
            const icon = productIconList.querySelector(DOMelements.flampIcon);

            icon.closest(DOMelements.productChooseIcon).classList.add("active");
            targetParent.classList.remove("active");
        }

        if (nearestIcon.classList.contains("dvagis-product")) {
            const icon = productIconList.querySelector(DOMelements.dvagisIcon);

            icon.closest(DOMelements.productChooseIcon).classList.add("active");
            targetParent.classList.remove("active");
        }

        if (nearestIcon.classList.contains("prodoktorov-product")) {
            const icon = productIconList.querySelector(DOMelements.prodoktorovIcon);

            icon.closest(DOMelements.productChooseIcon).classList.add("active");
            targetParent.classList.remove("active");
        }

        if (productSection.querySelectorAll(DOMelements.activated).length < 8) {

            addProductParent.classList.add("active");
        }

        
        
    }


    function getDomElements() {
        return DOMelements;
    }

    

    return {
        getDomElements: getDomElements,

        showLastPrice: showLastPrice,

        addToScroller: addToScroller,

        toggleScroller: toggleScroller,

        openProduct: openProduct,

        closeProduct: closeProduct

    }

})();