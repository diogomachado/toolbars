var buttons = document.querySelectorAll(".toolbar button");

for(var x=0; x < buttons.length; x++){
    buttons[x].addEventListener("click", waveEffect);
}

function waveEffect(e){
    e.preventDefault();

    var btnWidth = this.offsetWidth,
        x = e.offsetX,
        y = e.offsetY;

    var el = this;
    var span = document.createElement('span');
    span.className = "effect-wave";

    var wave = this.insertBefore(span, el.firstChild);

    wave.style.top = y + 'px';
    wave.style.left = x + 'px';

    setTimeout(function() {
        wave.remove();
    }, 300);
}