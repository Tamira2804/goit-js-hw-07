import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryRef = document.querySelector(".gallery");

const createGalleryItems = ({
  preview,
  original,
  description,
}) => `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;

const galleryList = galleryItems.map((el) => createGalleryItems(el));

galleryRef.insertAdjacentHTML("afterbegin", galleryList.join(""));

let lightBox = null;

const handleKeyDown = (event) => {
  if (event.code === "Escape") {
    lightBox.close();

    document.removeEventListener("keydown", handleKeyDown);
  }
};

galleryRef.addEventListener("click", (event) => {
  event.preventDefault();

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const originalImageUrl = event.target.dataset.source;

  lightBox = basicLightbox.create(`<img src="${originalImageUrl}"/>`);

  lightBox.show();

  document.addEventListener("keydown", handleKeyDown);
});
