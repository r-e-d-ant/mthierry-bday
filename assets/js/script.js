

const bdayYear = document.querySelector('.year');

bdayYear.textContent = 2002

var yearPlus = 2002;

const giveYear = () => {
    if(yearPlus != 2022) {
        yearPlus += 1
        bdayYear.textContent = yearPlus
    }else {
        bdayYear.textContent = 2022
    }
}

setTimeout(() => {
    setInterval(giveYear, 100);
}, 4000)

const celeb = document.querySelector('.celeb')

setTimeout(() => {
    celeb.removeAttribute("loop", "")
}, 4120)
