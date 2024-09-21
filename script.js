const texts = document.querySelector('.text')
function change(){

    var randomColor = (Math.floor(Math.random() *16777216)) .toString(16);
    document.body.style.backgroundColor = '#' + randomColor;
    texts.innerHTML = randomColor;
}
