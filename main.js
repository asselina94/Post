
const api_url = "https://jsonplaceholder.typicode.com";
posts = [];
titles = [];
postId = [];
async function getData(url) {

  const response = await fetch(`${url}/posts`);

  let data = await response.json();
  console.log(data);
 
  
  //const cont = document.getElementById('container');
  

  data.forEach(element => {
    
    const linkElement = document.createElement('a'); //making a link 
    linkElement.setAttribute('href',`${url}/posts/${element.id}`);
    linkElement.setAttribute('target','_blank');
    
    posts = data.map(element => element.body);
    postId = data.map(element => element.id);
    titles = data.map(element => element.title);
    
    console.log(element.body);
    
  
  });
  updateDom();
}

getData(api_url);

function updateDom() {

  const container = document.getElementById('container_id');
  

  for (let i = 0; i < 3; i++) {
    const card = document.createElement('div');
    card.classList = 'card-body';

    const content = `
    <div class="card">
    <div class="card-header">
      <img src="images/mount.jpg" alt="" />
    </div>
    <div class ="card-body">
      <span class="tag tag-teal">Travel</span>
      <h4><a href="post.html?postId=${postId[i]}">${titles[i]} </a></h4>
      <p>${posts[i]}</p>
      
    </div>
  </div>
   
`;
container.innerHTML += content;

 }

}
