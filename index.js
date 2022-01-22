var x = 0

const button = document.createElement('button');
button.style.height = "40px"
button.style.width = "40px"
button.style.fontSize = "24px"
button.style.backgroundClip = "#FFF"
button.style.position = "absolute"
button.innerHTML = '+';
button.style.color = "#000"

const interval = setInterval(() => {
    if(document.getElementsByTagName("button").length > 3) {
        var element = document.getElementsByClassName("vqs9je")[0]
        var arr = document.getElementsByTagName("button")
        var y = [].slice.call(arr)
        y.splice(0, 0, button);
        y.join()
        document.getElementsByTagName("button")[1].style.display = "none";
        element.appendChild(button)
        x++;
    }

    if(x > 0) {
        clearInterval(interval)
    }
}, 2500)

button.addEventListener('click', () => {
    document.getElementsByTagName("button")[1].style.display = "block";
})

