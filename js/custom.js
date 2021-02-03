
let submitBtn, closeBtn;

submitBtn = document.querySelector("#signBtn");
closeBtn = document.querySelector('#close');


submitBtn.addEventListener('click', validForm);

closeBtn.addEventListener("click", closeOutput);

function validForm() {
  let fName = document.querySelector("#fname");
  let lName = document.querySelector("#lname");
  let eMail = document.querySelector("#email");
  let phnNumber = document.querySelector("#phone");
  let password = document.querySelector("#password");

  // GET USER VALUE
  let getfValue= fName.value;
  let getlValue= lName.value;
  let geteValue = eMail.value;
  let getpValue = phnNumber.value;
  let getpassValue = password.value;

  // VALIDATION FORMATE

  let validMail = /^([a-z0-9]+)@([a-z]+).([a-z]{2,3})$/;
  let validEmail = validMail.test(geteValue);

  let getValidPhone = /^[0-9][0-9]{10}$/;
  let checkPhoneNumberForValidation = getValidPhone.test(getpValue);

  let checkPassword = /^([a-z]+)([A-z]+)([0-9]+)$/;
  let checkValidPassword = checkPassword.test(password);

  let outputFullName = document.querySelector("#outputFullName");
  let emailOutput = document.querySelector("#outputEmail");
  let phoneOutput = document.querySelector("#outputPhone");

  if (getfValue !== "" && getlValue !== "") {
    let fullName = `${getfValue}  ${getlValue}`;
    outputFullName.innerHTML = fullName;
  } else {
    fName.style.border = "1px solid #fb000";
  }

  if (validEmail && geteValue !== "") {
    emailOutput.innerHTML = geteValue;
    
  } else {
    eMail.style.border = "1px solid #fb000";
  }

  if (checkPhoneNumberForValidation  && getpValue !== "") {
    phoneOutput.innerHTML = getpValue;
  } else {
    phnNumber.style.border = "1px solid #fb000";
  }
  if (checkValidPassword && getpassValue === "" && getpassValue.length < 6) {
    password.style.border = "1px solid green";
  } else {
    password.style.border = "1px solid #fb000";
  };
  ifValid();
};

function closeOutput () {
  let  close;
  close = document.querySelector(".output");
  close.style.visibility = "hidden";
};

function ifValid() {
    output = document.querySelector(".output");
    output.style.visibility = 'visible';
};