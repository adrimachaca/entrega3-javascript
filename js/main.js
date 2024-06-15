const sections = document.querySelectorAll("[data-src]");
for (const section of sections) {
  const response = await fetch(section.dataset.src); // cogemos todos las secciones con el dataset-src de la main
  const mainContent = await response.text();  // pasamos la respuesta obtenida de cada archivo a texto plano
  section.outerHTML = mainContent;        // la mostramos por el navegador sustituyendo cada seccion por su                                         archivo referenciado en el data-src
}

const form = document.querySelector("form");
console.log(form);
form.addEventListener("submit", function (event) {
  let email = document.getElementById("inputEmail").value;
  let phone = document.getElementById("inputPhone").value;
  let emailPattern = /@gmail\./i;
  if (emailPattern.test(email)) {
    alert("Your address can not be @gmail ❌❌❌❌");
    event.preventDefault();
  }
  let phonePattern = /^[679]\d{8}(\s.*)?$/;
  if (!phonePattern.test(phone)) {
    alert("Your phone number is not valid ❌❌❌❌");
    event.preventDefault();
  }

});