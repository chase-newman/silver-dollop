let dataSet = [];

const labels = [29,28,27,26,25,24,23,22,21,20,
                19,18,17,16,15,14,13,12,10,9,8,
                7,6,5,4,3,2,1,0];
                
let myChart

let dataY = {
        labels: labels,
        datasets: [{
          label: "Stock Price ($USD)",
          backgroundColor: 'rgb(2, 252, 135)',
          borderColor: 'rgb(2, 252, 135)',
          data: dataSet,
          fill: true
        }]
    };

let config = {
        type: 'line',
        data: dataY,
        options: {
            animations: {
                tension: {
                    duration: 1000,
                    easing: 'linear',
                    from: 1,
                    to: 0,
                    loop: false
                }
            }
        }
      };

const stockArr = [
        {
            name: "Apple",
            ticker: "AAPL"
        },
        {
            name: "Amazon",
            ticker: "AMZN"
        }
    ];

fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stockArr[0].ticker}&apikey=1D24JWD6HONH93GD`)
    .then(response => response.json())
    .then(data => {
        let newData = [];
    
        const stockPriceObject = Object.values(data)[1];
        let stockPriceArr = Object.values(stockPriceObject);
        const todaysStockPriceValues = stockPriceArr[0];
        const closingStockPrice = parseFloat(Object.values(todaysStockPriceValues)[3]);
        // console.log(dataFour.toFixed(2));
        document.querySelector("#price").innerHTML = closingStockPrice;
        console.log(document.querySelectorAll(".stockName"));
        const stockNameElements = document.querySelectorAll(".stockName");
        for(let el of stockNameElements) {
            el.innerHTML = stockArr[0].name;
        }
        for(let i=0; i<30; i++) {
            newData.push(parseFloat(Object.values(stockPriceArr[i])[3]));
        }
        if(newData.length > 0) {
            dataX = {
                labels: labels,
                datasets: [{
                  label: "Stock Price ($USD)",
                  backgroundColor: 'rgb(2, 135, 90)',
                  borderColor: 'rgb(2, 135, 90)',
                  data: newData,
                  fill: true
                }]
            };
            
            config = {
                type: 'line',
                data: dataX,
                options: {
                    animations: {
                        tension: {
                            duration: 1000,
                            easing: 'linear',
                            from: 1,
                            to: 0,
                            loop: false
                        }
                    }
                }
            };
            myChart = new Chart(
            document.getElementById('myChart'),
            config
        );  
}
}).catch((e) => {
   console.log(e); 
});


const btn = document.querySelector("button");

btn.addEventListener("click", () => {
   console.log("button clicked");
   myChart.destroy();
   dataSet = [];
   
   fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stockArr[1].ticker}&apikey=1D24JWD6HONH93GD`)
    .then(response => response.json())
    .then(data => {
        const stockPriceObject = Object.values(data)[1];
        let stockPriceArr = Object.values(stockPriceObject);
        const todaysStockPriceValues = stockPriceArr[0];
        const closingStockPrice = parseFloat(Object.values(todaysStockPriceValues)[3]);
        // console.log(dataFour.toFixed(2));
        document.querySelector("#price").innerHTML = closingStockPrice;
        console.log(document.querySelectorAll(".stockName"));
        const stockNameElements = document.querySelectorAll(".stockName");
        for(let el of stockNameElements) {
            el.innerHTML = stockArr[0].name;
        }
        for(let i=0; i<30; i++) {
            dataSet.push(parseFloat(Object.values(stockPriceArr[i])[3]));
        }
        if(dataSet.length > 0) {
            myChart = new Chart(
            document.getElementById('myChart'),
            config
        );  
}
}).catch((e) => {
   console.log(e); 
});
   
});

    


    




