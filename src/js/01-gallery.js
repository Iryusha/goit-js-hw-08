// Add imports above this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';
// Change code below this line
const galleryList = document.querySelector('.gallery')

const galleryMark = createGalleryMark(galleryItems)
galleryList.insertAdjacentHTML('beforeend', galleryMark)

function createGalleryMark(items) {
    return items.map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
                    <img class="gallery__image"
                    src="${preview}" 
                    alt="${description}" />
                </a>`
    })
        .join('');
}

let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
})

console.log(galleryItems);
