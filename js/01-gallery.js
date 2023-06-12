import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");

const item = galleryItems.map(
  ({ preview, original, description }) =>
    `<li class="gallery__item">
<a class="gallery__link" href = ${original}>
<img class="gallery__image" 
src = ${preview} 
data-source = ${original} 
 alt = ${description}/>
 </a>
</li>`
);

gallery.insertAdjacentHTML("beforeend", item.join(""));

gallery.addEventListener("click", modaleShow);
function modaleShow(event) {
  console.log("modal image is open");
  event.preventDefault();
  const { target } = event;
  if (!target.classList.contains("gallery__image")) {
    return;
  }

  const imgEl = target.dataset.source;

  const instance = basicLightbox.create(
    `<img src="${imgEl}" width="800" height="600">`
  );

  instance.show();

  if (instance.visible()) {
    window.addEventListener("keydown", modaleClose);
  }
  function modaleClose(event) {
    console.log("modal image is closed");

    if (event.code === "Escape") {
      instance.close();
    }
  }
}
