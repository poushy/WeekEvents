function week (rootId) {

    const weekClass = '.week';
    const weekDoc = document.querySelector(`${rootId} ${weekClass}`);

    function removeClass (className) {
        weekDoc.querySelectorAll('span').forEach(elem => elem.classList.remove(className));
    }

    function onClickDay (event) {
        const target = event.target;
        removeClass('selected');
        target.classList.add("selected");
    }

    function init() {
        weekDoc.addEventListener("click", onClickDay);
    }

    init();
}

export default week;