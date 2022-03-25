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

// window.addEventListener("keydown", function(e) {
//   console.log(e.key);
//   console.log(e.code);
// });

// fetch("https://data.sec.gov/api/xbrl/companyfacts/CIK0000320193.json")
//     .then(response => {
//         console.log(response);
//     })
    
// fetch("https://data.sec.gov/submissions/CIK0000320193.json")
//     .then(response => {
//       console.log(response) 
//     });



// fetch("https://test-project-d14cc-default-rtdb.firebaseio.com/users.json")
//     .then(response => response.json())
//     .then(data => {
//         console.log(data.website);
//         const linkSource = data.website;
//         console.log(linkSource, anchorTag.href);
//         anchorTag.href = linkSource
//     });
    
    
    
    
    
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