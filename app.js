const stockArr = [
        {
            name: "Apple",
            ticker: "AAPL"
        },
        {
            name: "Amazon",
            ticker: "AMZN"
        },
        {
            name: "Netflix",
            ticker: "NFLX"
        },
        {
            name: "Meta",
            ticker: "FB"
        },
        {
            name: "Google",
            ticker: "GOOG"
        }
    ];

let dataSet = [];

let myChart

const labels = [29,28,27,26,25,24,23,22,21,20,
                19,18,17,16,15,14,13,12,10,9,8,
                7,6,5,4,3,2,1,0];
                

// let dataY = {
//         labels: labels,
//         datasets: [{
//           label: "Stock Price ($USD)",
//           backgroundColor: 'rgb(2, 252, 135)',
//           borderColor: 'rgb(2, 252, 135)',
//           data: dataSet,
//           fill: true
//         }]
//     };

// let config = {
//         type: 'line',
//         data: dataY,
//         options: {
//             animations: {
//                 tension: {
//                     duration: 1000,
//                     easing: 'linear',
//                     from: 1,
//                     to: 0,
//                     loop: false
//                 }
//             }
//         }
//       };



fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stockArr[0].ticker}&apikey=1D24JWD6HONH93GD`)
    .then(response => response.json())
    .then(data => {
        const stockPriceObject = Object.values(data)[1];
        let stockPriceArr = Object.values(stockPriceObject);
        const todaysStockPriceValues = stockPriceArr[0];
        const closingStockPrice = parseFloat(Object.values(todaysStockPriceValues)[3]);
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
            let dataY = {
                labels: labels,
                datasets: [{
                  label: "Stock Price ($USD)",
                  backgroundColor: 'rgb(255, 202, 44)',
                  borderColor: 'rgb(255, 202, 44)',
                  data: dataSet,
                  fill: true
                }]
            };
            
            config = {
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
            myChart = new Chart(
            document.getElementById('myChart'),
            config
        );  
}
}).catch((e) => {
   console.log(e); 
});


const amznBtn = document.querySelector("#amazon-btn");
const nflxBtn = document.querySelector("#netflix-btn");
const metaBtn = document.querySelector("#meta-btn");
const googBtn = document.querySelector("#google-btn");


amznBtn.addEventListener("click", () => {
   console.log("button clicked");
   //Destroy the previous chart and empty the dataset
   myChart.destroy();
   dataSet = [];
   
   //Fetch Amazon stock data
   fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stockArr[1].ticker}&apikey=1D24JWD6HONH93GD`)
    .then(response => response.json())
    .then(data => {
        const stockPriceObject = Object.values(data)[1];
        let stockPriceArr = Object.values(stockPriceObject);
        const todaysStockPriceValues = stockPriceArr[0];
        const closingStockPrice = parseFloat(Object.values(todaysStockPriceValues)[3]);
        document.querySelector("#price").innerHTML = closingStockPrice;
        const stockNameElements = document.querySelectorAll(".stockName");
        for(let el of stockNameElements) {
            el.innerHTML = stockArr[1].name;
        }
        for(let i=0; i<30; i++) {
            dataSet.push(parseFloat(Object.values(stockPriceArr[i])[3]));
        }
        
        //create new chart
        if(dataSet.length > 0) {
            
            dataX = {
                labels: labels,
                datasets: [{
                  label: "Stock Price ($USD)",
                  backgroundColor: 'rgb(2, 135, 90)',
                  borderColor: 'rgb(2, 135, 90)',
                  data: dataSet,
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
   
});

nflxBtn.addEventListener("click", () => {
   console.log("button clicked");
   //Destroy the previous chart and empty the dataset
   myChart.destroy();
   dataSet = [];
   
   //Fetch Amazon stock data
   fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stockArr[2].ticker}&apikey=1D24JWD6HONH93GD`)
    .then(response => response.json())
    .then(data => {
        const stockPriceObject = Object.values(data)[1];
        let stockPriceArr = Object.values(stockPriceObject);
        const todaysStockPriceValues = stockPriceArr[0];
        const closingStockPrice = parseFloat(Object.values(todaysStockPriceValues)[3]);
        document.querySelector("#price").innerHTML = closingStockPrice;
        const stockNameElements = document.querySelectorAll(".stockName");
        for(let el of stockNameElements) {
            el.innerHTML = stockArr[2].name;
        }
        for(let i=0; i<30; i++) {
            dataSet.push(parseFloat(Object.values(stockPriceArr[i])[3]));
        }
        
        //create new chart
        if(dataSet.length > 0) {
            
            dataX = {
                labels: labels,
                datasets: [{
                  label: "Stock Price ($USD)",
                  backgroundColor: 'rgb(255, 0, 0)',
                  borderColor: 'rgb(255, 0, 0)',
                  data: dataSet,
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
   
});

metaBtn.addEventListener("click", () => {
   console.log("button clicked");
   //Destroy the previous chart and empty the dataset
   myChart.destroy();
   dataSet = [];
   
   //Fetch Amazon stock data
   fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stockArr[3].ticker}&apikey=1D24JWD6HONH93GD`)
    .then(response => response.json())
    .then(data => {
        const stockPriceObject = Object.values(data)[1];
        let stockPriceArr = Object.values(stockPriceObject);
        const todaysStockPriceValues = stockPriceArr[0];
        const closingStockPrice = parseFloat(Object.values(todaysStockPriceValues)[3]);
        document.querySelector("#price").innerHTML = closingStockPrice;
        const stockNameElements = document.querySelectorAll(".stockName");
        for(let el of stockNameElements) {
            el.innerHTML = stockArr[3].name;
        }
        for(let i=0; i<30; i++) {
            dataSet.push(parseFloat(Object.values(stockPriceArr[i])[3]));
        }
        
        //create new chart
        if(dataSet.length > 0) {
            
            dataX = {
                labels: labels,
                datasets: [{
                  label: "Stock Price ($USD)",
                  backgroundColor: 'rgb(11, 94, 215)',
                  borderColor: 'rgb(11, 94, 215)',
                  data: dataSet,
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
   
});


googBtn.addEventListener("click", () => {
   console.log("button clicked");
   //Destroy the previous chart and empty the dataset
   myChart.destroy();
   dataSet = [];
   
   //Fetch Amazon stock data
   fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stockArr[4].ticker}&apikey=1D24JWD6HONH93GD`)
    .then(response => response.json())
    .then(data => {
        const stockPriceObject = Object.values(data)[1];
        let stockPriceArr = Object.values(stockPriceObject);
        const todaysStockPriceValues = stockPriceArr[0];
        const closingStockPrice = parseFloat(Object.values(todaysStockPriceValues)[3]);
        document.querySelector("#price").innerHTML = closingStockPrice;
        const stockNameElements = document.querySelectorAll(".stockName");
        for(let el of stockNameElements) {
            el.innerHTML = stockArr[4].name;
        }
        for(let i=0; i<30; i++) {
            dataSet.push(parseFloat(Object.values(stockPriceArr[i])[3]));
        }
        
        //create new chart
        if(dataSet.length > 0) {
            
            dataX = {
                labels: labels,
                datasets: [{
                  label: "Stock Price ($USD)",
                  backgroundColor: 'rgb(92, 99, 106)',
                  borderColor: 'rgb(92, 99, 106)',
                  data: dataSet,
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
   
});
    


    




