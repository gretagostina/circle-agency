document.querySelector("#my-form").addEventListener("submit", addPost);
const url = "https://jsonplaceholder.typicode.com/comments";

function addPost(preventForm) {
    console.log("5");
  preventForm.preventDefault();

  let name = document.querySelector("#nombre").value;
  let email = document.querySelector("#correo").value;
  let phone = document.querySelector("#telefono").value;
  let message = document.querySelector("#mensaje").value;

  fetch(url, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Accept: "application/json, text/plain",
    },
    body: JSON.stringify({
      name: name,
      email: email,
      phone: phone,
      body: message,
    }),
  })
    .then((response) => response.json())
    .then((dataForm) => console.log(dataForm))
    .then(() => {
      let message = "";
      message += `
		<div id="mensaje-respuesta">
		    <h3>Message Submitted</h3>
	  </div> 
		  `;
      document.querySelector("#mensaje-submit").innerHTML = message;
    })
    .catch(() => {
      let message = "";
      message += `
		<div id="mensaje-respuesta">
			<h3>Oh oh, there has been an error with your message!</h3>
		</div> 
			`;
      document.querySelector("#mensaje-submit").innerHTML = message;
    });

  document.querySelector("#nombre").value = "";
  document.querySelector("#correo").value = "";
  document.querySelector("#telefono").value = "";
  document.querySelector("#mensaje").value = "";
}
