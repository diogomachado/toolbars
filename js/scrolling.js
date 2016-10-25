var state = window.pageYOffset;

// Watch
document.addEventListener("scroll", toolbarScrolling);

function toolbarScrolling(){

    var element = document.querySelector(".toolbar");

    if (window.pageYOffset > state){

        if (!element.classList.contains('hide')){
            element.className = 'toolbar hide';
        }

    }else{

        if (element.classList.contains('hide')){
            element.className = 'toolbar show';
        }
        console.info("Subindo.");
    }

    state = window.pageYOffset;
}