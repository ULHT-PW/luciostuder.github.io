if (!localStorage.getItem('counter')) {
      localStorage.setItem('counter', 0);
}
let counter = localStorage.getItem('counter');
countElement = document.querySelector("#count");
countElement.textContent = counter;

const h1 = document.querySelector('h1');

h1.onmouseover = () => {
  h1.classList.add('colored');
  counter++;
  countElement.textContent = counter;
  localStorage.setItem('counter', counter);
}
h1.onmouseout = () => h1.classList.remove('colored');

function saudar() {
  alert("Viva o HTML!")
}
