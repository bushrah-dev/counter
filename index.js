let count = 0
let countEl = document.getElementById("count-el")


let SaveEl = document.getElementById("save-el")

function increment() {
    count +=  1
    countEl.textContent = count
    console.log(count)
}




function save() {
    let separator = count + " - "
    SaveEl.textContent += separator
    countEl.textContent = 0
    count = 0
}