function adjustmentContent(){

    var toolbar = document.getElementsByClassName('toolbar');
    var height = toolbar[0].offsetHeight;

    var content = document.getElementsByClassName('content');
    content[0].style.paddingTop = height + 'px';
}

adjustmentContent();