import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryRef = document.querySelector(".gallery");

const createGalleryItems = ({
  preview,
  original,
  description,
}) => `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`;

const galleryList = galleryItems.map((el) => createGalleryItems(el));

galleryRef.insertAdjacentHTML("afterbegin", galleryList.join(""));

const lightBox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionPosition: "bottom",
  captionDelay: 250,
  loop: true,
});
