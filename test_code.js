
const api_url = "https://jsonplaceholder.typicode.com";
posts = [];
arr = [];
async function getData(url) {

  const response = await fetch(`${url}/posts`);

  let data = await response.json();
  console.log(data);
 
  
  const cont = document.getElementById('accordion');
  let rofl = "";

  data.forEach(element => {
    
    const linkElement = document.createElement('a'); //making a link 
    linkElement.setAttribute('href',`${url}/posts/${element.id}`);
    linkElement.setAttribute('target','_blank');
    
    const card = document.createElement('div');
    card.classList = 'cards';
   // Construct content
    const content = `
    <div class="cards">
      <h4>${element.title}</h4>
      <p>${element.body}</p>
      
   </div>
`;
  rofl += content;
  console.log(rofl);
  
  });
  cont.innerHtml += rofl;
  console.log(cont.innerHTML);
}

getData(api_url);


