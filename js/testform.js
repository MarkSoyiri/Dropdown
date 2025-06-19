const form = document.querySelector("form");
const firstname = document.querySelector("firstname")
form.addEventListener('submit',(e) =>{

e.preventDefault();
const fd = new FormData(form);
const obj = Object.fromEntries(fd);
console.log(obj)
console.log()
})