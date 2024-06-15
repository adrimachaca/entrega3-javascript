//lazy load

const sections = document.querySelectorAll("[data-src]");  
for (const section of sections) {           
   const response = await fetch(section.dataset.src);  
   const mainContent = await response.text();  
   section.outerHTML = mainContent;
}

//validaciones

  inputEmail.addEventListener("blur", function () {   
    let email = document.getElementById("inputEmail").value;  
    let emailPattern = /@gmail\./i;     
    if (emailPattern.test(email)) {  
      emailWarning.style.display = 'block';   
    } else {
      emailWarning.style.display = 'none';  
    }
  });

  inputPhone.addEventListener("blur", function () {  
    let phone = document.getElementById("inputPhone").value;
    let phonePattern = /^[679]\d{8}(\s.*)?$/;
    if (!phonePattern.test(phone) && phone) {
      phoneWarning.style.display = 'block';
    } else {
      phoneWarning.style.display = 'none';
    }
  });


