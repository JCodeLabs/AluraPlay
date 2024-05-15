import { conexionAPI } from "./conexionAPI.js";

const contenedorVideos = document.querySelector("[data-lista");

export default function crearCard(titulo, descripcion, url, imagem) {
  const video = document.createElement("li");
  video.className = "videos__item";
  video.innerHTML = `
    <li class="videos__item">
      <iframe
        width="100%"
        height="72%"
        src=${url}
        title=${titulo}
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div class="descripcion-video">
        <img src=${imagem} />
        <h3>${titulo}</h3>
        <p>${descripcion}</p>
      </div>
    </li>
  `;
  return video;
}

async function listarVideos() {
  try {
    const listaAPI = await conexionAPI.listarVideos();
    listaAPI.forEach((video) =>
      contenedorVideos.appendChild(
        crearCard(video.titulo, video.descripcion, video.url, video.imagem)
      )
    );
  } catch (error) {
    console.error("Error: ", error);
    contenedorVideos.innerHTML = `<h2 class="mensaje__titulo">Ha ocurrido un problema con la conexión :(</h2>`;
  }
}

listarVideos();