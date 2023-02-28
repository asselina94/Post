const queryString = window.location.search;
  console.log(queryString);

  const urlParams = new URLSearchParams(queryString);

  const product = urlParams.get('postId')
  console.log(product);

  let post = "";

  post = post +  `<div class="main">${product}
  </div>`;
  console.log(post);
 document.getElementById("main").innerHTML = post;