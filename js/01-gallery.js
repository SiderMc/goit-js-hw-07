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
  galleryList.innerHTML = gallery(galleryItems).join("");
}
renderList();

let instance;

function zoomIn(e) {
  e.preventDefault();
  if (e.target.nodeName === "IMG") {
    const target = e.target.dataset.source;
    instance = basicLightbox.create(
      `
      <img src="${target}" width="800" height="600">
    `,
      {
        onShow: () => window.addEventListener("keydown", zoomOut),
        onClose: () => window.removeEventListener("keydown", zoomOut),
      }
    );
    instance.show();
  }
}

function zoomOut(e) {
  if (e.key === "Escape" && instance) {
    instance.close();
  }
}

window.document.addEventListener("click", zoomIn);
window.document.addEventListener("keydown", zoomOut);
