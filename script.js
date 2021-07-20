function swapTheme() {
    var app = document.querySelector('#id') ;
    var day = document.querySelector('.day') ;
    var swap = document.querySelector('#swap') ;
    var button_day = document.querySelector('.button_day') ;

    button_day.classList.toggle("button_night") ;
    day.classList.toggle("night") ;
}