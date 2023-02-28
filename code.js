
const api_url = "https://jsonplaceholder.typicode.com";
posts = [];

async function getData(url) {

  const response = await fetch(`${url}/posts`);

  let data = await response.json();
  console.log(data);
 
  

  data.forEach(element => {
    
    const linkElement = document.createElement('a'); //making a link 
    linkElement.setAttribute('href',`${url}/posts/${element.id}`);
    linkElement.setAttribute('target','_blank');
    //linkElement.innerText = element.title;
    
   
    posts = data.map(element => element.title)
    
    console.log(element.title);
    
  });
    updateDom();
}

getData(api_url);


function updateDom() {

  let dat = "";

  for (let i = 0; i < posts.length; i++) {
    

    dat = dat + `<div class="leftcolumn">
    <a href="post.html?postId=id">${posts[i]} </a>
    </div>`;
    

 }
console.log(dat);
 document.getElementById("leftcolumn").innerHTML = dat;
}