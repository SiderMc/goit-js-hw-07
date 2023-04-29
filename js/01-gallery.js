import { galleryItems } from "./gallery-items.js";

const galleryList = document.querySelector(".gallery");

function gallery(arr) {
  return arr.map((items) => markup(items));
}
function markup(items) {
  const { preview, original, description } = items;
  return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
}

function renderList() {
  gallery(galleryItems);
  galleryList.innerHTML = gallery(galleryItems).join("");
}
renderList();

let instance;

function zommIn(e) {
  e.preventDefault();
  if (e.target.classList.contains("gallery__image")) {
    const target = e.target.dataset.source;
    instance = basicLightbox.create(`
         <img src="${target}" width="800" height="600">
    `);
    instance.show();
  }
}

function zoomOut(e) {
  if (e.key === "Escape") {
    instance.close();
  }
}

galleryList.addEventListener("click", zommIn);
galleryList.addEventListener("keydown", zoomOut);
