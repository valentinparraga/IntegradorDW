import { appState } from "./data.js";
import { getActiveUser } from "./utils.js";
import { cart } from "./cart.js";

// Captación de secciones
const body = document.getElementById("body");
const navbar = document.getElementById("navbar");
const cartContainer = document.getElementById("cart-container");
const heroSection = document.getElementById("hero");
const aboutSection = document.getElementById("about");
const tripsSection = document.getElementById("trips-container");
const productsContainer = document.getElementById("products-cards-container");
const contactContainer = document.getElementById("contact");
const footerContainer = document.getElementById("footer");
// Funciones de renderizado de secciones
function renderNavbar() {
  const activeUser = getActiveUser();
  if (activeUser) {
    const navbarWithUser = () => {
      return `<!-- Logo -->
      <img
        src="/assets/nav icons/logo.png"
        alt="Logo de la página"
        class="nav-logo"
      />
      <!-- Iconos SVG: Burger menu (SOLO MOBILE) y carrito -->
      <div class="nav-icons">
        <button id="nav-burger" type="button" class="nav-btn" aria-label="Menú">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="#ff9900"
            viewBox="0 0 24 24">
            <path d="M3 6h18v2H3zM3 11h18v2H3zM3 16h18v2H3z" />
          </svg></button>
        <button id="nav-cart" type="button" class="nav-btn" aria-label="Carrito">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="#ff9900"
            viewBox="0 0 24 24"
          >
            <path
              d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 
                           0-1.99.9-1.99 2S15.9 22 17 22s2-.9 2-2-.9-2-2-2zM7.16 
                           13h9.84c.75 0 1.41-.41 1.75-1.03l3.58-6.49a1 1 0 0 
                           0-.88-1.48H5.21L4.27 2H1v2h2l3.6 7.59-1.35 
                           2.44C4.52 15.37 5.48 17 7 17h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63z"
            />
          </svg></button>
      </div>
      <div id="nav-container" class="hidden">
        <!-- Lista de navegación -->
        <ul class="nav-links">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#products">Tablas</a></li>
          <li><a href="#trips">Viajes</a></li>
          <li><a href="#about">Nosotros</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
        <!-- Contenedor de botones de sesión -->
        <div class="nav-auth-container">
          <!-- Saludar a usuario logeado-->
          <span id="hello-user">Hola, ${activeUser.name}</span>
          <!-- Icono de carrito-->
          <button type="button" class="nav-btn nav-cart" aria-label="Carrito">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              fill="#ff9900"
              viewBox="0 0 24 24"
            >
              <path
                d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 
                  0-1.99.9-1.99 2S15.9 22 17 22s2-.9 2-2-.9-2-2-2zM7.16 
                  13h9.84c.75 0 1.41-.41 1.75-1.03l3.58-6.49a1 1 0 0 
                  0-.88-1.48H5.21L4.27 2H1v2h2l3.6 7.59-1.35 
                  2.44C4.52 15.37 5.48 17 7 17h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63z"
              />
            </svg>
          </button>
          <!-- Salir (se oculta si SessionStorage está vacío) -->
          <a id="logout-btn" href="#">Salir</a>
        </div>
      </div>`;
    };
    navbar.innerHTML = navbarWithUser();
  } else {
    const navbarWithoutUser = () => {
      return `
      <!-- Logo -->
        <img
          src="/assets/nav icons/logo.png"
          alt="Logo de la página"
          class="nav-logo"
        />
      <!-- Iconos SVG: Burger menu (SOLO MOBILE) y carrito -->
      <div class="nav-icons">
        <button id="nav-burger" type="button" class="nav-btn" aria-label="Menú">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="#ff9900"
            viewBox="0 0 24 24"
          >
            <path d="M3 6h18v2H3zM3 11h18v2H3zM3 16h18v2H3z" />
          </svg>
        </button>
      </div>
    <div id="nav-container" class="hidden">
        <!-- Lista de navegación -->
        <ul class="nav-links">
          <li><a href="#inicio">Inicio</a></li>
          <li><a href="#products">Tablas</a></li>
          <li><a href="#trips">Viajes</a></li>
          <li><a href="#about">Nosotros</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
        <!-- Contenedor de botones de sesión -->
                <!-- Botones de login -->
        <div class="nav-auth-container">
          <a href="./login.html" class="btn-login">Ingresar</a>
          <a href="./register.html" class="btn-register">Registrarse</a>
        </div>
      </div>`;
    };
    navbar.innerHTML = navbarWithoutUser();
  }
}
function renderHero() {
  const heroTemplate = () => {
    return `
      <img
        style="width: 100%"
        src="/assets/main-hero-img cropped.png"
        alt="Main background image"/>
      <div class="hero-text">
        <h2 class="hero-title">
          Tu próxima ola te espera. <br />
          <span>Nosotros te preparamos.</span>
        </h2>
      </div>`;
  };
  heroSection.innerHTML = heroTemplate();
}
function renderAbout() {
  const aboutTemplate = () => {
    return `
    <h2 class="section-title" id="about-title">Surf sin límites</h2>
    <p class="section-text">Conocé todo lo que tenemos para vos.</p>
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
    </div>`;
  };
  aboutSection.innerHTML += aboutTemplate();
}
function renderTrips(trips) {
  const createCardTrip = (trip) => {
    const { spot, image, coords, category, level, nextDate } = trip;
    return `
  <div class="trip-card">
      <h4 class="trip-card-title">${spot}</h4>
      <img src="${image}" alt="Trip Spot">
      <p class="trip-card-coords">${coords}</p>
      <span class="trip-card-difficulty-level">
        Nivel
        <div class="custom-meter">
          <div class="custom-meter-bar ${category}" style="width: ${level}%"></div>
        </div>
      </span>
      <small class="trip-card-next-date">
        <p>Próxima salida: ${nextDate}</p>
        <a href="#">Más info</a>
      </small>
  </div>`;
  };
  tripsSection.innerHTML += trips.map(createCardTrip).join("");
}
function renderProducts(surfboards) {
  const createCardProduct = (surfboard) => {
    const { id, name, category, image, price } = surfboard;
    let randomShippingCost =
      Math.floor(Math.random() * (8000 - 2000 + 1)) + 2000;
    return `
  <div class="product-card">
      <!--Info de producto-->
      <span class="board-info">
         <!--Nombre-->
        <h2 class="board-name">${name}</h2>
        <!--Categoría-->
        <h4 class="board-category">${category}</h4>        
      </span>
      <img class="board-img" src="${image}" alt="${category}">
      <!--Información de compra-->
      <span class="board-buy">
        <!--Precio-->
        <p class="board-price">${price}</p>
        <!--Costo de envío-->
        <small style="font-size: 0.8em;">Envío: $${randomShippingCost}</small>
        <!--Botón de compra-->
        <button id="btn-buy-product"
                type="button"
                class="btn-card-product-buy"
                data-id='${id}' data-name='${name}' data-image='${image}' data-price='${price}' data-randomShippingCost='${randomShippingCost}'
        >Comprar</button>        
      </span>    
  </div>`;
  };
  productsContainer.innerHTML += surfboards.map(createCardProduct).join("");
}
function renderContact() {
  const contactTemplate = () => {
    return `
      <h3 class="section-title" id="contact-title">Contactanos</h3>
      <div class="contact-container">
        <span id="show-form-text">¿Querés poner en contacto con nosotros? Enviá un <button type = "button" id ="show-form-btn">formulario</button>
        </span>
        <div id="contact-form-container" class="contact-form-container hidden">
          <h5>Escribinos</h5>
          <form class="contact-form" autocomplete="off">
            <input required name="name" class="contact-input" type="text" placeholder="Nombre" autocomplete="off">
            <select id="motivo" class="contact-input" placeholder="Motivo">
              <option value="motivo" disabled selected>Seleccionar un motivo</option>
              <option value="quejas">Quejas</option>
              <option value="sugerencias">Sugerencias</option>
              <option value="soporte">Soporte</option>
              <option value="trabaja">Trabajá con nosotros</option>
            </select>
            <input required name="asunto" class="contact-input" type="text" placeholder="Asunto">
            <input required name="email" class="contact-input" type="text" placeholder="Email" autocomplete="off">
            <textarea required class="contact-message" id="message" placeholder="Escriba su mensaje."></textarea>
        <button type="submit" class="contact-btn">Enviar</button>
        </form>
        </div>
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
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
      </div>`;
  };
  contactContainer.innerHTML += contactTemplate();
}
function renderFooter() {
  const footerTemplate = () => {
    return `
      <span class="footer-links">
        <p>Newsletter</p>
        <p>Condiciones de uso</p>
        <p>Preferencias de cookies</p>
        <p>Botón de arrepentimiento</p>
        <p>Política de envíos</p>
        <p>Política de reembolso</p>
        <p>Trabajá con nosotros</p>
        <p>Soporte</p>  
      </span>
      <span class="footer-signature">
        <small>Hecho por: Valentin Párraga.</small>
      </span>
    `;
  };
  footerContainer.innerHTML = footerTemplate();
}
export function renderCart() {
  if (!cart.length) {
    const emptyCartMessage = () => {
      return `
    <!-- Texto cuando el carrito está vacío -->
      <small class="cart-empty-text">No hay productos en el carrito.</small>
      `;
    }
    cartContainer.innerHTML += emptyCartMessage();
  } else {
    const cartTemplate = () => {
      return `
      <!-- Lista de productos  -->
      <div class="cart-products-container">
      
      </div>
      <hr/>
      <span id="cart-buy-container">
         <small class="cart-total-price">
           <p>Total: </p>      
         </small>  
         <a href="#" class="btn-cart-buy-all btn-buy">Comprar</a>
      </span>`;
    }
    cartContainer.innerHTML += cartTemplate();
  }
}
// Lógica de navbar y carrito
export function navCartSetup() {
  // Iconos de navbar mobile
  const cart = document.getElementById("cart");
  const navContainer = document.getElementById("nav-container");
  const openCartMobileBtn = document.getElementById("nav-cart");
  const openCartDekstopBtn = document.querySelector(".nav-btn.nav-cart");
  const cartBtnClose = document.querySelector(".cart-btn-close");
  const navBurgerBtn = document.getElementById("nav-burger");

  const isAnyOpen = () => {
    return (
      navContainer.classList.contains("active") ||
      cartContainer.classList.contains("active")
    );
  };

  function toggleCart() {
    if (navContainer.classList.contains("active")) {
      navContainer.classList.remove("active");
    }
    cartContainer.classList.toggle("active");
  }

  function toggleNavbar() {
    if (cartContainer.classList.contains("active")) {
      cartContainer.classList.remove("active");
    }
    navContainer.classList.toggle("active");
  }

  if (navBurgerBtn) {
    navBurgerBtn.addEventListener("click", toggleNavbar);
  }
  if (getActiveUser() && openCartMobileBtn && openCartDekstopBtn){
    openCartDekstopBtn.addEventListener("click", toggleCart);
    openCartMobileBtn.addEventListener("click", toggleCart);
    cartBtnClose.addEventListener("click", toggleCart)

  }
}
// Lógica de ver más
export const showMoreBoards = () => {
  appState.tablasActual += 1;
  let { tablas, tablasActual } = appState;
  renderProducts(tablas[tablasActual]);
  if (appState.tablasActual == 3) {
    showMoreBoardsBtn.classList.add("hidden");
  }
};
export const showMoreTrips = () => {
  appState.tripsActual += 1;
  let { trips, tripsActual } = appState;
  renderTrips(trips[tripsActual]);
  if (appState.tripsActual == 4) {
    showMoreTripsBtn.classList.add("hidden");
  }
};
// Mostrar formulario de contacto
export function showForm() {
  const showFormText = document.getElementById("show-form-text");
  const showFormBtn = document.getElementById("show-form-btn");
  const form = document.getElementById("contact-form-container");
  const toggleForm = () => {
    if (form.classList.contains("hidden")) {
      form.classList.add("active");
      showFormText.classList.toggle("hidden");
    }
  };
  showFormBtn.addEventListener("click", toggleForm);
}

export function renderPage() {
  renderHero();
  renderNavbar();
  renderCart();
  renderAbout();
  renderTrips(appState.trips[0]);
  renderProducts(appState.tablas[0]);
  renderContact();
  renderFooter();

}
