const Nav = document.querySelector('.open-nav')
const closeNav = document.querySelector('.close-nav')
const currentNav = document.querySelector('.layer-shape')
const rightSide = document.querySelector('.right-side')
const openNavMobile = document.querySelector('.open-nav-mob');
closeNav.addEventListener('click', (e) => {
    rightSide.classList.remove('hide')
    console.log(currentNav)
    currentNav.classList.toggle('hide')
    // console.log(`hide nav`)
})

Nav.addEventListener('click', (e) => {
    rightSide.classList.toggle('hide')
    currentNav.classList.toggle('hide')
    // console.log(`hide nav`)
})
openNavMobile.addEventListener('click', (e) => {
    rightSide.classList.toggle('hide')
    currentNav.classList.toggle('hide')
    // console.log(`hide nav`)
})