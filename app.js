const terms = document.querySelector('.terms-and-conditions');
const watch = document.querySelector('.watch');
const button = document.querySelector('.accept');

function observerCallback(payload) {
    if (payload[0].intersectionRatio) {
        button.disabled = false;
    } else {
        button.disabled = true;
    }
}

const observer = new IntersectionObserver(observerCallback)

observer.observe(terms.lastElementChild);