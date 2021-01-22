const terms = document.querySelector('.terms-and-conditions');
const watch = document.querySelector('.watch');

function observerCallback(payload) {
    console.log(payload);
}

const observer = new IntersectionObserver(observerCallback)

observer.observe(watch);