import { conexionAPI } from "./conexionAPI.js";

const formulario = document.querySelector("[data-formulario]");

async function crearVideo(e) {
  e.preventDefault();

  const titulo = document.querySelector("[data-titulo]").value;
  const descripcion = document.querySelector("[data-descripcion]").value;
  const url = document.querySelector("[data-url]").value;
  const imagem = document.querySelector("[data-imagem]").value;

  try {
    await conexionAPI.enviarVideo(titulo, descripcion, url, imagem);
    window.location.href = "../pages/envio-concluido.html";
  } catch (error) {
    alert(error);
  }
}

formulario.addEventListener("submit", (e) => crearVideo(e));