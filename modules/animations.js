//Letter in header animation

export function animaton() {
    const headerBox = document.querySelectorAll('.header-box')
    
 headerBox.forEach((elem , index) => {
    elem.style.animation = 'Animals-animation ease-in 1s alternate infinite'
    elem.style.animationDelay = `${(index/10)+0.1}s`
});
}