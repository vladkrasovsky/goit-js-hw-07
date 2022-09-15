import { galleryItems } from "./gallery-items.js";

const galleryMarkup = galleryItems.map(createGalleryMarkup).join("");

const refs = {
  gallery: document.querySelector(".gallery"),
};

refs.gallery.innerHTML = galleryMarkup;

const lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

function createGalleryMarkup({ preview, original, description }) {
  return `
    <a class="gallery__item" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
    </a>
  `;
}
