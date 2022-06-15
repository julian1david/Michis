
const loadImage = (entry, observer) => {
    const imgNode = entry.target;
    const url = imgNode.getAttribute('data-src');
    imgNode.setAttribute('src', url);
    observer.unobserve(imgNode);
}

const options = {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 0
}

const observer = new IntersectionObserver((entries) => {
    entries.filter(entry => entry.isIntersecting)
            .forEach(entry => {
                loadImage(entry, observer);
        })
}, options);


const registerImage = (images) => {
    observer.observe(images)
}


export default registerImage; 