const modelCalc = (function(){

    const prices = {
        google: 1500,
        yandex: 1500,
        dvagis: 1000,
        prodoktorov: 800,
        zoon: 600,
        spr: 600,
        yellru: 600,
        flamp: 600,
        branch: 400
    }

    const summary = [];

   function getPrices(){
    return prices;
    }

    function getSummary(){
        return summary;
    }

    function calculateLastPrice(summary){
        let sum = 0;

        for (let i = 0; i < summary.length; i++) {
            sum += summary[i];
        }

        return sum;
    }

    return{
        getPrices: getPrices,

        getSummary: getSummary,

        summary: summary,

        calculateLastPrice: calculateLastPrice
    }
})();
