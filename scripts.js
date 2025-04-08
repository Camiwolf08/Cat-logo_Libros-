// Datos de los libros con sinopsis, enlaces de descarga y Drive
const books = [
  { 
    title: "CULHUACÁN. Luz y memoria.", 
    author: "Morales Anduaga, María Elena, Velasco Lozano, Ana María Luisa, García Soto, Narciso Mario.", 
    theme: "Infantil", 
    image: "img/CULHUACÁN.png",
    shortSynopsis: "Morales Anduaga, María Elena, Velasco Lozano, Ana María Luisa, García Soto, Narciso Mario, Culhuacán. Luz de la memoria, México, Instituto Nacional de Antropología e Historia, 2014. Por: Gabriela Gómez Esquivel - ENAH.",
    longSynopsis: "Este estudio de divulgación intenta compartir a todo el público en general interesado en el pueblo de Culhuacán, información fundamental y muy valiosa relacionada con la historia, las tradiciones y costumbres del que hace mucho tiempo atrás fue un señorío prehispánico de gran importancia en la Cuenca de México. Esta obra aporta una visión esencial que permite imaginar todo el trasfondo histórico prehispánico y colonial del que Culhuacán es heredero y que a pesar del tiempo y de las transformaciones políticas, económicas, sociales y culturales desarrolladas en esta comunidad y sus alrededores, los habitantes se han encargado de rescatar, conservar y continuar realizando prácticas culturales ancestrales que por años los han definido e identificado como parte de la comunidad de la que forman parte de la comunidad de la que forman parte.",
    fullSynopsis: "Este libro explora la historia de Culhuacán a través del tiempo desde su pasado prehispánico hasta nuestros días, y al mismo tiempo, explica las prácticas culturales que los habitantes de este pueblo originario continúan realizando, en este punto se muestran las fotografías que las hacen evidentes. Se mencionan los proyectos de investigación arqueológica para la restauración y conservación del patrimonio histórico en el área que corresponde al Cerro de la Estrella los cuales motivaron la puesta en marcha de este estudio. Recordar la historia de los habitantes y su pueblo, en este caso el de Culhuacán, permite comprenderlos en el presente en que vivimos. La historia, las raíces prehispánicas y coloniales, la memoria y las manifestaciones culturales que cada uno de los pobladores de Culhuacán posee, son elementos de gran valor que constituyen su patrimonio tangible e intangible, y son a su vez las armas para defenderlo y resguardarlo.",
    downloadLink: "Libros/Culhuacán. Luz de la memoria.pdf", 
    driveLink: "https://drive.google.com/file/d/1DB2zJYeio1M5Kxb0dyr5wfnqf2ufHBVQ/view?usp=sharing",
    pendingApproval: false // Flag de aprobación
  },
  { 
    title: "El Centro Comunitario Culhuacán. Una apuesta por la colaboración para conservar y difundir el patrimonio.", 
    author: "Diego Prieto Hernández.", 
    theme: "Infantil", 
    image: "img/Rutas de Campo.png",
    shortSynopsis: "El Centro Comunitario Culhuacán. Una apuesta por la colaboración para conservar y difundir el patrimonio”, Rutas de campo, Coordinación Nacional de Antropología/ Instituto Nacional de Antropología e Historia, núm. 7, marzo-abril, 2015, México. Por: Gabriela Gómez Esquivel - ENAH.",
    longSynopsis: "Los artículos que componen esta revista son piezas clave para conocer el Centro Comunitario Culhuacán. Entre los distintos estudios que podemos encontrar aquí tenemos los que exponen el proyecto que se desarrolló para la apertura del Centro Comunitario en 1984; la colaboración con instituciones del gobierno, privadas y el sector civil que apoyaron la causa; sus funciones principales como museo; y su impulso como un espacio para la comunidad.Se presentan los trabajos arqueológicos, arquitectónicos y de restauración realizados en el interior y exterior del convento para su conservación y recuperación; investigaciones que estudian la arquitectura del edificio y su iconografía; el trabajo que realizaron Cristina Payán (fundadora del Centro Comunitario) y Teresa Espinosa (representante del pueblo de Culhuacán) en el convento y en el pueblo y los intereses que compartieron por el rescate de la historia y las costumbres de Culhuacán; una breve semblanza histórica de los culhuacanos, sus asentamientos y los proyectos arqueológicos realizados en diferentes épocas; los resultados de la restauración y conservación del monumento histórico.",
    fullSynopsis: "La recuperación de la memoria histórica de los habitantes del pueblo es fundamental para darla a conocer a la comunidad que visita el ex convento y esto se ha realizado a través de exposiciones comunitarias; también se ha contribuido a la aportación de conocimientos ligados a la historia, tradiciones y costumbres, éstos son aspectos que permiten establecer una conexión entre la comunidad y su patrimonio histórico; y finalmente, tenemos diferentes actividades educativas y artísticas que se impartían en el centro y respondían a diversos fines. Actualmente se continúan realizando actividades comunitarias recreativas y formativas.",
    downloadLink: "Libros/Rutas de Campo Num 7.pdf", 
    driveLink: "https://drive.google.com/file/d/1tReSEbjOJs1tfbKAI3aJj11ftOX0vMO-/view?usp=sharing",
    pendingApproval: false // Flag de aprobación
  },
  { 
    title: "Las aventuras maravillosas de Alicia.", 
    author: "Lewis Carroll para niños.", 
    theme: "Infantil", 
    image: "img/Lewis Carroll.png",
    shortSynopsis: "Las aventuras maravillosas de Alicia, escrita por Lewis Carroll.",
    longSynopsis: "Narra la historia de una niña llamada Alicia, quien, aburrida de estar junto a su hermana, sigue a un conejo blanco que habla y lleva reloj. Al caer por un túnel, Alicia llega a un mundo fantástico lleno de personajes excéntricos, como el Gato de Cheshire, la Reina de Corazones y el Sombrerero Loco. A lo largo de su travesía, Alicia se enfrenta a situaciones absurdas, como cambiar de tamaño al beber pociones mágicas o comer pasteles, lo que la lleva a cuestionar la lógica y las reglas de ese extraño mundo.",
    fullSynopsis: "Durante sus aventuras, Alicia se enfrenta a desafíos que le enseñan valiosas lecciones sobre la identidad y el crecimiento. En un juicio absurdo en el palacio de la Reina de Corazones, Alicia muestra valentía al desafiar la autoridad y cuestionar la injusticia. Al final, Alicia despierta de lo que parece ser un sueño, dejando abierta la interpretación de su aventura. La historia sigue siendo un clásico de la literatura infantil, celebrando la imaginación, el cuestionamiento de las normas y la curiosidad en un mundo donde lo absurdo es la regla.",
    downloadLink: "Libros/LewisCarroll.pdf", 
    driveLink: "https://drive.google.com/file/d/1Ati0_iUPXIbYDgPzmAkNx-OXbaqHTvjh/view?usp=sharing",
    pendingApproval: false // Flag de aprobación
  },
  // Otros libros con las mismas propiedades...
];

// Modales
const synopsisModal = document.getElementById("synopsisModal");
const adminModal = document.getElementById("adminModal");
const closeBtns = document.querySelectorAll(".close");

// Función para mostrar libros
function displayBooks(booksToDisplay) {
  const resultsDiv = document.getElementById("searchResults");
  resultsDiv.innerHTML = ""; // Limpiar resultados anteriores
  booksToDisplay.forEach(book => {
    const bookElement = document.createElement("div");
    bookElement.classList.add("book-item");
    bookElement.innerHTML = `
  <img src="${book.image}" alt="${book.title}">
  <h3>${book.title}</h3>
  <p>Autor: ${book.author}</p>
  <button onclick="showSynopsis('${book.title}')">
    <span>Sinopsis</span>
  </button>
  <button class="buttonDownload" onclick="downloadBook('${book.downloadLink}')">Download</button>
  <button onclick="openDrive('${book.driveLink}')">Drive</button>
`;
    
    resultsDiv.appendChild(bookElement);
  });
}

// Mostrar la sinopsis del libro
let clickCount = 0; // Variable para contar los clics
function showSynopsis(title) {
  const book = books.find(b => b.title === title);
  if (book) {
    document.getElementById("shortSynopsis").innerText = book.shortSynopsis;
    document.getElementById("longSynopsis").innerText = book.longSynopsis;
    document.getElementById("fullSynopsis").innerText = book.fullSynopsis;

    // Al principio, solo mostrar la sinopsis corta
    document.getElementById("longSynopsis").style.display = "none";
    document.getElementById("fullSynopsis").style.display = "none";
    synopsisModal.style.display = "block";

    // Cambiar entre las sinopsis al hacer clic en "Ver más"
    const moreSynopsisBtn = document.getElementById("moreSynopsisBtn");
    moreSynopsisBtn.onclick = () => {
      clickCount++;
      if (clickCount === 1) {
        // Mostrar sinopsis larga
        document.getElementById("longSynopsis").style.display = "block";
      } else if (clickCount === 2) {
        // Mostrar sinopsis completa
        document.getElementById("fullSynopsis").style.display = "block";
      } else {
        // Volver a la sinopsis corta
        document.getElementById("longSynopsis").style.display = "none";
        document.getElementById("fullSynopsis").style.display = "none";
        clickCount = 0; // Reseteamos el ciclo
      }
    };
  }
}
// Función para descargar el libro
function downloadBook(downloadLink) {
  const a = document.createElement('a');
  a.href = downloadLink; 
  a.download = '';  // Si el archivo tiene un nombre específico, puedes ponerlo aquí.
  a.click();
}

// Solicitar descarga (Notificar al administrador)
function requestDownload(title) {
  const book = books.find(b => b.title === title);
  if (book && !book.pendingApproval) {
    // Notificar al administrador
    book.pendingApproval = true; // Se marca la solicitud como pendiente
    document.getElementById("adminMessage").innerText = `Hay una solicitud de descarga para el libro: ${book.title}`;
    adminModal.style.display = "block";
  }
}

// Permitir o denegar la descarga desde el panel de administrador
document.getElementById("allowDownloadBtn").addEventListener("click", function() {
  alert("¡Descarga permitida!");
  adminModal.style.display = "none";
});

document.getElementById("denyDownloadBtn").addEventListener("click", function() {
  alert("¡Descarga denegada!");
  adminModal.style.display = "none";
});

// Cerrar modales
closeBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    synopsisModal.style.display = "none";
    adminModal.style.display = "none";
  });
});

// Función para buscar libros
document.getElementById("search").addEventListener("input", function() {
  const query = this.value.toLowerCase();
  const filteredBooks = books.filter(book => book.title.toLowerCase().includes(query));
  displayBooks(filteredBooks);
});

// Mostrar todos los libros al cargar
displayBooks(books);


function openDrive(driveLink) {
  window.open(driveLink, '_blank'); // Abre el enlace en una nueva pestaña
}
