textarea = document.querySelectorAll('.main__container__central__form__code__area__text');

window.addEventListener('load', function () {
    for (let i = 0; i < textarea.length; i++) {
        textarea[i].style.height = (textarea[i].scrollHeight - 70) + "px";
    }
});

colorBox = document.querySelector('.main__container__central__form__code__area__color');
colorButton = document.querySelector('.main__container__right__customize__form__colors');
colors = ['#9AFF6B', '#6B83FF', '#FFC46B', '#FF6BCD','#6BD1FF'];

let i = 0;
colorButton.addEventListener('click', function () {
        let color = colors[i];
        if (color == undefined){
            i = 0;
        }
        color = colors[i];
        colorBox.style.background = color;
        colorButton.style.background = color;
        i++;
});