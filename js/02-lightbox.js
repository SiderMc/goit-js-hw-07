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

new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  overlayOpacity: 1,
  captionsData: "alt",
});
