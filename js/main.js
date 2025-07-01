const aboutSection = document.getElementById("about");
const aboutTemplate = () =>{
    return `
        <div class="about-text">
            <h3 class="section-title" id="about-title">Surf sin límites</h3>
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
const renderTrips = (trips) =>{
    tripsSection.innerHTML += trips.map(createCardTrip).join(""); 
}
renderTrips(trips)

const productsContainer = document.getElementById('products');
const createCardProduct = (surfboard) =>{
    return  `<div class="card" id="${surfboard.id}">
        <h2 class="board-name">${surfboard.name}</h2>
        <h4 class="board-category">${surfboard.category}</h4>
        <p class="board-price">${surfboard.price}</p>
        <img src="${surfboard.image}" alt="" class="board-img">
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