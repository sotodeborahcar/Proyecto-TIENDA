// ===> DECLARACION DE VARIABLES <===
const filtroBusqueda = document.querySelector("#filtro");
const tarjetas = document.getElementsByClassName("product");

// FILTRAR POR INPUT Y TARJETAS, CUANDO SE ESCRIBA ALGO EN EL INPUT:

filtroBusqueda.oninput = () => {
  // console.log("hiciste clic");
  for (let tarjeta of tarjetas) {
    const titulo = tarjeta.dataset.name;
    const busqueda = filtroBusqueda.value;
    if (titulo.includes(busqueda)) {
      tarjeta.classList.remove("hidden");
    } else {
      tarjeta.classList.add("hidden");
    }
  }
};
