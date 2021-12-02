window.addEventListener('load', function(event){

    let loading_screen = document.querySelector('#loading_screen');
    let vh = window.innerHeight * 0.01;
    // let christmas_page = document.querySelector('#christmas-page');
    // document.christmas_page.style.setProperty('--vh', `${vh}px`);

    if(loading_screen) {
        loading_screen.classList.add('hide-page')
        window.setTimeout(function() {
            loading_screen.classList.add('d-none');
        }, 500);
    }

});