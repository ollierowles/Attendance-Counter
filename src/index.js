let count = 0
let saveEl = document.getElementById("save-el")

function increment() {
    count += 1
    document.getElementById("count-el").innerText = count
}

// textContent is used as innerText only grabs human-readable elements i.e. not whitespace
function save() {
    console.log(count)
    let countStr = count + " - "
    saveEl.textContent += countStr
    count = 0
    document.getElementById("count-el").innerText = count
}