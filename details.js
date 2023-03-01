const queryString = window.location.search;
  console.log(queryString);

  const urlParams = new URLSearchParams(queryString);

  const product = urlParams.get('postId')
  console.log(product);

const url = "https://jsonplaceholder.typicode.com";


async function getData(url) {

  const response = await fetch(`${url}/posts/${product}`);

  let data = await response.json();
  console.log(data);
 
  let dat = "";

  
    dat = dat + `<div class="main">${JSON.stringify(data)}</div>`;
    

 
console.log(dat);
document.getElementById("main").innerHTML = dat;

}
getData(url);
  