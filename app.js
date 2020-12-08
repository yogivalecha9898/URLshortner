const gayab = ()=> {
    const dis = document.querySelector('.attribution')
    const cen = document.querySelector('.central')

    cen.classList.add('vanish')
    setTimeout(() => {
        cen.style.display = "none"
        dis.style.zIndex = "-1"
    }, 3000);


    const ham = document.querySelector('.ham')
    const list = document.querySelector('.navbar-ham .list_2')

    ham.addEventListener('click', (e)=> {
        console.log(e.target)
        ham.classList.toggle('down')
        list.classList.toggle('back')
    })
}

