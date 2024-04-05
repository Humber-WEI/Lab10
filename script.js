function changeContent() {
    document.getElementById("message").innerHTML = "Text changed successfully!";
}

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256); 
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

function changeBackgroundColor() {
    document.body.style.backgroundColor = getRandomColor();
}

function appendNewPTag() {
    document.getElementById("container").innerHTML += "<p>New paragraph added dynamically!</p>"
}

document.addEventListener('DOMContentLoaded', changeBackgroundColor);
document.addEventListener('DOMContentLoaded', appendNewPTag);