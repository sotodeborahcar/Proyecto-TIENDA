// ===> 👀 👀 👀 DECLARACION DE VARIABLES 👀 👀 👀 <===

const filtroBusqueda = document.querySelector("#filtro"); // = filtroNombre
const tarjetas = document.getElementsByClassName("product");
const filtroRating = document.getElementsByClassName("start-filter");
const checkboxes = document.querySelectorAll(".start-filter");
const filtroCategoria = document.getElementsByClassName("filter-category");
const botonLimpiar = document.querySelector(".filter-clear");
const productosMostrados = document.querySelector(".prod-mostrados");
const productosTotales = document.querySelector(".prod-totales");
const tarjetasHidden = document.getElementsByClassName("product hidden");

// ==> variable de vista de productos (lista o grilla)

const contenedorTarjetas = document.querySelector(".article-products");
const botonLista = document.querySelector(".lista");
const botonCuadricula = document.querySelector(".cuadricula");
const descripcionProductos = document.querySelectorAll(
  ".product-description-list"
);

// ===> variable tranformaciones:

const body = document.body; //11
const overlaySidebars = document.querySelector(".overlay.sidebars"); //25
const ventanaCarrito = document.querySelector(".seccion-carrito"); // 12
const botonAbrirCheckout = document.querySelector(".btn-comprar.carrito"); //15
const overlayPopups = document.querySelector(".overlay.popups"); //16
const mensajeCheckout = document.querySelector(".checkout-seccion"); //17
const btnVaciarCarrito = document.querySelector(".btn-vaciar.carrito"); //18
const mensajeVaciarCarrito = document.querySelector(
  ".vaciar-contenido-carrito"
); //19
const btnCancelarVaciarCarrito = document.querySelector(".btn-opcion-cancelar"); //20
const btnConfirmarVaciarCarrito = document.querySelector(
  ".btn-vaciar.confirmar-vaciar"
); //21

// ==> variables carrito

const botonAbrirCarrito = document.querySelector(".btn-cart");
const botonCerrarCarrito = document.querySelector(".carrito.boton-cerrar");
const botonAgregarProdCarrito = document.querySelectorAll(".button-sale");
const mensajeCarritoVacio = document.querySelector(".contenedor-carrito-vacio");
const contenedorCarritoLleno = document.querySelector(
  ".contenedor-carrito-lleno"
);
const contenidoCarritoLleno = document.querySelector(
  ".cant-productos-agregados"
);
const subtotalCarrito = document.querySelector(".valor-subtotal-carrito");
const productosAgregadosCarrito = document.querySelectorAll(
  ".producto-agregado"
); //===> se agrega la clase al boton: COMPRAR de cada article para que cuando se haga clic aparezca en el checkout
const contadorProductosHeader = document.querySelector(".carrito-contador");
const contadorProductosCarrito = document.querySelector(".cant-prod-carrito");
const btnSeguirComprando = document.querySelector(".btn-seguir-comprando"); //22

// ===> variables checkout:

const subtotal = document.querySelector(".subtotal-valor"); //41
const descuento = document.querySelector(".descuento-valor"); //42
const envio = document.querySelector(".envio-valor"); //43
const recargo = document.querySelector(".recargo-valor"); //44
const total = document.querySelector(".total-valor"); //45
const opcionesPago = document.querySelectorAll(".opc-pago"); //46
//
const opcionPagoCredito = document.querySelector("#opc-pago-credito"); //49
const opcionEnvio = document.querySelector("#opc-envio"); //50
const opcionDescuento = document.querySelector("#opc-descuento"); //51
const mensajeDescuento = document.querySelector(
  ".checkout-resumen.p-descuento"
); //52
const mensajeEnvio = document.querySelector(".checkout-resumen.p-envio"); //54
const mensajeRecargo = document.querySelector(".checkout-resumen.p-recargo"); //53

// 😅 RESOLUCION DE FUNCIONES =====>

/* ===>  👀 👀 👀 MODO DE VISUALIZAR LAS TARJETAS (CUADRICULA O LISTA) 👀 👀 👀  <=== */

botonCuadricula.onclick = () => {
  contenedorTarjetas.classList.remove("vista-columna");
  for (let tarjeta of tarjetas) {
    tarjeta.classList.remove("vista-horizontal");
  }
  for (let parrafoDetalle of descripcionProductos) {
    parrafoDetalle.classList.add("hidden");
  }
};
botonLista.onclick = () => {
  contenedorTarjetas.classList.add("vista-columna");
  for (let tarjeta of tarjetas) {
    tarjeta.classList.add("vista-horizontal");
  }
  for (let parrafoDetalle of descripcionProductos) {
    parrafoDetalle.classList.remove("hidden");
  }
};

/* ===>  👀 👀 👀 SECCION DE FILTROS 👀 👀 👀  <=== */

// 🙈 FILTRAR POR INPUT :

filtroBusqueda.oninput = () => {
  filtrarTarjetas();
  cantDeProductosMostrados();
};
const pasaFiltroBusqueda = (tarjeta) => {
  if (filtroBusquedaTieneInput()) {
    if (inputCoincideConNombre(tarjeta)) {
      return true;
    } else {
      return false;
    }
  } else {
    return true;
  }
};

const filtroBusquedaTieneInput = () => {
  return Boolean(filtroBusqueda.value);
};

const inputCoincideConNombre = (tarjeta) => {
  if (tarjeta.dataset.name.includes(filtroBusqueda.value.toLowerCase())) {
    return true;
  } else {
    return false;
  }
};

// for (let tarjeta of tarjetas) {
//   const titulo = tarjeta.dataset.name;
//   const busqueda = filtroBusqueda.value;
//   if (titulo.includes(busqueda)) {
//     tarjeta.classList.remove("hidden");
//   } else {
//     tarjeta.classList.add("hidden");
//   }
// }

// estandarizar la constante filtrarTarjetas:

const filtrarTarjetas = () => {
  for (let tarjeta of tarjetas) {
    if (pasaFiltros(tarjeta)) {
      mostrarTarjeta(tarjeta);
    } else {
      ocultarTarjeta(tarjeta);
    }
  }
};

const ocultarTarjeta = (tarjeta) => {
  tarjeta.setAttribute("aria-hidden", true); //setAttribute(name,value) => obtener valor actual de un atributo
  return tarjeta.classList.add("hidden");
};

const mostrarTarjeta = (tarjeta) => {
  tarjeta.removeAttribute("aria-hidden", true);
  return tarjeta.classList.remove("hidden");
};

const pasaFiltros = (tarjeta) => {
  if (
    pasaFiltroBusqueda(tarjeta) &&
    pasaFiltroPorCategoria(tarjeta) &&
    pasaFiltroPorRating(tarjeta)
  ) {
    return true;
  } else {
    return false;
  }
};

// 🙈 FILTRAR POR PUNTAJE:

for (let checkbox of filtroRating) {
  checkbox.onclick = () => {
    filtrarTarjetas();
    cantDeProductosMostrados();
  };
}

const pasaFiltroPorRating = (tarjeta) => {
  if (CheckboxRatingSeleccionado()) {
    if (coincidenCheckboxRatingYTarjeta(tarjeta)) {
      return true;
    } else {
      return false;
    }
  }
  return true;
};

const CheckboxRatingSeleccionado = () => {
  for (let checkbox of filtroRating) {
    if (checkbox.checked) {
      return true;
    }
  }
};

const coincidenCheckboxRatingYTarjeta = (tarjeta) => {
  const rating = tarjeta.dataset.star;
  for (let checkbox of filtroRating) {
    if (checkbox.value === rating && checkbox.checked) {
      return true;
    }
  }
  return false;
};

//filtros por checkbox-rating otra forma:

// const filtrarPorRating = () => {
//   for (let tarjeta of tarjetas) {
//     tarjeta.classList.add("hidden");
//     if (CheckboxSeleccionado()) {
//       if (coincidenCheckboxYTarjeta(tarjeta)) {
//         tarjeta.classList.remove("hidden");
//       }
//     } else {
//       tarjeta.classList.add("hidden");
//     }
//   }
// };

// const filtrarTarjetas = () => {
//   for (let tarjeta of tarjetas) {
//     tarjeta.classList.add(`hidden`);
//     if (hayCheckboxSeleccionado()) {
//       if (coincidenCheckboxYTarjeta(tarjeta)) {
//         tarjeta.classList.remove(`hidden`);
//       }
//     } else {
//       tarjeta.classList.remove("hidden");
//     }
//   }
// };

// 🙈 FILTRAR POR CATEGORIA:

for (let checkbox of filtroCategoria) {
  checkbox.onclick = () => {
    filtrarTarjetas();
    cantDeProductosMostrados();
  };
}
const pasaFiltroPorCategoria = (tarjeta) => {
  if (checkboxCategoriaSeleccionado()) {
    if (coincidenCheckboxCategoriaYTarjeta(tarjeta)) {
      return true;
    } else {
      return false;
    }
  }
  return true;
};

const checkboxCategoriaSeleccionado = () => {
  for (let checkbox of filtroCategoria) {
    if (checkbox.checked) {
      return true;
    }
  }
};

const coincidenCheckboxCategoriaYTarjeta = (tarjeta) => {
  const categoria = tarjeta.dataset.category;
  for (let checkbox of filtroCategoria) {
    if (checkbox.checked) {
      if (checkbox.value === categoria) {
        return true;
      }
    }
  }
  return false;
};

// const filtrarTarjetas2 = () => {
//   for (let tarjeta of tarjetas) {
//     tarjeta.classList.add(`hidden`);
//     if (checkboxCategoriaSeleccionado()) {
//       if (coincidenCheckboxCategoriaYTarjeta(tarjeta)) {
//         tarjeta.classList.remove(`hidden`);
//       }
//     } else {
//       tarjeta.classList.remove("hidden");
//     }
//   }
// };

//MOSTRAR LA CANTIDAD DE PRODUCTOS SELECCIONADOS:

const cantDeProductosMostrados = (prodMostrados) => {
  prodMostrados = tarjetas.length - tarjetasHidden.length;
  productosMostrados.textContent = prodMostrados;
  productosTotales.textContent = tarjetas.length;
};

// BOTON LIMPIAR ASIDE:

botonLimpiar.onclick = () => {
  filtroBusqueda.value = "";
  for (let checkbox of checkboxes) {
    checkbox.checked = false;
  }
  for (let checkbox of filtroCategoria) {
    checkbox.checked = false;
  }
  for (let tarjeta of tarjetas) {
    tarjeta.classList.remove("hidden");
  }
  cantDeProductosMostrados();
};

// ===> 👀 👀 👀 SECTOR DE TRANSFORMACIONES 👀 👀 👀 <===

//abrir ventana checkout :

botonAbrirCheckout.onclick = () => {
  overlayPopups.classList.remove("hidden");
  mensajeCheckout.classList.remove("hidden");
  mensajeCheckout.setAttribute("aria-modal", true);
  mensajeCheckout.setAttribute("role", "dialog");
  totalCheckout();
};

//cerrar ventana checkout con boton seguir comprando:

btnSeguirComprando.onclick = () => {
  overlayPopups.classList.add("hidden");
  mensajeCheckout.classList.add("hidden");
  mensajeCheckout.removeAttribute("aria-modal");
  mensajeCheckout.removeAttribute("role");
  botonCerrarCarrito.focus();
};

// abrir vaciar carrito:

btnVaciarCarrito.onclick = () => {
  overlayPopups.classList.remove("hidden");
  mensajeVaciarCarrito.classList.remove("hidden");
  mensajeVaciarCarrito.setAttribute("aria-modal", true);
  mensajeVaciarCarrito.setAttribute("role", "dialog");
};

// cerrar vaciar carrito:

btnCancelarVaciarCarrito.onclick = () => {
  overlayPopups.classList.add("hidden");
  mensajeVaciarCarrito.classList.add("hidden");
  mensajeVaciarCarrito.removeAttribute("aria-modal");
  mensajeVaciarCarrito.removeAttribute("role");
  botonCerrarCarrito.focus();
};

//confirmacion de vaciar carrito:

btnConfirmarVaciarCarrito.onclick = () => {
  overlayPopups.classList.add("hidden");
  mensajeVaciarCarrito.classList.add("hidden");
  contenedorCarritoLleno.classList.add("hidden");
  mensajeCarritoVacio.classList.remove("hidden");
  mensajeCarritoVacio.textContent = `No tiene productos en el carrito, ¡agregue alguno!`;
  contadorProductosHeader.textContent = `${`0 items`}`;
  botonCerrarCarrito.focus();
};

// 😅 TRANSFORMACIONES DEL CARRITO ==>

// abrir ventana carrito:

botonAbrirCarrito.onclick = () => {
  overlaySidebars.classList.remove("hidden");
  ventanaCarrito.classList.add("open");
  body.classList.add("no-scroll");
  ventanaCarrito.setAttribute("aria-modal", true);
  ventanaCarrito.setAttribute("role", "dialog");
  botonCerrarCarrito.focus();
  actualizarFuncionesCarrito();
};

// cerrar ventana carrito:

botonCerrarCarrito.onclick = () => {
  overlaySidebars.classList.add("hidden");
  ventanaCarrito.classList.remove("open");
  body.classList.remove("no-scroll");
  ventanaCarrito.removeAttribute("aria-modal", true);
  ventanaCarrito.removeAttribute("role", "dialog");
  botonAbrirCarrito.focus();
};

for (let boton of botonAgregarProdCarrito) {
  boton.onclick = () => {
    boton.classList.add("producto-agregado"); //===>encontrar este error de producto-agregado
    actualizarFuncionesCarrito();
  };
}

const actualizarFuncionesCarrito = () => {
  actualizarContenidoCarrito();
  actualizarSubtotal();
  eliminarProdCarrito();
  actualizarCantidadProductos();
};

const actualizarContenidoCarrito = () => {
  const productosAgregadosCarrito = document.querySelectorAll(
    ".producto-agregado"
  ); //ver

  if (productosAgregadosCarrito.length === 0) {
    mensajeCarritoVacio.classList.remove("hidden");
    contenidoCarritoLleno.classList.add("hidden");
    mensajeCarritoVacio.textContent = `No tienes productos en el carrito, ¡agrega algunos!`;
  } else {
    mensajeCarritoVacio.classList.add("hidden");
    contenedorCarritoLleno.classList.remove("hidden");
    contenidoCarritoLleno.classList.remove("hidden");
    sumarProductosCarrito();
  }
  contarProductosEnCarrito(productosAgregadosCarrito);
};

// eliminar tarjetas del carrito :
const eliminarTarjetaDeCarrito = () => {
  const vaciarProductoDeHTML = `<div></div>`;

  return vaciarProductoDeHTML;
};

// eliminar productos del carrito con el icono basura:

const eliminarProdCarrito = () => {
  const botonesEliminarProducto = document.querySelectorAll(
    ".boton-eliminar-producto-carrito"
  );

  for (let boton of botonesEliminarProducto) {
    boton.onclick = () => {
      const tarjetaEliminar = boton.closest("article");
      const nombreTarjeta = tarjetaEliminar.dataset.name;

      tarjetaEliminar.innerHTML = eliminarTarjetaDeCarrito(tarjetaEliminar);
      eliminarClaseCuandoEliminaDelCarrito(nombreTarjeta);
      actualizarSubtotal();
    };
  }
};

// eliminar la clase de "producto-agregado" del boton:

const eliminarClaseCuandoEliminaDelCarrito = (nombreTarjeta) => {
  const productosAgregadosCarrito = document.querySelectorAll(
    ".producto-agregado"
  );

  for (let producto of productosAgregadosCarrito) {
    const nombreProducto = producto.dataset.name;

    if (nombreProducto === nombreTarjeta) {
      producto.classList.remove("producto-agregado");
    }
  }
  actualizarFuncionesCarrito();
};

// mostrar la cantidad de productos agregados al carrito:

const contarProductosEnCarrito = (productosAgregadosCarrito) => {
  prodMostrados = productosAgregadosCarrito.length;
  contadorProductosHeader.textContent = `${prodMostrados}${` items`}`;
  contadorProductosCarrito.textContent = `${prodMostrados}`;
};

const sumarProductosCarrito = () => {
  const productosAgregadosCarrito = document.querySelectorAll(
    ".producto-agregado"
  );
  mostrarTarjetasProductosDeHTML = "";

  for (let producto of productosAgregadosCarrito) {
    mostrarTarjetasProductosDeHTML =
      mostrarTarjetasProductosDeHTML + crearTarjetaProductoEnCarrito(producto);
  }
  contenidoCarritoLleno.innerHTML = mostrarTarjetasProductosDeHTML;
};

// crear la tarjeta agregada en el carrito con innerHTML desde JS:

const crearTarjetaProductoEnCarrito = (producto) => {
  const productoHTML = `<article class="product-carrito" data-name="${
    producto.dataset.name
  }" data-price="${producto.dataset.price}" data-cantidad="${
    producto.dataset.cantidad
  }">
    <img class="img-carrito" src="${producto.dataset.image}" aria-hidden="true">
    <div class="product-data-carrito">
      <div class="product-content-carrito">
          <h3 class="product-name-carrito">${producto.dataset.name}</h3>
          <button type="button" aria-label="eliminar-producto" class="boton-eliminar-producto-carrito">
            <i class="far fa-trash-alt" aria-hidden="true"></i>
          </button>
      </div>
      <div class="contenedor-producto-precio-carrito">
          <label for="producto-cantidad-carrito" class="not-flex">
            <input id="cantidad-producto-carrito" type="number" min="0" value="1" data-price="${
              producto.dataset.price
            }" />
            unidades
          </label>
          <p class="producto-precio-carrito">x ${`$`}${
    producto.dataset.price
  }</p>  
      </div>
    </div>
  </article>`;

  return productoHTML;
};

// actualizar el valor del subtotal del carrito:

const actualizarSubtotal = () => {
  const inputCantidadProductos = document.querySelectorAll(
    "#cantidad-producto-carrito"
  );
  let valorSubtotalCarrito = 0;

  for (let input of inputCantidadProductos) {
    valorSubtotalCarrito =
      valorSubtotalCarrito + input.value * Number(input.dataset.price);
  }
  subtotalCarrito.textContent = `${`$`}${valorSubtotalCarrito}`;

  subtotal.textContent = `${`$`}${valorSubtotalCarrito}`;
  total.textContent = `${`$`}${valorSubtotalCarrito}`;
  return valorSubtotalCarrito;
};

// actualizar cantidad de producto del carrito:

const actualizarCantidadProductos = () => {
  const inputCantidadProductos = document.querySelectorAll(
    "#cantidad-producto-carrito"
  );

  for (let input of inputCantidadProductos) {
    let valorSubtotalCarrito = 0;
    input.onclick = () => {
      valorSubtotalCarrito =
        valorSubtotalCarrito + input.value * Number(input.dataset.price);
      actualizarSubtotal();
    };
  }
};

// ===> agregar productos al carrito en el checkout:

//sector de opciones de pago:

const totalCheckout = () => {
  for (let opcion of opcionesPago) {
    opcion.onclick = () => {
      calcularTotal();
    };
  }
};

// funcion para calcular el total segun la forma de pago elegidas:

const calcularTotal = () => {
  let valorSubtotal = Number(subtotal.textContent.slice(1));
  let valorTotal = valorSubtotal;
  valorTotal =
    valorSubtotal + conRecargo() + conEnvio() + conTarjetaDescuento();
  total.textContent = `${`$`}${valorTotal}`;
  return valorTotal;
};

// si elige la opcion recargo seria:

let recargoPagoCredito;

const conRecargo = () => {
  let valorSubtotal = Number(subtotal.textContent.slice(1)); //49
  if (opcionPagoCredito.checked) {
    recargoPagoCredito = Number((valorSubtotal * 0.1).toFixed(1));
    recargo.textContent = `${`$`}${recargoPagoCredito}`;
    mensajeRecargo.classList.remove("hidden");
  } else {
    recargoPagoCredito = 0;
    mensajeRecargo.classList.add("hidden");
  }
  return recargoPagoCredito;
};

// si elige la opcion envio:

let costoEnvio;

const conEnvio = () => {
  if (opcionEnvio.checked) {
    costoEnvio = 300;
    envio.textContent = `${`$`}${costoEnvio}`;
    mensajeEnvio.classList.remove("hidden");
  } else {
    costoEnvio = 0;
    mensajeEnvio.classList.add("hidden");
  }
  return costoEnvio;
};

// si elige opcion descuento de tarjeta:

let valorDescuento;

const conTarjetaDescuento = () => {
  let valorSubtotal = Number(subtotal.textContent.slice(1)); //49
  if (opcionDescuento.checked) {
    valorDescuento = Number((-valorSubtotal * 0.05).toFixed(1));
    descuento.textContent = `${`$`}${valorDescuento}`;
    mensajeDescuento.classList.remove("hidden");
  } else {
    valorDescuento = 0;
    mensajeDescuento.classList.add("hidden");
  }
  return valorDescuento;
};
