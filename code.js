
const api_url = "https://jsonplaceholder.typicode.com";
todoItems = [];

async function getData(url) {

  const response = await fetch(`${url}/posts`);

  let data = await response.json();
  console.log(data);
 
  

  data.forEach(element => {
    
    const linkElement = document.createElement('a'); //making a link 
    linkElement.setAttribute('href',`${url}/posts/${element.id}`);
    linkElement.setAttribute('target','_blank');
    //linkElement.innerText = element.title;
    
   
    todoItems = data.map(element => element.title)
    
    console.log(element.title);
    
  });
    updateDom();
}

getData(api_url);



function postElement(post){
  
  const linkElement = document.createElement('a'); //making a link 
  linkElement.setAttribute('href',`${api_url}/posts/${post.id}`);
  linkElement.setAttribute('target','_blank');
  linkElement.innerText = post.title;

  //const postTitleElement = document.createElement('h3');
  //postTitleElement.appendChild(linkElement);

  //return postTitleElement;
  //console.log(todoItems);
    //updateDom();
}



function updateDom() {

  let dat = "";

  for (let i = 0; i < todoItems.length; i++) {
    

    dat = dat + `<div class="leftcolumn">
    <a href=‘…’>${todoItems[i]} </a>
    </div>`;
    

 }
console.log(dat);
 document.getElementById("leftcolumn").innerHTML = dat;
}