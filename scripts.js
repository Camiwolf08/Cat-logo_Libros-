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
    driveLink: "https://drive.google.com/file/d/1WisIUuRLbg6aBk611KjtR1bmBgauQXG2/view?usp=sharing",
    pendingApproval: false 
  },
  { 
    title: "Cancion para dormir a pastillita.", 
    author: "Miguel N. Lira Ilustradora: Angelina Beloff.", 
    image: "img/Cancion para dormir a pastillita.png",
    shortSynopsis: "Escrita por el polímata tlaxcalteca Miguel N. Lira e ilustrada por la artista rusa Angelina Beloff.",
    longSynopsis: "Canción para dormir a Pastillita es un poema para el arrullo publicado originalmente por la Secretaría de Educación Pública (SEP) dentro de la Biblioteca de Chapulín, el 13 de octubre de 1943, un día antes del cumpleaños de su autor. Sus dimensiones son de 31.5 x 24.5 cm, es decir, es un libro tamaño folio. Su tiraje fue de aproximadamente 3 000 ejemplares y se vendió en escuelas, librerías y en el Departamento de Publicidad y Propaganda de la SEP por 2 pesos con 50 centavos.",
    fullSynopsis: "En esta canción, compuesta en 20 cuartetas romanceadas en versos hexasílabos y octosílabos ⸻métrica común en este tipo de composiciones⸻, es hora de que el niño duerma, pues es tiempo de que la “luna de marfil” dé vida a los muñecos para que él, en su imaginación, juegue con ellos. Así, en el mundo de los sueños, al ritmo de los versos que simulan unos redobles militares, “viene el gigante / tocando el tambor” junto a otros soldaditos y, en su procesión, van viajando por colinas y hermosos montes por los que el niño también viaja, ya que “sueña que es un soldadito / que es un soldadito niño”. Montando un caballito blanco, el niño corre libremente mientras los soldaditos lo miran y la noche transcurre hacia el amanecer.",
    downloadLink: "Libros/Zar saltán.pdf", 
    driveLink: "https://drive.google.com/file/d/1xchvRX4Mx4PwDRTyWsNgQlcjSaIknBS-/view?usp=drive_link",
    pendingApproval: false // Flag de aprobación
  }, 
  { 
    title: "Cancionero de los niños invisibles.", 
    author: "Emilio Lome (Texto) Jimena Estibaliz (Ilustraciones).", 
    theme: "Infantil", 
    image: "img/Cancionero.png",
    shortSynopsis: "Cancionero de los niños invisibles es una obra poética escrita por Emilio Lome, que se acompaña de las ilustraciones de Jimena Estibaliz. A través de sus versos, el libro da voz a los niños invisibles, aquellos que viven en situaciones de abandono, marginación o que simplemente son ignorados por la sociedad. Cada poema se convierte en una reflexión profunda sobre temas como la soledad, la desigualdad, la esperanza y la lucha por ser vistos, invitando a los lectores a tomar conciencia de la realidad de estos niños que no siempre reciben la atención que merecen.",
    longSynopsis: "Los versos de Lome abordan con sensibilidad los diferentes aspectos de la vida de estos niños, quienes son invisibles no solo en el sentido físico, sino también en el emocional y social. Cada poema es una pequeña ventana al dolor, la tristeza, pero también a la resiliencia y a los sueños que persisten, aún en circunstancias difíciles. La obra no solo toca el corazón, sino que también desafía a los lectores a reflexionar sobre el trato hacia los más vulnerables y sobre la importancia de crear una sociedad más inclusiva y empática.",
    fullSynopsis: "Las ilustraciones de Jimena Estibaliz juegan un papel crucial en la obra, complementando las emociones y el tono de los poemas de manera visual. Con su estilo delicado y lleno de expresividad, las imágenes logran transmitir la fragilidad, la esperanza y las dificultades que enfrentan los niños invisibles, enriqueciendo la experiencia de lectura. Cancionero de los niños invisibles es, por lo tanto, una obra conmovedora que no solo apela a la sensibilidad, sino que también invita a la reflexión crítica sobre la importancia de reconocer a todos los niños, sin importar su situación, y darles el lugar que merecen en la sociedad.",
    downloadLink: "Libros/Cancionero_Emilio Lome.pdf", 
    driveLink: "https://drive.google.com/file/d/1ES1kNHlTqMIsZU0lZl5DDRU57bTA0VKa/view?usp=sharing",
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
    driveLink: "https://drive.google.com/file/d/1mOKNKw-NtYjjkeMg8VxQ4WrO6z-bWvtL/view?usp=sharing",
    pendingApproval: false 
  },
  { 
    title: "El club de la salamandra.", 
    author: "Autor: Alfredo Cardona Peña Ilustrador: Jesús Escobedo.", 
    theme: "Infantil", 
    image: "img/El club de la salamandra.png",
    shortSynopsis: "La máscara que hablaba es un cuento infantil del autor costarricense Alfredo Cardona Peña e ilustrado por el mexicano Jesús Escobedo. Se publicó por primera vez en 1944, dentro de la colección Biblioteca de Chapulín de la Secretaría de Educación Pública. En la primera edición, el libro consta de 22 páginas y tiene un tamaño de 31 x 24.5 cm.",
    longSynopsis: "Los colores que predominan en las ilustraciones de Escobedo son el naranja, rojo y amarillo, lo que le da el toque característico y lo distingue de los otros 15 volúmenes que componen la serie infantil. Incluso, en la segunda reedición de 1989, a cargo de la Dirección General de Publicaciones de Conaculta, el fondo de la portada, que en un inicio era blanca, es totalmente naranja, y tuvo un tamaño similar de 30.5 x 22 cm. A finales de los años 80, la SEP reimprimió varios libros de la colección en su serie Libros del Rincón, sin embargo, La máscara que hablaba ya no formó parte de la misma. Fue hasta el año 2014 que la editorial sevillana Ulises (Renacimiento) editó esta obra en el mismo volumen que La cucarachita Mondinga y el Ratón Pérez, título que también forma parte de la misma Biblioteca de Chapulín.",
    fullSynopsis: "El cuento infantil La máscara que hablaba comienza como algunos cuentos de tradición oral: el narrador explica de dónde escuchó la historia que provenía a su vez de otro narrador, que la escuchó de otro narrador. Es decir, se trata de una introducción convencional para simular que la historia se cuenta desde mucho tiempo atrás y de fuentes supuestamente confiables. En concreto, narra las ambiciones del Rey Sol, quien, a pesar de poseer muchas riquezas y tesoros, anuncia una recompensa para el donador de un regalo digno de su persona. Fue así que un extranjero le llevó una máscara mágica que al colocarla en la pared comenzó a hablar, a escuchar e incluso a hacer muecas. Por su posición, la máscara se enteraba de secretos y era buena consejera del Rey Sol, hasta que éste comenzó a dudar de ella.",
    downloadLink: "Libros/El club de la salamandra.pdf", 
    driveLink: "https://drive.google.com/file/d/1Bzm2q8jtyJ-xtYD2ArtLHhvBHSkhCjjz/view?usp=sharing",
    pendingApproval: false // Flag de aprobación
  },
  { 
    title: "El caballito jorobado.", 
    author: "Pyotr Pavlovich Yerchoff (autor del texto original en ruso) Angelina Beloff y Germán Cueto (traductores del ruso al español) Ilustradora: Angelina Beloff", 
    theme: "Infantil", 
    image: "img/El caballito jorobado.png",
    shortSynopsis: "El autor de este cuento es Pyotr Pavlovich Yerchoff, quien nació en 1815, en el lejano pueblo de Ishim, en Kazajistán. Desde muy temprana edad mostró interés por la literatura, tanto por la poesía como por el cuento. Escribió varios textos, pero ninguno tan famoso como “El caballito jorobado”, del cual se publicaron algunos fragmentos en la revista Biblioteca para la Lectura, en 1834, publicada en San Petersburgo, la cual, al ser una de las primeras revistas de gran tiraje en Rusia, permitió que “El caballito jorobado” llegara a manos de muchos lectores.",
    longSynopsis: "Yerchoff publicó otros cuentos que no resultaron tan exitosos ni tuvieron la trascendencia del que aquí nos ocupa. A pesar de su gusto y su talento para la escritura, la carrera literaria de Yerchoff se vio afectada por numerosas tragedias personales y ningún otro texto volvió a tener la acogida de “El caballito jorobado”. Yerchoff se dedicó durante años a trabajar como profesor de literatura y sus pretensiones literarias se fueron diluyendo entre numerosos problemas familiares que se sucedieron casi sin tregua. No cabe duda de que a Yerchoff le hubiera venido bien un caballito jorobado que le ayudara a sortear los desafíos cotidianos. Lamentablemente, en la realidad no había un ser mágico siempre presto a cumplir sus deseos. Yerchoff falleció muy joven, en 1869, a los 54 años, en Tobolsk.",
    fullSynopsis: "La trama de “El caballito jorobado” engancha al lector desde la primera página. Se trata de una narración que sigue las pautas de numerosos cuentos clásicos en los que el personaje principal, en este caso Vanka, a quien nadie creía capaz de un gran destino, pasa de vivir una vida insignificante a ser rey. Al igual que el gato con botas ayudó al marqués de Carabás en el cuento de Charles Perrault, sacándolo de la miseria gracias a su agudeza, y así como el genio fue fiel servidor y amigo de un Aladino que logró aquello que más deseaba en el memorable cuento de Las mil y una noches, de igual manera, el caballito jorobado acompaña a Vanka en sus aventuras, es su aliado, su protector, su amigo. Cuando hojeamos las páginas del libro, conectamos con arquetipos literarios, personajes con atributos claramente identificables: el codicioso, el flojo, el avaro, el honesto. El cuento es entretenido y la narración ágil. La vulnerabilidad de Vanka nos hace empatizar con él y leemos con asombro cómo va sorteando cada infortunio y sale airoso de cuanto obstáculo se le presenta, gracias, por supuesto, a su cuadrúpedo amigo. Página a página deseamos también nosotros un caballito jorobado que nos acompañe en nuestras propias aventuras.",
    downloadLink: "Libros/Pavlovich_El caballito jorobado.pdf", 
    driveLink: "https://drive.google.com/file/d/1mm7EqZEdl3w1TY8fmOZF9ke0kdmZ6Cig/view?usp=sharing",
    pendingApproval: false // Flag de aprobación
  },
  { 
    title: "El mal de ojo.", 
    author: "Nathaniel Hawthorne Ilustrador: José Chávez Morado.", 
    theme: "Infantil", 
    image: "img/El mal de ojo.png",
    shortSynopsis: "El Nathaniel Hawthorne (Salem, Massachusetts, 1804-1864) es uno de los autores estadounidenses más destacados del siglo XIX. Perteneciente a una de las estirpes fundadoras de su ciudad natal, descubrió en uno de sus antepasados, el implacable juez John Hathorne, involucrado en la persecución y quema de brujas de Salem, la encarnación de los valores que se dedicaría a combatir a lo largo de su vida.",
    longSynopsis: "Por ello, cambió su apellido original Hathorne y agregó la W con la que se le conoce. Sus obras, precisamente, destacan por la creación de un retrato opresivo y siniestro de la sociedad colonial cuyo centro es el fanatismo puritano y el autoritarismo, rasgos que están presentes en novelas como La letra escarlata o La casa de los siete altillos, joyas de la literatura gótica. Si algo logra transmitir de forma aguda el conjunto de su obra es la idea de maldad y de culpa.",
    fullSynopsis: "Cultivador excepcional del relato breve, Hawthorne supo imprimir una intensidad tal a sus relatos, que Edgar Allan Poe, en su reseña al libro Cuentos contados dos veces, lo consideró como digno ejemplo a seguir en la construcción del cuento, debido a su habilidad para crear la unidad de efecto; es decir, que en algunas obras pertenecientes a su narrativa breve, el potencial expresivo de cada uno de los elementos utilizados se va acumulando hasta suscitar una fuerte sacudida emocional en sus lectores, algo que se puede comprobar en textos excepcionales como “Wakefield”, “El joven Goodman Brown”, “La hija de Rappaccini”, “El velo negro del pastor” o “El experimento del doctor Heidegger”, por mencionar algunos.",
    downloadLink: "Libros/El mal de ojo.pdf", 
    driveLink: "https://drive.google.com/file/d/1TkqwI0mauGR--kpwK6tEcBmEu-gQ6NuL/view?usp=sharing",
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
    driveLink: "https://drive.google.com/file/d/1W32av_Hce7pgE45ztjcvew1mKc1WTLSS/view?usp=sharing",
    pendingApproval: false 
  },
  { 
    title: "La Cucarachita Mondinga y el Ratón Pérez.", 
    author: "Versión de Rosario Rubalcava. Ilustraciones de Julio Prieto.", 
    theme: "Infantil", 
    image: "img/La Cucarachita.png",
    shortSynopsis: "La Cucarachita Mondinga y el Ratón Pérez  Texto de Cecilia Böhl de Faber y Ruiz de Larrea (bajo el seudónimo de Fernán Caballero) Versión de Rosario Rubalcava. Ilustraciones de Julio Prieto.",
    longSynopsis: "La Cucarachita Mondinga y el Ratón Pérez es la versión mexicana, escrita por Rosario Rubalcava, de un famoso cuento clásico español de Fernán Caballero, el seudónimo de Cecilia Böhl de Faber y Ruiz de Larrea, escritora y folclorista española (1796-1877). Además de la versión mexicana, existen versiones de este cuento en otros países como Costa Rica, Cuba, Puerto Rico y Venezuela, y el nombre de la cucarachita varía, como en estos casos: La Cucarachita Martínez y el Ratón Pérez o La Cucarachita Martina y el Ratón Pérez.",
    fullSynopsis: "En este cuento la Cucarachita Mondinga tiene múltiples pretendientes que quieren casarse con ella (un toro, un perro, un gallo, un gato, un cochinito), pero a ella no le convence ninguno, por los fuertes sonidos que hacen. Sin embargo, cuando el Ratón Pérez se para frente a la casa de Cucarachita y pide su mano con un sonido diferente a todos los demás, ella decide que quiere casarse con él. Luego de la boda y de estar contentos en su hogar, ocurre un inesperado descuido que pone en peligro la vida del Ratón: al revolver la sopa desprevenidamente, en ausencia de su esposa que le había dicho que lo hiciera con la cuchara adecuada, el Ratón cae dentro de la olla. Al volver a casa, la Cucarachita y sus vecinos pasan un gran susto al ver la situación y unen fuerzas para poder rescatar al Ratón, que estaba muy cerca de ahogarse. Por suerte, logran salvarlo.",
    downloadLink: "Libros/Caballero_La Cucarachita Mondinga y el Ratón Pérez_Ints.pdf", 
    driveLink: "https://drive.google.com/file/d/1ea0mA5zplDX5RPI3A5IrMNhmDACq8eqA/view?usp=sharing",
    pendingApproval: false // Flag de aprobación
  },
 { 
    title: "Los hermanos de Ranita.", 
    author: "Texto de Rudyard Kipling Ilustraciones de Salvador Bartolozzi.", 
    image: "img/Los hermanos de ranita.png",
    shortSynopsis: "Los hermanos de Ranita es un cuento infantil del autor británico Rudyard Kipling e ilustrado por el español Salvador Bartolozzi. Se publicó por primera vez en 1943, dentro de la colección Biblioteca de Chapulín de la Secretaría de Educación Pública (SEP).",
    longSynopsis: "En esta primera edición, el libro consta de 30 páginas y ostenta una dimensión física de 31 x 24.5 cm. El espectro cromático que predomina en las ilustraciones de Los hermanos de Ranita incluye los colores verde, anaranjado y negro, en tonos ocre, con un difuminado de suaves trazos. Su reedición la llevó a cabo la Dirección General de Publicaciones del Consejo Nacional para la Cultura y las Artes en 1990. Ésta muestra dimensiones similares de 30.5 x 22 cm, y tuvo un tiraje de 10 mil ejemplares. El camino editorial de esta obra tuvo aquí su penúltima estación.",
    fullSynopsis: "Este relato infantil sentó precedente en la literatura dedicada a los niños. Su protagonista es un cachorro humano leal y valeroso. Terrible es el malvado tigre que lo reclama como su presa ante la manada, después de haberlo separado de su familia humana. Ranita crece entre sus hermanos lobos y sus amigos, el oso Paciente y la pantera Gallarda. Todos ellos le han mostrado los secretos y la ley de la jungla. Al enfrentar la decadencia natural del lobo Solitario, líder de la manada, y el rencor añejo de Terrible, Mowgli deberá demostrar su superioridad sobre amigos y enemigos. De modo que, para ello, roba —cual Prometeo— la “flor roja” del fuego a los humanos, con el fin de sobreponerse a Terrible y sus secuaces, para devolver el liderazgo de la jungla a Solitario y lograr el respeto indiscutible de la manada.",
    downloadLink: "Libros/Kipling_Los hermanos de Ranita_Ints.pdf", 
    driveLink: "https://drive.google.com/file/d/1BT1RBfg_CUG79MZGdoLEBaWcI9KPJNcP/view?usp=sharing",
    pendingApproval: false // Flag de aprobación
  },
  { 
    title: "Un gorrion en la guerra de las fieras.", 
    author: "Antonio Joaquín Robles.", 
    theme: "Infantil", 
    image: "img/Un gorrion en la guerra de las fieras.png",
    shortSynopsis: "Un gorrión en la guerra de las fieras Autor: Antonio Joaquín Robles",
    longSynopsis: "Cansados los animales de alguna selva de pegarse unos a otros, acordaron dividirse el territorio. Por un tiempo, reinó la paz, pero la ambición de Don Adolfo Elefante, ayudado por Don Benito Lobo y Don Niponcete Chacal, lo hace maquinar un plan para adueñarse de las casas y terrenos de Don Ratón, Doña Cebra y Doña Jirafa. Descubre cómo Don Tigre, Don Oso de las Nieves y Don León se enfrentan a Don Adolfo Elefante y cómo Don Gorrión logra vecerlo.",
    fullSynopsis: "Este cuento fue escrito por Antonio Joaquín Robles Soler, mejor conocido como Antoniorrobles. Para la publicación en Biblioteca de Chapulín de 1942 se pidió al artista plástico Gabriel Fernández Ledesma que dibujara a los protagonistas de esta historia.",
    downloadLink: "Libros/Un gorrion en la guerra de las fieras.pdf", 
    driveLink: "https://drive.google.com/file/d/1wqY7wa-soKeKbWqiCtTLI2SpT1W0apj7/view?usp=sharing",
    pendingApproval: false // Flag de aprobación
  },
  { 
    title: "Zar Saltan.", 
    author: "Antonio Joaquín Robles.", 
    theme: "Infantil", 
    image: "img/Zar Saltan.png",
    shortSynopsis: "Un gorrión en la guerra de las fieras Autor: Antonio Joaquín Robles.",
    longSynopsis: "Cansados los animales de alguna selva de pegarse unos a otros, acordaron dividirse el territorio. Por un tiempo, reinó la paz, pero la ambición de Don Adolfo Elefante, ayudado por Don Benito Lobo y Don Niponcete Chacal, lo hace maquinar un plan para adueñarse de las casas y terrenos de Don Ratón, Doña Cebra y Doña Jirafa. Descubre cómo Don Tigre, Don Oso de las Nieves y Don León se enfrentan a Don Adolfo Elefante y cómo Don Gorrión logra vecerlo.",
    fullSynopsis: "Este cuento fue escrito por Antonio Joaquín Robles Soler, mejor conocido como Antoniorrobles. Para la publicación en Biblioteca de Chapulín de 1942 se pidió al artista plástico Gabriel Fernández Ledesma que dibujara a los protagonistas de esta historia.",
    downloadLink: "Libros/Zar saltán.pdf", 
    driveLink: "https://drive.google.com/file/d/1Uz-9xH3vlhD9gvrJxGBJ51X25Kowp41q/view?usp=drive_link",
    pendingApproval: false // Flag de aprobación
  },
 
];

const synopsisModal = document.getElementById("synopsisModal");
const adminModal = document.getElementById("adminModal");
const closeBtns = document.querySelectorAll(".close");

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
  <button onclick="openDrive('${book.driveLink}')">Drive</button>`; 
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


