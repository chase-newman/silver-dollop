const btn = document.querySelector("button");
const anchorTag = document.querySelector("a");
const input = document.querySelector("input");


btn.addEventListener("click",(event) => {
    console.log(event);
    console.log("Button Clicked");
});

input.addEventListener("keydown", (e) => {
   console.log(e.key);
   console.log(e.code);
});

fetch("https://data.sec.gov/submissions/CIK0000320193.json")
    .then(response => response.json())
    .then(data => {
        console.log(data.filings.recent.form[0]);
        const secFiling = data.filings.recent.form[0];
        if(secFiling === "4") {
            document.querySelector("#filing").innerHTML = "Form 4";
        }
    });


fetch("https://test-project-d14cc-default-rtdb.firebaseio.com/users.json")
    .then(response => response.json())
    .then(data => {
        console.log(data);
        console.log(data.website);
        const linkSource = data.website;
        console.log(linkSource, anchorTag.href);
        anchorTag.href = linkSource
    });
    
fetch("https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=AAPL&apikey=1D24JWD6HONH93GD")
    .then(response => response.json())
    .then(data => {
      const dataOne = Object.values(data)[1]
      const dataTwo = Object.values(dataOne)
      const dataThree = dataTwo[99];
      const dataFour = Object.values(dataThree)[2];
      console.log(dataFour);
      document.querySelector("span").innerHTML = dataFour;
      if(dataFour !== null) {
          fetch("https://test-project-d14cc-default-rtdb.firebaseio.com/users.json", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
              },
              body: JSON.stringify(dataFour),
          });
      }
    });
    
    
 const labels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [0, 10, 5, 2, 20, 30, 45],
    }]
  };

  const config = {
    type: 'line',
    data: data,
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
    
    
// const data = { username: 'example' };

// fetch('https://test-project-d14cc-default-rtdb.firebaseio.com/users.json', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(data),
// })
//     .then(response => response.json())
//     .then(data => {
//       console.log('Success:', data);
//     })
//     .catch((error) => {
//       console.error('Error:', error);
//     });