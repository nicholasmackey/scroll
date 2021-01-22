const terms = document.querySelector('.terms-and-conditions');
const watch = document.querySelector('.watch');
const button = document.querySelector('.accept');

function observerCallback(payload) {
    if (payload[0].intersectionRatio) {
        button.disabled = false;
        observer.unobserve(terms.lastElementChild);
    } 
}

const observer = new IntersectionObserver(observerCallback, {
    root: terms,
    threshold: 1,
});

observer.observe(terms.lastElementChild);

const isAdmin = true;

const showAminBar = () => console.log('showing admin bar');

isAdmin && showAminBar()