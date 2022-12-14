var overlay = document.querySelector('.jl-overlay');
var frameContainer = document.querySelector(".jl-gallery-frame-container");
var frameImage = document.querySelector('.jl-gallery-frame-image');
var galleryImages = document.querySelectorAll('.jl-thumb-img');
var closeGallery = document.querySelectorAll('.jl-toggle-gallery');

const getImagesrc = function(){
    for(var i = 0; i < galleryImages.length; i++){
        galleryImages[i].addEventListener('click', function(){
            var imageSrc = this.getAttribute('data-src');
            frameImage.setAttribute('src', imageSrc);

            overlay.classList.add('jl-is-open');
            frameContainer.classList.add('jl-is-open');
        });
    }
}

for (var c = 0; c < closeGallery.length; c++){
    closeGallery[c].addEventListener('click', function(){
       overlay.classList.remove('jl-is-open');
       frameContainer.classList.remove('jl-is-open');
    });
}

getImagesrc();