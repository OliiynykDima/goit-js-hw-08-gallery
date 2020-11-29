'use strict'

import galleryItems from "./js/gallery-items.js";
import refs from "./js/refs.js";

const createMarkup = ({preview, original, description}) =>
`<li class="gallery__item">
<a
  class="gallery__link"
  href= ${original}
>
  <img
    class="gallery__image"
    src=${preview}
    data-source=${original}
    alt=${description}
  />
</a>
</li>`;

const createGalery = (galleryItems) => galleryItems.map((item) =>
createMarkup(item)).join('');

refs.ulGallery.insertAdjacentHTML('beforeend', createGalery(galleryItems));

const showImg = (e) => {
  e.preventDefault();
    refs.lightBox.classList.add('is-open');
    refs.bigImg.src = e.target.dataset.source;
};

const closeImg = (e) => {
  refs.lightBox.classList.remove('is-open');
  refs.bigImg.src = '';
};

const controlGallery = (e) => {

  if(e.target.classList.contains("gallery__image")
  && !refs.lightBox.classList.contains('is-open')) {
    showImg(e)
  };

  if (refs.lightBox.classList.contains('is-open')
  && e.target === refs.closeBtn
  || e.target.classList.contains("lightbox__content")
  || e.code === 'Escape') {
      closeImg(e);
  };
};


document.addEventListener('click', controlGallery);
document.addEventListener("keydown", controlGallery);