const trips = [
  {
    id: 1,
    spot: "Mar del Plata, Argentina",
    coords: "38°00′00″S, 57°33′00″W",
    level: 10,
    category: "noob",
    nextDate: "nov. 2025",
    image: "/assets/spots/mdp.jpg"
  },
  {
    id: 2,
    spot: "Mavericks, California",
    coords: "37°29′42″N, 122°30′23″W",
    level: 50,
    category: "advanced",
    nextDate: "oct. 2025",
    image: "/assets/spots/mavericks.jpg"
  },
  {
    id: 3,
    spot: "Cloudbreak, Fiji",
    coords: "17°50′05″S, 177°11′46″E",
    level: 65,
    category: "advanced",
    nextDate: "ago. 2025",
    image: "/assets/spots/cloudbreak.jpg"
  },
  {
    id: 4,
    spot: "Mentawai, Indonesia",
    coords: "2°00′00″S, 99°30′00″E",
    level: 80,
    category: "pro",
    nextDate: "ene. 2026",
    image: "/assets/spots/mentawai.jpg"
  },
  {
    id: 5,
    spot: "Nazaré, Portugal",
    coords: "39°36′52″N, 9°04′26″W",
    level: 95,
    category: "pro",
    nextDate: "jul. 2025",
    image: "/assets/spots/nazare.jpg"
  },
  {
    id: 6,
    spot: "Teahupo'o, Tahití",
    coords: "17°50′33″S, 149°15′38″W",
    level: 100,
    category: "pro",
    nextDate: "mar. 2026",
    image: "/assets/spots/teahupo.jpg"
  }
];

const surfboards = [
  {
    id: 1,
    name: "Tormenta Azul Pro",
    price: 175000,
    category: "pro",
    image: "/assets/boards/Tabla_FNL.png"
  },
  {
    id: 2,
    name: "Ala de Mar Rookie",
    price: 120000,
    category: "rookie",
    image: "/assets/boards/Tabla_Sup.png"
  },
  {
    id: 3,
    name: "Neptune Edge Advanced",
    price: 142500,
    category: "advanced",
    image: "/assets/boards/Tabla_Magna.png"
  },
  {
    id: 4,
    name: "Sunstrike Rookie",
    price: 128000,
    category: "rookie",
    image: "/assets/boards/Tabla_Rusty.png"
  },
  {
    id: 5,
    name: "Reef Slayer Pro",
    price: 210000,
    category: "pro",
    image: "/assets/boards/Tabla_Xtorsion_Fish.png"
  },
  {
    id: 6,
    name: "Pacific Pulse Advanced",
    price: 155000,
    category: "advanced",
    image: "/assets/boards/Tabla_Fish.png"
  }
];

const aboutSection = document.getElementById("about");
const aboutTemplate = () =>{
    return `
        <div class="about-text">
            <h2 class="section-title" id="about-title">Surf sin límites</h2>
            <p>Conocé todo lo que tenemos para vos.</p>
        </div>
        <div class="about-cards-container">
            <div class="about-card">
                <!-- <h4 class="about-card-title"><small>🏄</small>Tablas</h4> -->
                <img src="/assets/card icons/surfboard.svg" alt="benefit">
                <p class="about-card-text">Los mejores viajes y las mejores clases!</p>
            </div>
            <div class="about-card">
                <!-- <h4 class="about-card-title"><small>🏄</small>Trajes</h4> -->
                <img src="/assets/card icons/wave.svg" alt="benefit">
                <p class="about-card-text">Para principiantes y también para los más expertos!</p>
            </div>
            <div class="about-card">
                <!-- <h4 class="about-card-title"><small>🏄</small>Accesorios</h4> -->
                <img src="/assets/card icons/shaka-svgrepo-com.svg" alt="benefit">
                <p class="about-card-text">La mejor atención personalizada y soporte 24/7!</p>
            </div>
        </div>
    `
}
function renderAbout() {
    aboutSection.innerHTML += aboutTemplate();
}
renderAbout();

const tripsSection = document.getElementById("trips-container");
const createCardTrip = (trip) =>{
    return `
    <div class="trip-card">
        <h4 class="trip-card-title">${trip.spot}</h4>
        <img src="${trip.image}" alt="Trip Spot">
        <p class="trip-card-coords">${trip.coords}</p>
        <span class="trip-card-difficulty-level">
          Nivel
          <div class="custom-meter">
            <div class="custom-meter-bar noob" style="width: ${trip.level}%"></div>
          </div>
        </span>
        <small class="trip-card-next-date">
          <p>Próxima salida: ${trip.nextDate}</p>
          <a href="#">Más info</a>
        </small>
    </div>
        `
}
function renderTrips(trips) {
    tripsSection.innerHTML += trips.map(createCardTrip).join("");
}
renderTrips(trips)

const productsContainer = document.getElementById('products-cards-container');
const createCardProduct = (surfboard) =>{
    return `
    <div class="product-card" id="${surfboard.id}">
        <h2 class="board-name">${surfboard.name}</h2>
        <h4 class="board-category">${surfboard.category}</h4>
        <img class="board-img" src="${surfboard.image}" alt="${surfboard.category}">
        <span class="board-buy">
            <p class="board-price">${surfboard.price}</p>
            <a href="#" class="login-btn">Comprar</a>        
        </span>    
    </div>`
}
function renderProducts(surfboards) {
    productsContainer.innerHTML += surfboards.map(createCardProduct).join("");
}
renderProducts(surfboards);

const contactContainer = document.getElementById('contact');
const contactTemplate = () =>{
    return `
        <h3 class="section-title" id="contact-title">Contactanos</h3>
        <div class="contact-container">
            
            <div class="contact-map-container">
                <h5>Encontranos</h5>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3902.2278278770777!2d-157.69628759979537!3d21.337994223350037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1ses-419!2sar!4v1748539694596!5m2!1ses-419!2sar" 
                        title="Mapa"
                        style="
                        border: 0;
                        width: 85%;
                        height: 100%;
                        max-height: 800px;"
                        allowfullscreen="true"
                        loading="lazy" 
                        referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>

            <div class="contact-form-container">
                <h5>Escribinos</h5>
                <form class="contact-form" autocomplete="off">
                    <input required class="contact-input" type="text" placeholder="Nombre">
                    <label for="motivo"> 
                        <select id="motivo" class="contact-input" placeholder="Motivo">
                            <option value="motivo" disabled selected>Seleccionar un motivo</option>
                            <option value="quejas">Quejas</option>
                            <option value="sugerencias">Sugerencias</option>
                            <option value="soporte">Soporte</option>
                            <option value="trabaja">Trabajá con nosotros</option>
                        </select>
                    </label> 
                    <input required class="contact-input" type="text" placeholder="Asunto">
                    <input required class="contact-input" type="text" placeholder="Email">
                    <textarea class="contact-message" id="message" placeholder="Escriba su mensaje."></textarea>
                <button type="submit" class="contact-btn">Enviar</button>
                </form>
            </div>
        </div>
    `
}
function renderContact (){
    contactContainer.innerHTML += contactTemplate();
}
renderContact();