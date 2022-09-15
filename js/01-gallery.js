import { galleryItems } from "./gallery-items.js";

const galleryMarkup = galleryItems.map(createGalleryMarkup).join("");

const refs = {
  gallery: document.querySelector(".gallery"),
};

refs.gallery.innerHTML = galleryMarkup;
refs.gallery.addEventListener("click", handleModalOpen);

function handleModalOpen(e) {
  e.preventDefault();
  const { nodeName, dataset } = e.target;
  nodeName === "IMG" && showModal(dataset.source);
}

function showModal(src) {
  const handleModalClose = ({ code }) => {
    code === "Escape" && modal.close();
  };

  const modalMarkup = `<img src="${src}" width="800" height="600">`;

  const modalOptions = {
    onShow: () => {
      document.addEventListener("keydown", handleModalClose);
    },
    onClose: () => {
      document.removeEventListener("keydown", handleModalClose);
    },
  };

  const modal = basicLightbox.create(modalMarkup, modalOptions);

  modal.show();
}

function createGalleryMarkup({ preview, original, description }) {
  return `
    <div class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
        />
      </a>
    </div>
  `;
}
