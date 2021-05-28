let colorBox = document.querySelector('.main__container__central__form__code__area__color');
let colorButton = document.querySelector('.main__container__right__customize__form__colors');
let colors = ['#9AFF6B', '#6B83FF', '#FFC46B', '#FF6BCD', '#6BD1FF'];

let i = 0;
colorButton.addEventListener('click', function (e) {
    let color = colors[i];
    if (color == undefined) {
        i = 0;
    }
    color = colors[i];
    colorBox.style.background = color;
    colorButton.style.background = color;
    i++;
    e.preventDefault()
});

let highlightBtn = document.getElementById('form-code-btn');
let textareaText = document.getElementById('code-text-textarea');
let highlight = document.getElementById('code-text-highlight');
let codeCustomize = document.getElementById('customize-code-types');

let click = false;

highlightBtn.addEventListener('click', function (e) {
    text = textareaText.value;
    let code = codeCustomize.value;
    if (!click) {        
        textareaText.style.display = 'none';        
        highlight.classList.add(code)
        highlight.innerText = textareaText.value;
        hljs.highlightAll();
        highlightBtn.innerText = 'Retornar à edição do código'
        click = true;
    }else{
        textareaText.style.display = 'block';
        highlight.classList.remove(code)
        highlight.innerText = '';
        highlightBtn.innerText = 'Visualizar com highlight'
        click = false;
        e.preventDefault()
    }
    e.preventDefault()
    
});