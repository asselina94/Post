
const api_url = "https://jsonplaceholder.typicode.com";
todoItems = [];
async function getData(url) {

  const response = await fetch(`${url}/posts`);

  let data = await response.json();
  console.log(data);
 
  

  data.forEach(element => {
    
    todoItems = data.map(element => element.body);
    //postElement(element.body);
    console.log(element.body);
    
  });
    updateDom();
}

getData(api_url);



function postElement(post){
  const linkElement = document.createElement('a'); //making a link 
  linkElement.setAttribute('href',`${api_url}/posts/${post.id}`);
  linkElement.setAttribute('target','_blank');
  linkElement.innerText = post.title;

  const postTitleElement = document.createElement('h3');
  postTitleElement.appendChild(linkElement);

  return postTitleElement;
    //updateDom();
}



function updateDom() {

  let dat = "";

  for (let i = 0; i < todoItems.length; i++) {
    

    dat = dat + `<div class="leftcolumn">${todoItems[i]}
    </div>`;
    dat.appendChild(postElement(todoItems[i]));

 }
console.log(dat);
 document.getElementById("leftcolumn").innerHTML = dat;
}