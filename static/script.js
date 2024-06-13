const countElement = document.querySelector("#count");
const h1 = document.querySelector('h1');

if (!localStorage.getItem('counter')) {
      localStorage.setItem('counter', 0);
}

let counter = localStorage.getItem('counter');
countElement.textContent = counter;

h1.onmouseover = () => {
  counter++;
  countElement.textContent = counter;
  localStorage.setItem('counter', counter);

  h1.classList.add('colored');
}

h1.onmouseout = () => h1.classList.remove('colored');

function saudar() {
  alert("Viva o HTML!")
}
