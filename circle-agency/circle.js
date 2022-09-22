/*const hamburgueso = document.querySelector(".hamburgueso");
const navMenu = document.querySelector(".nav-menu");

hamburgueso.addEventListener("click", () => {
  hamburgueso.classList.toggle("active");
  navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  hamburgueso.classList.remove("active");
  hamburgueso.classList.remove("active");
}))
*/



function hamburger() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}






/*



function recentProjects(){
  fetch("https://jsonplaceholder.typicode.com/posts")
  .then ((response) => response.json())
  .then((res) => {
    let externalApiData = "";
  
    res.forEach((post) => {
      externalApiData += `
      <div class="card" style="width: 18rem">
     <img class= "card-img-top" src="someThing.jpg" alt="ruben fucking blades"
    />
    <div class="card-body">
    <h5 class="card-title">${post.title}</h5>
    <p class= "card-text">
    ${post.body}
    </p>
    </div>
    </div>
    `;
  });
  document.querySelector("#recent").innerHTML = externalApiData;
  .catch((error) => console.log(error));
  
    })
} 




































/*const recentProjects = async() => {

  try {
    const respuesta = fetch('https://jsonplaceholder.typicode.com/posts');
    console.log(respuesta);
} catch (error();)



method: 'GET',
headers: {
  'X-RapidAPIKey': ''
  'X-RapidAPI-Host':''
 }
};*/


/*function addPost(preventForm) {
 para traer el valor del título y el post :
  let title = document.querySelector(#title).value;
  let body = document.querySelector(#body).value;
  console.log(title)
}

fetch ('https://jsonplaceholder.typicode.com/posts', recentProjects {
 method: "POST"
  headers: {
    "Content-type": "application/json";
    Accept: "application/json, text/plain",
  },
  body: JSON.stringify({name: title, body: body}),
})

.then (res => res.json())
.then (res => console.log (res))
console.log(response)*/











