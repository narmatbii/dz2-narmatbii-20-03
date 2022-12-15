
const box = document.querySelector('.box')
const btn = document.querySelector('.startBlock')



let xPos = 0;
let yPos = 0;

btn.addEventListener("click", function () {
     moveBlock();

})


function moveBlock() {
    if (xPos < 400 && yPos == 0){
        xPos += 20;
        box.style.left = `${xPos}px`
        setTimeout(moveBlock,100)
    }else if (xPos >= 400 && yPos < 300) {
        yPos += 20;
        box.style.top = `${yPos}px`
        setTimeout(moveBlock,100)
    }else if (xPos > 0 && yPos >= 300) {
        xPos -= 20;
        box.style.left = `${xPos}px`
        setTimeout(moveBlock,100)
    }else if (xPos == 0 && yPos > 0) {
        yPos -= 20;
        box.style.top = `${yPos}px`
        setTimeout(moveBlock,100)
    }

}



let num = 0

const startBtn = document.querySelector(`.startTime`)
const stopBtn = document.querySelector(`.stopTime`)
const timer = document.querySelector('#timer')
let interval



startBtn.addEventListener('click',() =>{
    interval = setInterval(() => {
        num++
        timer.innerHTML = num
    }, 1000)
})



stopBtn.addEventListener("click", ()=> {
    clearInterval(interval)

})