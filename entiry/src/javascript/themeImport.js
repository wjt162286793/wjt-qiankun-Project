if (!localStorage.getItem('DItheme')) {
    localStorage.setItem('DItheme', 'red')
}
let theme = localStorage.getItem('DItheme')
document.body.dataset.theme = theme
console.log(window, '全局', theme)