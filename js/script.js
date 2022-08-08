
// Close loader
const loader = document.querySelector('.loader');
window.addEventListener('load',function(){
    loader.classList.add('hidden');
})


// Navigation

const nav = document.getElementById('nav');
const open = document.getElementById('open');
const close = document.getElementById('close');

// Open Navbar
open.addEventListener('click', function(){
    nav.classList.add('right-0');
});

// close the navbar
close.addEventListener('click', function(){
    nav.classList.remove('right-0');
});

// Lighbox
const lightbox = document.querySelector('.lightbox');
const lightboxBody = document.querySelector('.lightbox-body');
const images = document.querySelectorAll('#gallery');

images.forEach(function(image){
    image.addEventListener('click',function(){
        lightbox.classList.add('scale-100');
        const img = document.createElement('img'); //create image element
        img.src = image.src;
        img.classList.add('w-full');
        img.classList.add('h-full');
        img.classList.add('object-cover');
        img.classList.add('rounded');
        if(lightboxBody.children[0]){
            lightboxBody.removeChild(lightboxBody.children[0]);
        }
        lightboxBody.appendChild(img);
    })
})

// Close lightbox
lightbox.addEventListener('click',function(e){
    const idName = e.target.getAttribute('id');
    if(idName === 'lightbox') {
        lightbox.classList.remove('scale-100');
    }
    
})

// Get current year for copyright
const year = document.querySelector('.year');
const getYear = new Date().getFullYear();
year.innerText = getYear;

