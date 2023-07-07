const burgerButton = document.querySelector('.header_burger-menu'),
    burgerMenu = document.querySelector('.burger_main-block'),
    closeBtn = document.querySelector('.close-btn');

const arrowLeft = document.querySelector('.arrow_left'),
    arrowRight = document.querySelector('.arrow_right'),
    workerList = document.querySelectorAll('.main_workers-arr'),
    workerItem = document.querySelectorAll('.main_worker-item');

burgerButton.addEventListener('mouseup', e => {
    e.preventDefault();
    burgerMenu.style.display = 'block';
});

closeBtn.addEventListener('mouseup', e => {
    e.preventDefault();
    burgerMenu.style.display = 'none';
});

let slyderCounter = 1;

function slyderCardFun() {

    if (slyderCounter > workerItem.length) {
        slyderCounter = 1;
    }

    if (slyderCounter < 1) {
        slyderCounter = workerItem.length;
    }

    workerItem.forEach(item => {
        return item.style.display = "none"
    });

    workerItem[slyderCounter - 1].style.display = 'block';
}

slyderCardFun(slyderCounter);


arrowLeft.addEventListener("click", (e) => {
    e.preventDefault();
    slyderCounter += 1;
    slyderCardFun();
})

arrowRight.addEventListener("click", (e) => {
    e.preventDefault();
    slyderCounter -= 1;
    slyderCardFun();
})