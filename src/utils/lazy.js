const allImages = document.querySelectorAll("img[data-src]");

const loadImage = (entry) => {
    const imgNode = entry.target;
    //Configurar la url cuando cargue la imagen
    const url = imgNode.dataset.src;
    imgNode.src = url;
    console.log("hola");
}

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 1.0
}

const observer  = new IntersectionObserver(loadImage, options)


export default loadImage;