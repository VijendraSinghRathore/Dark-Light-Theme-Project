let btn = document.getElementById('btn')
let webpage = document.getElementById('webpage')
let text = document.getElementById('text')

btn.addEventListener('click', togleBtn)

function togleBtn() {
    if (btn.textContent.includes('Dark')) {
        webpage.style.backgroundColor = "black"
        text.style.color = "white"
        btn.innerHTML = "Light Theme"
    } else {
        webpage.style.backgroundColor = "blue"
        text.style.color = "black"
        btn.innerHTML = "Dark Theme"
    }
}