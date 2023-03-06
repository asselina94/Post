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
 

  const cont = document.getElementById('main');
  
  const card = document.createElement('div');
    card.classList = 'card-body';

    const content = `
    
    <div class ="card-body">
    <img src="images/jo.jpg" width="445" height="226" alt="" />
      <h2>Travel</h2>
      <h3>User: ${data.id}</h3>
      <h3>UserId: ${data.userId}</h3>
      <h3>${data.title}</h3>
      <p>${data.body}</p>
      
    </div>
    
`;
cont.innerHTML += content;

//let dat = ""; 
//dat = dat + `<div class="main">${JSON.stringify(data)}</div>`;   
//document.getElementById("main").innerHTML = dat;

}
getData(url);
  