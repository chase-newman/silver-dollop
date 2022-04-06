//Declare stock variables and select button elements
const appleStock = {name: "Apple", ticker: "AAPL", color: "rgba(255, 202, 44, 0.70)"};
const amazonStock = {name: "Amazon", ticker: "AMZN", color: "rgba(2, 135, 90, 0.70)"};
const netflixStock = {name: "Netflix", ticker: "NFLX", color: "rgba(255, 0, 0, 0.70)"};
const metaStock = {name: "Meta", ticker: "FB", color: "rgba(11, 94, 215, 0.70)"};
const googleStock = {name: "Google", ticker: "GOOG", color: "rgba(92, 99, 106, 0.70)"};
    
const appleBtn = document.querySelector("#apple-btn");
const amznBtn = document.querySelector("#amazon-btn");
const nflxBtn = document.querySelector("#netflix-btn");
const metaBtn = document.querySelector("#meta-btn");
const googBtn = document.querySelector("#google-btn");

let dataSet = [];

let myChart

const labels = [29,28,27,26,25,24,23,22,21,20,
                19,18,17,16,15,14,13,12,10,9,8,
                7,6,5,4,3,2,1,0];
                

//create API function call
const getStockData = (stock) => {
    fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stock.ticker}&apikey=1D24JWD6HONH93GD`)
    .then(response => response.json())
    .then(data => {
        const stockPriceObject = Object.values(data)[1];
        let stockPriceArr = Object.values(stockPriceObject);
        const todaysStockPriceValues = stockPriceArr[0];
        const closingStockPrice = parseFloat(Object.values(todaysStockPriceValues)[3]);
        document.querySelector("#price").innerHTML = `$${closingStockPrice}`;
        const stockNameElements = document.querySelectorAll(".stockName");
        for(let el of stockNameElements) {
            el.innerHTML = stock.name;
        }
        for(let i=0; i<30; i++) {
            dataSet.push(parseFloat(Object.values(stockPriceArr[i])[3]));
        }
        if(dataSet.length > 0) {
            let dataY = {
                labels: labels,
                datasets: [{
                  label: "Stock Price ($USD)",
                  backgroundColor: stock.color,
                  borderColor: stock.color,
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
       alert("Sorry, looks like there was an error getting that data. Please wait a second and try again.")
    });
};

getStockData(appleStock);



//get new stock data with button clicks

appleBtn.addEventListener("click", () => {
   //Destroy the previous chart and empty the dataset
   myChart.destroy();
   dataSet = [];

   //Get Amazon stock data 
   getStockData(appleStock); 
});


amznBtn.addEventListener("click", () => {
   //Destroy the previous chart and empty the dataset
   myChart.destroy();
   dataSet = [];

   //Get Amazon stock data 
   getStockData(amazonStock);
});

nflxBtn.addEventListener("click", () => {
   //Destroy the previous chart and empty the dataset
   myChart.destroy();
   dataSet = [];
   
   //Get Netflix stock data
   getStockData(netflixStock);
});

metaBtn.addEventListener("click", () => {
   //Destroy the previous chart and empty the dataset
   myChart.destroy();
   dataSet = [];
   
   //Get Meta stock data
   getStockData(metaStock);
});


googBtn.addEventListener("click", () => {
   //Destroy the previous chart and empty the dataset
   myChart.destroy();
   dataSet = [];
   
   //Get Google Stock data
   getStockData(googleStock);
});
    


    




