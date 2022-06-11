
const loadImage = (entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            const imgNode = entry.target;
            const url = imgNode.dataset.src;
            imgNode.src = url;
        }
    })
}

const observer = new IntersectionObserver(loadImage, {
    root: null,
    rootMargin: '0px',
    threshold: 0.2
});


const registerImage = (images) => {
    observer.observe(images)
}


export default registerImage; 