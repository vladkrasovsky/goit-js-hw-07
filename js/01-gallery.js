import { galleryItems } from "./gallery-items.js";

const IMG_NODE_NAME = "IMG";
const ESC_KEY_CODE = "Escape";

const refs = {
  gallery: document.querySelector(".gallery"),
};

refs.gallery.innerHTML = galleryItems.map(createGalleryItemMarkup).join("");
refs.gallery.addEventListener("click", handleModalOpen);

function handleModalOpen(e) {
  e.preventDefault();
  const { nodeName, dataset } = e.target;
  nodeName === IMG_NODE_NAME && showModal(dataset.source);
}

function showModal(src) {
  const handleModalClose = ({ code }) => {
    code === ESC_KEY_CODE && modal.close();
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

function createGalleryItemMarkup({ preview, original, description }) {
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
