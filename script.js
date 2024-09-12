
/*
let xhttpGet = new XMLHttpRequest();
xhttpGet.onreadystatechange = function () {
  if(this.readyState == 4 && this.status == 200 ) {
    console.log(xhttpGet.responseText);
  }
}

xhttpGet.open("GET", "https://66dac436f47a05d55be5e489.mockapi.io/Users", true);xhttpGet.send();
//starija metoda

let xhttpPost = new XMLHttpRequest();
xhttpPost.onreadystatechange = function () {
  if(this.readyState == 4 && this.status == 200 ) {
    console.log(xhttpPost.responseText);
  }
}
  */

/*
xhttpPost.open("POST", "https://66dac436f47a05d55be5e489.mockapi.io/Users", true);xhttpPost.send(
  JSON.stringify({
    "createdAt": Date.now,
    "name": "Hope Cartwright",
    "avatar": "https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/238.jpg",
    "id": "22"
  })
);
*/

const inputForma = document.querySelector('.userID');
const btnForme = document.querySelector('.fetchBtn');
const display = document.querySelector('.displayUser');

let inputValue;
let matchedId

inputForma.addEventListener('input', (e) => {
  inputValue = e.target.value;
  console.log(inputValue);
})

btnForme.addEventListener('click', (e) => {
  loadUsers();
  inputForma.value = ''
 
})

 async function loadUsers() { 
  
  try {
  const results = await fetch('https://66dac436f47a05d55be5e489.mockapi.io/Users')
  const data = await results.json();
  data.forEach((user) => {
    if(user.id === inputValue) {
      display.innerHTML += `
      <p><b>${user.name}</b></p>
      <img src="${user.avatar}">
      `
    }
  })} catch(error) {
console.log('Therer is some error', error)
  }

 }


//console.log(r); //znaci vraca obecanje i kada to obecanje bude ispunjeno mi cemo moci vidjeti podatke 

/*
let response = request.then(response => response.json());
console.log(response); //znaci ovo ovako nece raditi jer je ovo asinhrono
*/






