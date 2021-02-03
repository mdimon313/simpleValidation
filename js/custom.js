let submitBtn, closeBtn;

submitBtn = document.querySelector("#signBtn");
closeBtn = document.querySelector('#close');

submitBtn.addEventListener('click', validForm);

closeBtn.addEventListener("click", closeOutput);

function validForm() {
  let output;
  output = document.querySelector(".output");
  output.style.visibility = 'visible';
}

function closeOutput () {
  let  close;
  close = document.querySelector(".output");
  close.style.visibility = "hidden";
}
