const sections = document.querySelectorAll("[data-src]");
      for (const section of sections) {
        const response = await fetch(section.dataset.src); // cogemos todos las secciones con el dataset-src de la main
        const mainContent = await response.text();  // pasamos la respuesta obtenida de cada archivo a texto plano
        section.outerHTML = mainContent;        // la mostramos por el navegador sustituyendo cada seccion por su                                         archivo referenciado en el data-src
      }

