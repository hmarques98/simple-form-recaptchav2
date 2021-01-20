const nome = document.querySelector("#name");
const email = document.querySelector("#email");
const subject = document.querySelector("#subject");
let recaptcha = false;
function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function validRecaptcha() {
  let r = grecaptcha.getResponse();
  if (r.length == 0) {
    return false;
  } else {
    return true;
  }
}

function submitForm() {
  const form = document.getElementById("form");
  form.addEventListener("click", function (event) {
    event.preventDefault();
  });

  const isFormValid = nome.value && email.value && subject.value;
  const emailIsValid = validateEmail(email.value);

  if (isFormValid) {
    if (!emailIsValid) {
      return alert("Digite um email valido");
    }
    const recaptchaisValid = validRecaptcha();
    if (!recaptchaisValid) {
      return alert("Mostra pra mim que você nãe é um robô");
    }
    const objectJson = {
      name: nome.value,
      email: email.value,
      subject: subject.value,
    };

    console.log(JSON.stringify(objectJson));
    alert("Formulario enviado");
    // form.submit();
  } else {
    if (!nome.value.length) {
      document.querySelector(".name").classList.add("error");
    } else {
      document.querySelector(".name").classList.remove("error");
    }
    if (!email.value.length) {
      document.querySelector(".email").classList.add("error");
    } else {
      document.querySelector(".email").classList.remove("error");
    }
    if (!subject.value.length) {
      document.querySelector(".subject").classList.add("error");
    } else {
      document.querySelector(".subject").classList.remove("error");
    }
    alert("Preencha os campos corretamente");
  }
}
