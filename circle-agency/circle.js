const datos {
  const getDatos = () => {
    return datos;

}
console.log(getDatos) 

/*JSON CONTACT */
document.querySelector ("#monicas-form").addEventListener("submit",addPost);

const url = "https://jsonplaceholder.typicode.com/comments";

function addPost(preventForm) {
    preventForm.preventDefault();

    let name = document.querySelector("#name").value;
    let email = document.querySelector("#email").value;
    let phone = document.querySelector("#phone").value;
    let message = document.querySelector("#message").value;

fetch(url, {
}