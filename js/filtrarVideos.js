import { conexionAPI } from "./conexionAPI.js";
import crearCard from "./mostrarVideos.js";

async function filtrarVideo(e) {
  e.preventDefault();

  const datosDeBusqueda = document.querySelector("[data-busqueda]").value;
  const busqueda = await conexionAPI.bucarVideos(datosDeBusqueda);

  const lista = document.querySelector("[data-lista");

  while(lista.firstChild){
    lista.removeChild(lista.firstChild);
  }

  busqueda.forEach((video) =>
    lista.appendChild(
      crearCard(video.titulo, video.descripcion, video.url, video.imagem)
    )
  );
}

const btnBuscar = document.querySelector("[data-btn-busqueda]");

btnBuscar.addEventListener("click", (e) => filtrarVideo(e));
