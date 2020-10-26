// ===> DECLARACION DE VARIABLES <===
const filtroBusqueda = document.querySelector("#filtro"); // = filtroNombre
const tarjetas = document.getElementsByClassName("product");
const filtroRating = document.getElementsByClassName("start-filter");
const checkboxes = document.querySelectorAll(".start-filter");
const botonLimpiar = document.querySelector(".filter-clear");
const filtroCategoria = document.getElementsByClassName("filter-category");

// FILTRAR POR INPUT Y TARJETAS, CUANDO SE ESCRIBA ALGO EN EL INPUT:

filtroBusqueda.oninput = () => {
  filtrarTarjetas();
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
  tarjeta.setAttribute("aria-hidden", true);
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

// FILTRAR POR CHECKBOXES:

for (let checkbox of filtroRating) {
  checkbox.onclick = () => {
    filtrarTarjetas();
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

//FILTRAR POR CATEGORIA:

for (let checkbox of filtroCategoria) {
  checkbox.onclick = () => {
    filtrarTarjetas();
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

//filtros por checkbox-rating:

const filtrarPorRating = () => {
  for (let tarjeta of tarjetas) {
    tarjeta.classList.add("hidden");
    if (CheckboxSeleccionado()) {
      if (coincidenCheckboxYTarjeta(tarjeta)) {
        tarjeta.classList.remove("hidden");
      }
    } else {
      tarjeta.classList.add("hidden");
    }
  }
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

// BOTON:

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
};
