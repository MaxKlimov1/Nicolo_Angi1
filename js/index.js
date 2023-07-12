// const observer = new IntersectionObserver(entries => {
//     // перебор записей
//     entries.forEach(entry => {
//       // если элемент появился
//       if (entry.isIntersecting) {
//         // добавить ему CSS-класс
//         entry.target.classList.add('square-animation');
//       }
//     });
//   });
//   observer.observe(document.querySelector('.about-img3'));

//   const observerTwo = new IntersectionObserver(entries => {
//     // перебор записей
//     entries.forEach(entry => {
//       // если элемент появился
//       if (entry.isIntersecting) {
//         // добавить ему CSS-класс
//         entry.target.classList.add('square-animation-rev');
//       }
//     });
//   });
//   observerTwo.observe(document.querySelector('.about-img1'));

const a = document.querySelector('.about-img1');
const b = document.querySelector('.about-img3');
const c = document.querySelector('.place-image');

window.addEventListener('scroll', e => {
    e.preventDefault();
    console.log(window.scrollY)

    if(scrollY >=256) {
        a.classList.add('square-animation-rev')
        b.classList.add('square-animation')
    }

    if(scrollY >=1100) {
        c.classList.add('square-animation')
    }
})