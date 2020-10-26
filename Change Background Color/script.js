const colorBtn = document.querySelector('.btn');
const bodyColor = document.querySelector('body');

const colors =['red', 'yellow', 'purple', 'green', 'blue'];

colorBtn.addEventListener('click', changeColor);

function changeColor (){
    let random = Math.floor(Math.random()*colors.length)
    bodyColor.style.backgroundColor = colors[random];
}
