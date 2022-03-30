let dataSet = [];

fetch("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=AAPL&apikey=1D24JWD6HONH93GD")
    .then(response => response.json())
    .then(data => {
        const stockPriceObject = Object.values(data)[1];
        let stockPriceArr = Object.values(stockPriceObject);
        console.log(stockPriceArr);

        const todaysStockPriceValues = stockPriceArr[0];
        const closingStockPrice = parseFloat(Object.values(todaysStockPriceValues)[3]);
        // console.log(dataFour.toFixed(2));
        document.querySelector("span").innerHTML = closingStockPrice;
        for(let i=0; i<30; i++) {
            console.log(parseFloat(Object.values(stockPriceArr[i])[3]));
            dataSet.push(parseFloat(Object.values(stockPriceArr[i])[3]));
            console.log(dataSet);
        }
         
  const labels = [29,28,27,26,25,24,23,22,21,20,
                19,18,17,16,15,14,13,12,10,9,8,
                7,6,5,4,3,2,1,0];

  const dataY = {
    labels: labels,
    datasets: [{
      label: "Stock Price ($USD)",
      backgroundColor: 'rgb(2, 252, 135)',
      borderColor: 'rgb(2, 252, 135)',
      data: dataSet,
      fill: true
    }]
  };
  const config = {
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
  const myChart = new Chart(
        document.getElementById('myChart'),
        config
    ); 
});
    


    




