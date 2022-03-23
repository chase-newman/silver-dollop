const btn = document.querySelector("button");
const anchorTag = document.querySelector("a");

btn.addEventListener("click", function() {
    console.log("Button Clicked");
});



fetch("https://test-project-d14cc-default-rtdb.firebaseio.com/users.json")
    .then(response => response.json())
    .then(data => {
        console.log(data.website);
        const linkSource = data.website;
        console.log(linkSource, anchorTag.href);
        anchorTag.href = linkSource
    });
    
    
    
    
    
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