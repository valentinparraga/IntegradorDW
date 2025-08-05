import { getActiveUser } from './utils.js'
//Lógica de CARRITO



// Elementos de CARRITO
const cartContainer = document.getElementById("cart");
const buyAllProductsBtn = document.querySelector(".btn-cart-buy-all");
const cartBtnMinus = document.querySelector(".cart-btn-minus");
const cartBtnPlus = document.querySelector(".cart-btn-plus");
const cartBtnDelete = document.querySelector(".cart-product-delete-btn");
const btnBuyProduct = document.querySelectorAll(".btn-card-product-buy");

//Usuario activo
const activeUser = getActiveUser()
//Defino el carrito a partir del localStorage o vacío si no hay nada
export const cart = JSON.parse(localStorage.getItem("cart")) || [];
//Función p/ guardar el carrito
const saveCartToLocalStorage = () => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

//Función para renderizar producto en el carrito
const createCartProductTemplate = (product) => {
  const { img, title, price, category } = product.dataset
  const productTemplate =  
  `    <!-- PLANTILLA DE PRODUCTO -->
    <div class="cart-product">
      <img
        src= "${img}"
        alt="Tabla de surf"
        class="cart-product-img"
      />
      <span class="cart-product-details">
        <p class="cart-product-title">
          <small>Tabla: <br/>  </small>
          ${title}
        </p>
        <p class="cart-product-price">
          <small>Precio: <br/>  </small>
          ${price}
        </p>
        <p class="cart-product-quantity">
          <small>Cantidad: <br/> </small>
          ${category}
        </p>
      </span>
      <span class="cart-controls">
        <button type="button" class="cart-btn cart-btn-minus" aria-label="Restar">  -  </button>
        <button type="button" class="cart-btn cart-btn-plus" aria-label="Sumar">    +  </button>
        <button
          type="button"
          class="cart-product-delete-btn"
          aria-label="Eliminar producto"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="#ff9900"
            viewBox="0 0 24 24"
          >
            <path
              d="M3 6h18v2H3V6zm3 3h12v12a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9zm2 
                  2v8h2v-8H8zm4 0v8h2v-8h-2z"
            />
          </svg>
        </button>
      </span>
      </div>`
  return productTemplate;
};

const prod = document.querySelector('.producto-comprado')

export const buyProductHandler = ({target}) =>{
  //si no se clickeó el botón de compra, no pasa nada
  if (!target.classList.contains("btn-card-product-buy")){
    return
  }
  //si no hay usuario activo --> doy feedback (no podes comprar sin cuenta)
  if (!activeUser){
    window.alert('Registrate o iniciá sesión para comprar una tablita🏄‍♂️')
  }
  prod.innerHTML += createCartProductTemplate(target.dataset);
}



//PSEUDO

// LOGICA DE CARRITO
// si no hay nada (!cart.length) doy feedback y retorno
// ITERAR lista de productos (cart) y mapear con un join:
//  lo que haya con un createCartProductTemplate que recibe el producto, lo desestructuro (incluir quantity) y reemplazo la data

// LOGICA DE PRODUCTO
//    CAPTAR CONTAINER/CARD/BOTON y ESCUCHAR EL EVENTO CLICK (DEPENDIENDO DE DONDE HAYA SIDO ACTUAR)
//        si el click no fue en el boton de comprar, deniego y retorno
//        si no hay usuario activo, deniego y retorno
//    si pasa las validaciones, capturo la info del producto clickeado (createProductData (target.dataset) -> destructura el dataset y devuelve el objeto)
//      isExistingCardProduct = metodo find al cart comparando la id del producto que se quiere agregar
//    si hay uno o más del mismo elemento en el carrito, agrego 1 y doy feedback
//        sino, agrego el primero y doy feedback
//    actualizar el carrito (guardar en LS, renderizar con nueva información -> (total) y chequear botones)
// ADEMÁS
//      handleQuantity --> recibe target y pregunta qué clase contiene,
//      si tiene clase down resta un producto y si contiene plus suma uno. al final actualiza y retorna
//      ambas son funciones (handleMinus y handlePlus)

//si algo no queda claro, ver final del video
