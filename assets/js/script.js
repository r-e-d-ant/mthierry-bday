

const bdayYear = document.querySelector('.year');

bdayYear.textContent = 2002

var yearPlus = 2002;
var sec = 0;

const giveYear = () => {
    if(yearPlus != 2022) {
        yearPlus += 1
        sec += 1
        console.log(sec)
        bdayYear.textContent = yearPlus
    }else {
        bdayYear.textContent = 2022
    }
}

setInterval(giveYear, 2000);

const celeb = document.querySelector('.celeb')

setTimeout(() => {
    celeb.removeAttribute("loop", "")
}, 21000)
