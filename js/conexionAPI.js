async function listarVideos() {
  const conexion = await fetch("http://localhost:3000/videos");
  const conexionConvertida = await conexion.json();
  return conexionConvertida;
}

async function enviarVideo(titulo, descripcion, url, imagem) {
  const conexion = fetch("http://localhost:3000/videos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      titulo,
      descripcion: `${descripcion} mil visualizaciones`,
      url,
      imagem,
    }),
  });

  const conexionConvertida = (await conexion).json;
  return conexionConvertida;
}

async function bucarVideos(palabraClave) {
  const conexion = await fetch(
    `http://localhost:3000/videos?titulo_like=${palabraClave}`
  );
  const conexionConvertida = await conexion.json();
  return conexionConvertida;
}

// Exportamos un objeto llamado "conexionAPI" que contiene la función "listarVideos"
export const conexionAPI = {
  listarVideos,
  enviarVideo,
  bucarVideos,
};



















// const contenedorDeVideos = document.querySelector(".videos__container");

// async function listarVideos() {
//   try {
//     const response = await fetch("http://localhost:3000/videos");

//     if (!response.ok)
//     throw new Error("Estatus de la petición: " + response.status);

//     const data = await response.json();

//     data.forEach((element) => {
//       contenedorDeVideos.innerHTML += `
//         <li class="videos__item">
//           <iframe
//             width="100%"
//             height="72%"
//             src=${element.url}
//             title=${element.titulo}
//             frameborder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowfullscreen
//           ></iframe>
//           <div class="descripcion-video">
//             <img src=${element.imagem} />
//             <h3>${element.titulo}</h3>
//             <p>${element.descripcion}</p>
//           </div>
//         </li>
//       `;
//     });
//   } catch (error) {
//     console.error(error);
//   }
// }

// function listarVideos() {
//   fetch("http://localhost:3000/videos")
//     .then((response) => {
//       if (!response.ok)
//         throw new Error("Estatus de la petición: " + response.status);
//       return response.json();
//     })
//     .then((data) => {
//       data.forEach( (video) => {
//         contenedorDeVideos.innerHTML += `
//           <li class="videos__item">
//             <iframe
//               width="100%"
//               height="72%"
//               src=${video.url}
//               title=${video.titulo}
//               frameborder="0"
//               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//               allowfullscreen
//             ></iframe>
//             <div class="descripcion-video">
//               <img src=${video.imagem} />
//               <h3>${video.titulo}</h3>
//               <p>${video.descripcion}</p>
//             </div>
//           </li>
//         `;
//       });
//     })
//     .catch((error) => console.error(error));
// }

// listarVideos();